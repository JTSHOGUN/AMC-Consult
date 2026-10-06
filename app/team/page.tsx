import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { leadership, site, team } from "@/lib/content";
import { groupDeepCycle, hoverCycle } from "@/lib/palette";

export const metadata: Metadata = {
  title: "Team: consultants, trainers and researchers",
  description:
    "AMC is powered by a multi-disciplinary pool of senior national and international consultants certified by ILO and ITC. Meet the leadership and associate network.",
};

export default function TeamPage() {
  const roster = team.filter((p) => !p.leadership);

  return (
    <>
      <section className="container-page py-14 lg:py-20">
        <p className="tag">Team</p>
        <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl">
          A multi-disciplinary pool of national and international consultants.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fore/85">
          Our team blends local insight and international training, with expertise in enterprise
          development, research, project management and organizational growth. Named leadership and
          consultants are shown below; the wider associate network is engaged per assignment.
        </p>
      </section>

      <section className="border-y border-ink/10 bg-white py-12">
        <div className="container-page">
          <h2 className="text-3xl">Leadership</h2>
          <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((p, idx) => (
              <li key={p.slug} id={p.slug}>
                <div className="arch press max-w-[240px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
 loading="lazy" decoding="async"
                    src={p.photo}
                    alt={`${p.name}, ${p.role}`}
                    width={480}
                    height={576}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  />
                </div>
                <h3 className={`mt-4 text-2xl transition-colors duration-200 ${groupDeepCycle[idx % groupDeepCycle.length]}`}>{p.name}</h3>
                <p className="mt-1 font-semibold text-link">{p.role}</p>
                <p className="mt-3 leading-relaxed text-fore/85">{p.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sky py-12">
        <div className="container-page">
          <h2 className="text-3xl">Consultants</h2>
          <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {roster.map((p, idx) => (
              <li key={p.slug} id={p.slug}>
                <div className="arch press max-w-[240px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.photo}
                    alt={`${p.name}, ${p.role}`}
                    width={480}
                    height={576}
                    loading="lazy"
                    className={`aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.04] ${p.greyscale ? "grayscale" : ""}`}
                  />
                </div>
                <h3 className={`mt-4 text-2xl transition-colors duration-200 ${groupDeepCycle[idx % groupDeepCycle.length]}`}>{p.name}</h3>
                <p className="mt-1 font-semibold text-link">{p.role}</p>
                <p className="mt-3 leading-relaxed text-fore/85">{p.bio}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 border-l-4 border-accent pl-5 text-fore/80">
          Beyond this roster, AMC works with a wider associate network of trainers, researchers and
          field teams.{" "}
          <Link href="/work-with-us" className="font-semibold">
            Join the roster
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold">
            request staff
          </Link>
          .
          </p>
        </div>
      </section>

      <CtaBand
        title="Need a team for your assignment?"
        text={`Call ${site.phonePrimary} or send your requirements and we will propose the right experts.`}
      />
    </>
  );
}
