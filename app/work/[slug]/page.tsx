import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { projects, services } from "@/lib/content";
import { hoverCycle } from "@/lib/palette";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.client}: ${p.title}`, description: p.summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const service = services.find((s) => s.slug === p.service);

  return (
    <>
      <section className="container-page py-14 lg:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-fore/70">
          <Link href="/work" className="text-link">
            Work
          </Link>{" "}
          / {p.client}
        </nav>

        <div className="mt-6 grid items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="tag">{p.status}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-fore/60">{p.years}</span>
            </div>
            <h1 className="mt-4 text-4xl leading-tight md:text-[2.6rem]">{p.title}</h1>
            <p className="mt-4 font-display text-xl font-bold text-link">{p.client}</p>
            <p className="mt-5 leading-relaxed text-fore/85">{p.summary}</p>

            <dl className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-fore/60">Funder</dt>
                <dd className="mt-1 font-semibold text-ink">{p.funder}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-fore/60">Sector</dt>
                <dd className="mt-1 font-semibold text-ink">{p.sector}</dd>
              </div>
              {service && (
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-fore/60">Related service</dt>
                  <dd className="mt-1">
                    <Link href={`/services/${service.slug}`} className="font-semibold text-link">
                      {service.name}
                    </Link>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {p.image && (
            <div className="arch">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
 loading="lazy" decoding="async"
                src={p.image}
                alt={p.imageAlt ?? ""}
                width={640}
                height={480}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white py-12">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl">What AMC did</h2>
          <ol className="surface surface-sky px-2">
            {p.activities.map((a, i) => (
              <li
                key={a}
                className={`row-link flex items-start gap-5 border-b border-ink/12 px-5 py-4 last:border-b-0 ${hoverCycle[i % hoverCycle.length].wash}`}
              >
                <span className={`font-display text-lg font-extrabold ${hoverCycle[i % hoverCycle.length].deep}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="leading-relaxed text-fore/85">{a}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Planning a similar assignment?"
        text="We can walk you through the approach, the team and the lessons learned."
      />
    </>
  );
}
