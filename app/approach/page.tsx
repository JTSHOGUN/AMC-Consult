import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { phases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our approach: diagnose, deliver, adapt",
  description:
    "AMC works in three co-designed phases: Diagnose and Co-Design, Deliver and Empower, and Monitor, Learn and Adapt.",
};

export default function ApproachPage() {
  return (
    <>
      <section className="container-page py-14 lg:py-20">
        <p className="tag">Approach</p>
        <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl">
          One method, co-designed with clients and communities.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fore/85">
          Every engagement runs through three phases. The detail changes per assignment, the
          discipline does not: local ownership, inclusivity, and evidence at every step.
        </p>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="container-page divide-y divide-ink/12">
          {phases.map((ph, i) => (
            <article key={ph.n} className={`grid gap-8 py-10 transition-colors duration-200 ease-in lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-12 ${["hover:bg-hov-sky", "hover:bg-hov-mint", "hover:bg-hov-lavender"][i]}`}>
              <div>
                <p className={`font-display text-6xl font-extrabold ${["text-deep-blue", "text-deep-teal", "text-deep-plum"][i]}`}>
                  {ph.n}
                </p>
                <h2 className="mt-3 text-3xl">{ph.name}</h2>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-fore/60">
                  Typical focus: {
                    ["Weeks 1 to 4", "Core delivery period", "Continuous, closing with handover"][i]
                  }
                </p>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-fore/85">{ph.summary}</p>
                <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink">
                  What happens
                </h3>
                <ul className="mt-3 space-y-2">
                  {ph.steps.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-1 shrink-0" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="#4196cf" strokeWidth="1.6" />
                        <path d="M8 12.4l2.8 2.8L16.5 9.5" stroke="#334269" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      <span className="text-fore/85">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <h2 className="text-3xl">Principles behind the method</h2>
        <div className="surface surface-blue mt-6 grid divide-ink/12 px-2 py-4 md:grid-cols-3 md:divide-x">
          {[
            {
              t: "Local ownership",
              d: "Interventions are co-designed so clients and communities can sustain them without us.",
              hover: "hover:bg-hov-mint",
              deep: "text-deep-teal",
            },
            {
              t: "Co-design over prescription",
              d: "Needs assessments, stakeholder consultations and baseline studies shape every solution.",
              hover: "hover:bg-hov-lavender",
              deep: "text-deep-plum",
            },
            {
              t: "Evidence and adaptation",
              d: "Monitoring and evaluation feed decisions in real time, and results are shared transparently.",
              hover: "hover:bg-hov-peach",
              deep: "text-deep-terra",
            },
          ].map((x, i) => (
            <div
              key={x.t}
              className={`px-6 py-5 transition-colors duration-200 ease-in ${x.hover} ${i === 0 ? "md:pl-4" : ""} ${i === 2 ? "md:pr-4" : ""}`}
            >
              <h3 className={`text-xl transition-colors duration-200 ${x.deep}`}>{x.t}</h3>
              <p className="mt-3 leading-relaxed text-fore/85">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Need a method you can defend in a tender?"
        text="We document our approach, deliverables and timelines clearly in every proposal."
      />
    </>
  );
}
