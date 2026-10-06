import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { about, site, stats } from "@/lib/content";
import { hoverCycle } from "@/lib/palette";

export const metadata: Metadata = {
  title: "About AMC: Ugandan consulting firm since 2011",
  description:
    "Africa Management Consult Limited is a Human Capital Management solutions provider incorporated in Uganda in 2011 (Reg. No. 138382), certified by ILO and ITC.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="tag">About us</p>
          <h1 className="mt-5 text-4xl md:text-5xl">Who we are.</h1>
          <p className="mt-6 text-lg leading-relaxed text-fore/85">{about.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary press">
              Request a proposal
            </Link>
            <Link href="/approach" className="btn btn-secondary press">
              How we work
            </Link>
          </div>
        </div>
        <div className="arch">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
 loading="lazy" decoding="async"
            src="/images/peter-supervising.jpg"
            alt="Peter Owori supervising participants during group work"
            width={660}
            height={462}
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
      </section>

      {/* Vision / mission / ways of working: one tinted band with dividers */}
      <section className="border-y border-ink/10 bg-sky">
        <div className="container-page grid divide-ink/15 py-10 md:grid-cols-3 md:divide-x">
          <div className="px-0 py-4 md:px-8 md:py-2 md:first:pl-0">
            <h2 className="text-2xl">Vision</h2>
            <p className="mt-3 font-display text-3xl font-extrabold text-accent">{about.vision}</p>
          </div>
          <div className="px-0 py-4 md:px-8 md:py-2">
            <h2 className="text-2xl">Mission</h2>
            <p className="mt-3 text-lg leading-relaxed text-fore/85">{about.mission}</p>
          </div>
          <div className="px-0 py-4 md:px-8 md:py-2 md:last:pr-0">
            <h2 className="text-2xl">Ways of working</h2>
            <p className="mt-3 leading-relaxed text-fore/85">{about.values}</p>
          </div>
        </div>
      </section>

      {/* Impact: editorial columns + one stats surface with divided rows */}
      <section className="container-page py-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="text-3xl">Our impact so far</h2>
            <p className="mt-4 leading-relaxed text-fore/85">{about.impact}</p>
            <p className="mt-4 leading-relaxed text-fore/85">{about.team}</p>
          </div>
          <ul className="surface surface-mist h-fit px-6 py-2">
            {stats.map((s) => (
              <li
                key={s.label}
                className="flex items-baseline gap-5 border-b border-ink/12 py-4 last:border-b-0"
              >
                <p className="min-w-28 font-display text-2xl font-extrabold text-ink">{s.value}</p>
                <div>
                  <p className="font-semibold">{s.label}</p>
                  <p className="text-sm text-fore/70">{s.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MD message on tinted band with photo */}
      <section className="border-y border-ink/10 bg-bluewash">
        <div className="container-page grid items-start gap-8 py-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="arch max-w-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
 loading="lazy" decoding="async"
              src="/images/peter-flipchart.jpg"
              alt="Peter Owori, Managing Director, facilitating a session"
              width={528}
              height={254}
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
          <figure>
            <h2 className="text-3xl">A message from the Managing Director</h2>
            <blockquote className="mt-4 text-lg leading-relaxed text-fore/85">
              <p>&ldquo;{about.mdMessage}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-5">
              <p className="font-display text-lg font-bold text-ink">Peter Owori</p>
              <p className="text-fore/75">Managing Director, {site.legalName}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Credentials: numbered rows on one surface */}
      <section className="container-page py-12 lg:py-14">
        <h2 className="text-3xl">Credentials</h2>
        <ul className="surface surface-sky mt-5">
          {[
            {
              t: "Legally incorporated in Uganda",
              d: `Registered in 2011. Registration No. ${site.regNo}.`,
            },
            {
              t: "ILO and ITC certified trainers",
              d: "Master Trainers and Trainers in Business, Entrepreneurship, Organizational Development and Financial Literacy.",
            },
            {
              t: "Field-based delivery",
              d: "Urban and remote delivery across Uganda and East Africa, with a multidisciplinary consultant pool.",
            },
          ].map((x, i) => (
            <li
              key={x.t}
              className={`row-link flex items-start gap-5 border-b border-ink/12 px-6 py-5 last:border-b-0 ${hoverCycle[i].wash}`}
            >
              <span className={`font-display text-sm font-bold ${hoverCycle[i].deep}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-display font-bold text-ink">{x.t}</p>
                <p className="mt-1 text-fore/80">{x.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        title="Working with AMC starts with a conversation."
        text="Tell us about your programme or challenge and we will shape the right team around it."
      />
    </>
  );
}
