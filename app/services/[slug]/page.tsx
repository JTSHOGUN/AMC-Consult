import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { projects, services, team } from "@/lib/content";
import { hoverCycle, serviceActiveFill, servicePalette } from "@/lib/palette";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} services Uganda`,
    description: s.description,
  };
}

const faqs = [
  {
    q: "How quickly can you start?",
    a: "For most assignments we can field a team within two to four weeks of agreement, depending on scope and location.",
  },
  {
    q: "Do you work outside Kampala?",
    a: "Yes. AMC uses a flexible, field-based delivery model and has delivered assignments in districts across Uganda, including remote areas.",
  },
  {
    q: "Can you combine services in one assignment?",
    a: "Yes. Many assignments combine research, training and project support. We shape one team and one delivery plan around your outcomes.",
  },
];

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const pal = servicePalette[s.slug];
  const related = projects.filter((p) => p.service === s.slug).slice(0, 3);
  const experts = team.slice(0, 4);

  return (
    <>
      <section className="container-page py-14 lg:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-fore/70">
          <Link href="/services" className="text-link">
            Services
          </Link>{" "}
          / {s.name}
        </nav>
        <div className="mt-6 grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className={`eyebrow ${pal.deep}`}>Service</p>
            <h1 className="mt-2 text-4xl md:text-5xl">{s.name}</h1>
            <p className="mt-6 text-lg leading-relaxed text-fore/85">{s.description}</p>
            <p className={`mt-4 border-l-4 pl-4 font-semibold ${pal.edge} ${pal.deep}`}>{s.short}</p>
            <Link href="/contact" className="btn btn-primary press mt-8">
              Request a proposal
            </Link>
          </div>
          <div className={`surface ${serviceActiveFill[s.slug]} px-8 py-7`}>
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-ink">What is included</h2>
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
            <h2 className="mt-8 text-sm font-bold uppercase tracking-[0.12em] text-ink">Methods and tools</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {s.methods.map((m) => (
                <li key={m} className="tag">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white py-14">
        <div className="container-page">
          <h2 className="text-3xl">How we deliver it</h2>
          <p className="mt-4 max-w-2xl text-fore/85">{s.detail}</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-page py-14">
          <h2 className="text-3xl">Relevant work</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/work/${p.slug}`} className="card group block h-full overflow-hidden no-underline hover:shadow-lg">
                  {p.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.imageAlt ?? ""} width={640} height={360} loading="lazy" className="h-44 w-full object-cover" />
                  )}
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-fore/60">{p.years}</p>
                    <h3 className="mt-2 text-lg group-hover:text-link">{p.client}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-fore/80">{p.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="border-y border-ink/10 bg-white py-14">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl">Experts for this service</h2>
            <ul className="mt-6 space-y-5">
              {experts.map((p) => (
                <li key={p.slug} className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.photo}
                    alt={p.name}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display font-bold text-ink">{p.name}</p>
                    <p className="text-sm text-fore/75">{p.role}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/team" className="link-arrow mt-6 inline-block font-display font-bold text-link">
              Meet the full team
            </Link>
          </div>
          <div>
            <h2 className="text-3xl">Frequently asked</h2>
            <div className="mt-5 space-y-3">
              {faqs.map((f, i) => (
                <details
                  key={f.q}
                  className={`surface surface-sky px-5 py-4 open:bg-white ${hoverCycle[i % hoverCycle.length].wash}`}
                >
                  <summary
                    className={`cursor-pointer font-display font-bold text-ink transition-colors duration-150 ease-in ${hoverCycle[i % hoverCycle.length].deep}`}
                  >
                    {f.q}
                  </summary>
                  <p className="mt-3 text-fore/85">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title={`Need ${s.name.toLowerCase()} support?`} />
    </>
  );
}
