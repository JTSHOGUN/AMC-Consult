import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { sectors, services } from "@/lib/content";
import { servicePalette } from "@/lib/palette";

export const metadata: Metadata = {
  title: "Services: enterprise development, training, research, recruitment",
  description:
    "AMC delivers six services for donors, NGOs, government and corporates: enterprise development, project cycle management, research, organizational development, vocational training and recruitment.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-page py-14 lg:py-20">
        <p className="tag">Services</p>
        <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl">
          Six services built for real operating contexts.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fore/85">
          We combine technical expertise with deep community engagement to ensure every intervention
          is relevant, inclusive, and sustainable.
        </p>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="container-page divide-y divide-ink/12">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className={`grid items-center gap-8 py-10 transition-colors duration-200 ease-in lg:grid-cols-2 lg:gap-14 lg:py-12 ${servicePalette[s.slug].wash} ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <p className={`font-display text-sm font-bold uppercase tracking-[0.14em] ${servicePalette[s.slug].deep}`}>
                  Service {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-3xl">{s.name}</h2>
                <p className="mt-4 leading-relaxed text-fore/85">{s.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.methods.slice(0, 3).map((m) => (
                    <li
                      key={m}
                      className={`tag ${servicePalette[s.slug].washForce} ${servicePalette[s.slug].deep}`}
                    >
                      {m}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="btn btn-primary press mt-7">
                  Explore this service
                </Link>
              </div>
              <div className={`surface px-8 py-7 ${["surface-sky", "surface-blue", "surface-mist"][i % 3]}`}>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ink">What is included</h3>
                <ul className="mt-4 space-y-3">
                  {s.included.map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-1 shrink-0" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="#4196cf" strokeWidth="1.6" />
                        <path d="M8 12.4l2.8 2.8L16.5 9.5" stroke="#334269" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      <span className="text-fore/85">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl">Sectors we serve</h2>
            <p className="mt-4 leading-relaxed text-fore/85">
              Our teams have delivered assignments across these sectors with government, development
              partners and the private sector.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3 self-start">
            {sectors.map((s) => (
              <li key={s} className="tag !px-4 !py-2 !text-sm">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
