import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { clients } from "@/lib/content";

export const metadata: Metadata = {
  title: "Clients and partners",
  description:
    "AMC works with government ministries, NGOs, international agencies and private sector institutions across Uganda and East Africa.",
};

export default function ClientsPage() {
  return (
    <>
      <section className="container-page py-14 lg:py-20">
        <p className="tag">Clients</p>
        <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl">
          Trusted by government, donors and the private sector.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fore/85">{clients.intro}</p>
      </section>

      <section className="border-y border-ink/10 bg-bluewash py-12">
        <div className="container-page">
          <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {clients.logos.map((c) => (
              <li key={c.src} className="flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.src}
                  alt={c.alt}
                  width={220}
                  height={110}
                  loading="lazy"
                  className="max-h-24 w-auto max-w-full object-contain opacity-85 transition-all duration-200 ease-in hover:scale-110 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-12">
        <h2 className="text-3xl">Clients include</h2>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {clients.named.map((n) => (
            <li key={n} className="tag press !px-4 !py-2">
              {n}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title="Join our list of repeat clients." />
    </>
  );
}
