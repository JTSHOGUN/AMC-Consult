"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { submitJoin, type FormState } from "@/app/actions";

export function JoinForm({ track }: { track: "roster" | "staff" }) {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [pending, startTransition] = useTransition();
  const tsRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (tsRef.current) tsRef.current.value = String(Date.now());
  }, []);

  if (state.status === "success") {
    return (
      <div className="glass-light px-6 py-10 text-center" role="status">
        <p className="font-display text-xl text-ink">Thank you. We have received your details.</p>
        <p className="mt-2 text-fore/80">Our team will review and respond within five working days.</p>
        <button type="button" className="btn btn-secondary mt-5" onClick={() => setState({ status: "idle" })}>
          Send another
        </button>
      </div>
    );
  }

  const field =
    "mt-2 w-full rounded-[12px] border border-ink/20 bg-white px-4 py-3 transition-colors focus:border-accent";
  const err = "mt-1.5 text-sm text-[#b3261e]";

  return (
    <form
      className="glass-light p-7"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        data.set("track", track);
        startTransition(async () => {
          const result = await submitJoin({ status: "idle" }, data);
          setState(result);
        });
      }}
      noValidate
    >
      <input type="hidden" name="track" value={track} />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="font-display text-sm font-bold text-ink" htmlFor={`${track}-name`}>
            Full name
          </label>
          <input id={`${track}-name`} name="name" type="text" autoComplete="name" maxLength={120} className={field} aria-invalid={!!state.errors?.name} />
          {state.errors?.name && <p className={err}>{state.errors.name}</p>}
        </div>
        <div>
          <label className="font-display text-sm font-bold text-ink" htmlFor={`${track}-email`}>
            Email
          </label>
          <input id={`${track}-email`} name="email" type="email" autoComplete="email" maxLength={200} className={field} aria-invalid={!!state.errors?.email} />
          {state.errors?.email && <p className={err}>{state.errors.email}</p>}
        </div>
        <div>
          <label className="font-display text-sm font-bold text-ink" htmlFor={`${track}-phone`}>
            Phone
          </label>
          <input id={`${track}-phone`} name="phone" type="tel" autoComplete="tel" maxLength={40} className={field} />
        </div>
        {track === "roster" ? (
          <div>
            <label className="font-display text-sm font-bold text-ink" htmlFor={`${track}-cv`}>
              CV upload (PDF or Word)
            </label>
            <input
              id={`${track}-cv`}
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              className="mt-2 w-full text-sm file:mr-3 file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-2 file:font-semibold file:text-white"
            />
          </div>
        ) : (
          <div>
            <label className="font-display text-sm font-bold text-ink" htmlFor={`${track}-roles`}>
              Roles needed
            </label>
            <input
              id={`${track}-roles`}
              name="roles"
              type="text"
              maxLength={200}
              placeholder="e.g. data collectors, trainers"
              className={field}
            />
          </div>
        )}
      </div>
      <div className="mt-5">
        <label className="font-display text-sm font-bold text-ink" htmlFor={`${track}-msg`}>
          {track === "roster" ? "Your expertise" : "Assignment details"}
        </label>
        <textarea id={`${track}-msg`} name="message" rows={4} maxLength={4000} className={field} aria-invalid={!!state.errors?.message} />
        {state.errors?.message && <p className={err}>{state.errors.message}</p>}
      </div>

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${track}-website`}>Leave this field empty</label>
        <input type="text" id={`${track}-website`} name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={tsRef} type="hidden" name="form_ts" />

      {track === "roster" && (
        <>
          <label className="mt-4 flex items-start gap-3 text-sm text-fore/85">
            <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[#334269]" />
            <span>
              I consent to AMC storing my CV for roster consideration, as described in the{" "}
              <a href="/privacy">privacy policy</a> and <a href="/terms">terms of use</a>.
            </span>
          </label>
          {state.errors?.consent && <p className={err}>{state.errors.consent}</p>}
        </>
      )}
      <button type="submit" className="btn btn-primary mt-5" disabled={pending} aria-busy={pending}>
        {pending ? "Sending…" : track === "roster" ? "Apply to the roster" : "Request staff"}
      </button>
    </form>
  );
}
