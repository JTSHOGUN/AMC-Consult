"use server";

import { promises as fs } from "fs";
import path from "path";

/**
 * Server-side form handling: validation, bot filtering, sanitisation and a
 * stored copy of every accepted submission. Swap the file store for Sanity or
 * a database when the CMS lands (Phase 3); email delivery (Resend) plugs in here.
 */

export type FormState = {
  status: "idle" | "success" | "error";
  errors?: Record<string, string>;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Strip control characters and cap length before storing anything. */
function clean(value: FormDataEntryValue | null, maxLength = 4000): string {
  return String(value ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

/**
 * Bot checks: honeypot field must stay empty, and forms that include a
 * submit-timestamp must not be filled faster than a human could read them.
 * The timestamp is optional so the form still works without JavaScript.
 */
function isBot(formData: FormData): boolean {
  if (clean(formData.get("company_website"), 200).length > 0) return true;
  const ts = Number(formData.get("form_ts") || 0);
  if (ts && Date.now() - ts < 1500) return true;
  return false;
}

const CV_ALLOWED_EXT = /\.(pdf|doc|docx)$/i;
const CV_MAX_BYTES = 5 * 1024 * 1024;

async function storeCv(file: File): Promise<string> {
  const safeName = clean(file.name, 200) || "cv";
  if (!CV_ALLOWED_EXT.test(safeName)) throw new Error("unsupported CV type");
  if (file.size === 0 || file.size > CV_MAX_BYTES) throw new Error("CV size out of range");
  const dir = path.join(process.env.DATA_DIR || path.join(process.cwd(), "data"), "uploads");
  await fs.mkdir(dir, { recursive: true, mode: 0o700 });
  const ext = (safeName.match(CV_ALLOWED_EXT) || [".bin"])[0].toLowerCase();
  const stored = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}${ext}`;
  await fs.writeFile(path.join(dir, stored), Buffer.from(await file.arrayBuffer()), {
    mode: 0o600,
  });
  return stored;
}

async function store(fileName: string, record: Record<string, unknown>) {
  // Project-local for development. On serverless hosts, point DATA_DIR at /tmp
  // or replace this with the CMS/DB write.
  const dir = process.env.DATA_DIR || path.join(process.cwd(), "data");
  try {
    await fs.mkdir(dir, { recursive: true, mode: 0o700 });
    await fs.appendFile(
      path.join(dir, fileName),
      `${JSON.stringify({ ...record, receivedAt: new Date().toISOString() })}\n`,
      { encoding: "utf8", mode: 0o600 },
    );
  } catch (err) {
    // Never fail the user's request because storage failed; log for ops
    // without writing personal data to the logs.
    console.error(
      "[forms] could not persist submission:",
      err instanceof Error ? err.message : "unknown error",
    );
  }
}

export async function submitProposal(_prev: FormState, formData: FormData): Promise<FormState> {
  if (isBot(formData)) {
    // Pretend success so bots get no signal.
    return { status: "success" };
  }

  const values = {
    name: clean(formData.get("name"), 120),
    email: clean(formData.get("email"), 200),
    organisation: clean(formData.get("organisation"), 200),
    orgType: clean(formData.get("orgType"), 40),
    service: clean(formData.get("service"), 80),
    timeline: clean(formData.get("timeline"), 40),
    message: clean(formData.get("message"), 4000),
    consent: formData.get("consent") === "on" || formData.get("consent") === "true",
  };

  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "Please enter your name.";
  if (!values.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.organisation) errors.organisation = "Please enter your organisation.";
  if (!values.message) errors.message = "Please tell us briefly what you need.";
  if (!values.consent) errors.consent = "Please agree to the privacy policy so we can respond.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  await store("submissions.jsonl", { kind: "proposal", ...values });
  return { status: "success" };
}

export async function submitJoin(_prev: FormState, formData: FormData): Promise<FormState> {
  if (isBot(formData)) {
    return { status: "success" };
  }

  const track = clean(formData.get("track"), 20) === "staff" ? "staff" : "roster";
  const cvFile = formData.get("cv");
  const values = {
    kind: `join-${track}`,
    name: clean(formData.get("name"), 120),
    email: clean(formData.get("email"), 200),
    phone: clean(formData.get("phone"), 40),
    roles: clean(formData.get("roles"), 200),
    message: clean(formData.get("message"), 4000),
    cvFileName: null as string | null,
    consent: formData.get("consent") === "on" || formData.get("consent") === "true",
  };

  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "Please enter your full name.";
  if (!values.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.message) errors.message = "Please add a short description.";
  if (track === "roster" && !values.consent) {
    errors.consent = "Please consent to AMC storing your details for roster consideration.";
  }
  if (cvFile instanceof File && cvFile.size > 0) {
    try {
      values.cvFileName = await storeCv(cvFile);
    } catch {
      errors.cv = "Please upload your CV as a PDF or Word document no larger than 5 MB.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  await store("submissions.jsonl", values);
  return { status: "success" };
}
