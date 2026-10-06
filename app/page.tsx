import Link from "next/link";
import { ServicesPanel } from "@/components/services-panel";
import { CtaBand } from "@/components/cta-band";
import { about, clients, leadership, phases, projects, sectors, stats } from "@/lib/content";
import { hoverBorderCycle, hoverCycle, groupDeepCycle } from "@/lib/palette";

const featured = [
  {
    p: projects.find((x) => x.slug === "ugefa-green-enterprise-finance")!,
    result: "20 SMEs selected from 100+ applicants and supported to access financing.",
    size: "md:col-span-7",
    tint: "surface-blue",
  },
  {
    p: projects.find((x) => x.slug === "uwa-climate-risk-disaster-risk")!,
    result: "Disaster risk reduction and climate mitigation planning for protected areas.",
    size: "md:col-span-5",
    tint: "surface-mist",
  },
  {
    p: projects.find((x) => x.slug === "fca-drdisp")!,
    result: "Four assignments delivered, from market-risk training to irrigation schemes.",
    size: "md:col-span-12",
    tint: "surface-sky",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="container-page grid items-center gap-10 pb-12 pt-10 lg:grid-cols-2 lg:gap-16 lg:pb-16 lg:pt-12">
        <div className="hero-in">
          <p className="tag">Africa Management Consult</p>
          <h1 className="mt-5 text-4xl leading-[1.08] md:text-5xl lg:text-[3.4rem]">
            Building capacity for growth across Uganda and East Africa.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-fore/85">
            Training, research and project management that help enterprises, institutions and
            communities grow on their own.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn btn-primary press">
              Request a proposal
            </Link>
            <Link href="/work" className="btn btn-secondary press">
              See our work
            </Link>
          </div>
        </div>
        <div className="hero-in relative">
          <div className="arch mx-auto max-w-md lg:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
 loading="lazy" decoding="async"
              src="/images/group-work.jpg"
              alt="AMC training participants presenting group work during a facilitated session"
              width={660}
              height={532}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div
            className="arch absolute -bottom-6 -left-2 hidden w-40 border-4 border-paper lg:block"
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/images/siyb-game.jpg" alt="" width={233} height={178} className="aspect-square w-full object-cover" />
          </div>
          <div className="glass absolute bottom-5 right-4 px-5 py-3 text-white sm:bottom-7 sm:right-7">
            <p className="font-display text-sm font-bold leading-tight text-white">
              ILO &amp; ITC certified master trainers
            </p>
          </div>
        </div>
      </section>

      {/* 2. Client logo strip (tight band, logos react on hover) */}
      <section aria-label="Selected clients" className="border-y border-ink/10 bg-white py-5">
        <div className="container-page">
          <ul className="flex items-center gap-10 overflow-x-auto pb-1">
            {clients.logos.map((c) => (
              <li key={c.src} className="flex-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.src}
                  alt={c.alt}
                  width={120}
                  height={56}
                  loading="lazy"
                  className="h-10 w-auto max-w-[120px] object-contain opacity-80 transition-all duration-200 ease-in hover:scale-110 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Impact band (asymmetric stats, layered surfaces) */}
      <section className="container-page py-12 lg:py-14">
        <div className="reveal rounded-[12px] bg-ink px-8 py-10 md:px-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <p className="eyebrow !text-accent-soft">Our track record</p>
              <p className="mt-4 font-display text-5xl font-extrabold text-white md:text-6xl">
                {stats[0].value}
              </p>
              <p className="mt-3 text-lg font-semibold text-white">{stats[0].label}</p>
              <p className="mt-1 text-white/75">{stats[0].note}</p>
            </div>
            <div className="grid gap-5 self-center md:col-span-7 md:grid-cols-2">
              {stats.slice(1).map((s) => (
                <div key={s.label} className="glass press px-6 py-5">
                  <p className="font-display text-3xl font-extrabold text-white">{s.value}</p>
                  <p className="mt-2 font-semibold text-white">{s.label}</p>
                  <p className="mt-1 text-sm text-white/75">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services (sticky split on a tinted band) */}
      <section className="border-y border-ink/10 bg-sky py-12 lg:py-14">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end">
            <div>
              <p className="tag">What we do</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Six services, one delivery philosophy.</h2>
            </div>
            <p className="text-fore/85 lg:pb-1">{about.values}</p>
          </div>
          <div className="mt-8">
            <ServicesPanel />
          </div>
        </div>
      </section>

      {/* 5. Featured work (editorial bento: tinted blocks, no cards) */}
      <section className="container-page py-12 lg:py-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="tag">Selected work</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Assignments that prove the method.</h2>
          </div>
          <Link href="/work" className="link-arrow font-display font-bold text-link">
            All projects
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-12">
          {featured.map(({ p, result, size, tint }, i) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className={`surface press group grid overflow-hidden no-underline ${tint} ${hoverBorderCycle[i]} ${size} ${
                size.includes("12") ? "md:grid-cols-2" : ""
              }`}
            >
              {p.image && (
                <div className={`photo-zoom ${size.includes("12") ? "h-full min-h-60" : "h-56"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.imageAlt ?? ""}
                    width={640}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col justify-end p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="tag">{p.status}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-fore/60">{p.years}</span>
                </div>
                <p className="mt-3 font-display text-xl font-bold text-ink">{p.client}</p>
                <p className="mt-2 text-fore/85">{result}</p>
                <p className={`mt-3 text-sm font-semibold ${hoverCycle[i].deep}`}>
                  {p.funder}
                  <span className="link-arrow ml-1 inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Open
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. How we work (horizontal phases with divider rhythm) */}
      <section className="border-y border-ink/10 bg-white py-12 lg:py-14">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="tag">How we work</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Three phases, co-designed with you.</h2>
            </div>
            <Link href="/approach" className="link-arrow font-display font-bold text-link">
              See the full approach
            </Link>
          </div>
          <ol className="reveal-stagger mt-8 grid divide-ink/15 md:grid-cols-3 md:divide-x">
            {phases.map((ph, i) => (
              <li
                key={ph.n}
                className={`group px-0 py-5 transition-colors duration-200 ease-in md:px-8 md:py-6 ${hoverCycle[i * 2].wash} ${
                  i === 0 ? "md:pl-0" : ""
                } ${i === 2 ? "md:pr-0" : ""}`}
              >
                <p className={`font-display text-5xl font-extrabold transition-transform duration-300 group-hover:-translate-y-1 ${hoverCycle[i * 2].deep}`}>
                  {ph.n}
                </p>
                <h3 className="mt-3 text-2xl">{ph.name}</h3>
                <p className="mt-3 leading-relaxed text-fore/85">{ph.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Sectors (index rows with tint sweep) */}
      <section className="container-page py-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="tag">Sectors</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Where we work.</h2>
            <p className="mt-4 text-fore/85">
              Our teams have delivered assignments across these sectors with government, development
              partners and the private sector.
            </p>
            <Link href="/services" className="link-arrow mt-5 inline-block font-display font-bold text-link">
              Explore services
            </Link>
          </div>
          <ul className="border-y border-ink/15">
            {sectors.map((s, i) => (
              <li key={s} className="border-b border-ink/15 last:border-b-0">
                <Link
                  href="/contact"
                  className={`row-link group flex items-baseline gap-5 px-2 py-3 no-underline ${hoverCycle[i].wash}`}
                >
                  <span className={`font-display text-sm font-bold ${hoverCycle[i].deep}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`font-display text-xl font-bold text-ink transition-colors duration-200 ${groupDeepCycle[i]}`}>
                    {s}
                  </span>
                  <span className={`ml-auto text-ink/40 transition-all duration-200 ease-in group-hover:translate-x-1 ${hoverCycle[i].deep}`}>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Leadership (portrait row) */}
      <section className="border-y border-ink/10 bg-white py-12 lg:py-14">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="tag">Leadership</p>
              <h2 className="mt-4 text-3xl md:text-4xl">The people behind the work.</h2>
            </div>
            <Link href="/team" className="link-arrow font-display font-bold text-link">
              Full team
            </Link>
          </div>
          <ul className="reveal-stagger mt-8 grid grid-cols-2 gap-6 md:grid-cols-5">
            {leadership.map((p, i) => (
              <li key={p.slug}>
                <Link href="/team" className="press group block text-center no-underline">
                  <div className="arch mx-auto max-w-[190px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.photo}
                      alt={`${p.name}, ${p.role}`}
                      width={220}
                      height={260}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className={`mt-3 font-display font-bold text-ink transition-colors duration-200 ${groupDeepCycle[i]}`}>
                    {p.name}
                  </p>
                  <p className="mt-0.5 text-sm leading-snug text-fore/75">{p.role}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Closing CTA (testimonials dropped until real quotes exist) */}
      <CtaBand />
    </>
  );
}
