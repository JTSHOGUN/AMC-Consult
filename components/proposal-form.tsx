"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { submitProposal, type FormState } from "@/app/actions";
import { services, site } from "@/lib/content";

export function ProposalForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [pending, startTransition] = useTransition();
  const tsRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Human-speed timestamp for the server-side bot check.
    if (tsRef.current) tsRef.current.value = String(Date.now());
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    startTransition(async () => {
      const result = await submitProposal({ status: "idle" }, data);
      setState(result);
      if (result.status === "success") form.reset();
    });
  }

  if (state.status === "success") {
    return (
      <div className="glass-light px-8 py-12 text-center" role="status">
        <svg className="mx-auto" width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" stroke="#334269" strokeWidth="1.5" />
          <path d="M7 12.5l3.2 3.2L17 9" stroke="#4196cf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="mt-4 text-2xl">Thank you. Your request has been received.</h3>
        <p className="mx-auto mt-2 max-w-md text-fore/80">
          Our team will respond within two working days. For urgent matters, call{" "}
          <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}>{site.phonePrimary}</a> or message us on{" "}
          <a href={site.whatsappLink}>WhatsApp</a>.
        </p>
        <button
          type="button"
          className="btn btn-secondary mt-6"
          onClick={() => setState({ status: "idle" })}
        >
          Send another request
        </button>
      </div>
    );
  }

  const field =
    "mt-2 w-full rounded-[12px] border border-ink/20 bg-white px-4 py-3 text-fore transition-colors focus:border-accent";
  const err = "mt-1.5 text-sm text-[#b3261e]";

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-light p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-display text-sm font-bold text-ink">
            Your name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" maxLength={120} className={field} aria-invalid={!!state.errors?.name} />
          {state.errors?.name && <p className={err}>{state.errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="font-display text-sm font-bold text-ink">
            Email address
          </label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={200} className={field} aria-invalid={!!state.errors?.email} />
          {state.errors?.email && <p className={err}>{state.errors.email}</p>}
        </div>
        <div>
          <label htmlFor="organisation" className="font-display text-sm font-bold text-ink">
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            maxLength={200}
            className={field}
            aria-invalid={!!state.errors?.organisation}
          />
          {state.errors?.organisation && <p className={err}>{state.errors.organisation}</p>}
        </div>
        <div>
          <label htmlFor="org-type" className="font-display text-sm font-bold text-ink">
            Organisation type
          </label>
          <select id="org-type" name="orgType" className={field} defaultValue="donor-ngo">
            <option value="donor-ngo">Donor or NGO</option>
            <option value="government">Government</option>
            <option value="corporate">Corporate</option>
            <option value="sme">SME or business membership organisation</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="service" className="font-display text-sm font-bold text-ink">
            Service needed
          </label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="font-display text-sm font-bold text-ink">
            Timeline
          </label>
          <select id="timeline" name="timeline" className={field} defaultValue="3-months">
            <option value="asap">As soon as possible</option>
            <option value="3-months">Within 3 months</option>
            <option value="6-months">Within 6 months</option>
            <option value="planning">Planning ahead</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="font-display text-sm font-bold text-ink">
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={4000}
          className={field}
          aria-invalid={!!state.errors?.message}
          placeholder="A short description of your assignment, location and expected outcomes."
        />
        {state.errors?.message && <p className={err}>{state.errors.message}</p>}
      </div>

      {/* honeypot: hidden from humans, tempting for bots */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={tsRef} type="hidden" name="form_ts" />

      <label className="mt-6 flex items-start gap-3 text-sm text-fore/85">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[#334269]" defaultChecked />
        <span>
          I agree that AMC may store this message to respond to my request, in line with the{" "}
          <a href="/privacy">privacy policy</a> and <a href="/terms">terms of use</a>.
        </span>
      </label>
      {state.errors?.consent && <p className={err}>{state.errors.consent}</p>}

      <button type="submit" className="btn btn-primary mt-6" disabled={pending} aria-busy={pending}>
        {pending ? "Sending…" : "Request a proposal"}
      </button>
      {pending && <p className="mt-3 text-sm text-fore/70">Please wait while we send your request.</p>}
    </form>
  );
}
