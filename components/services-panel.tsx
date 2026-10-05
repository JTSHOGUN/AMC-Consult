"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/content";
import { serviceActiveFill, servicePalette } from "@/lib/palette";

export function ServicesPanel() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const s = services[active];
  const pal = servicePalette[s.slug];
  const activeFill = serviceActiveFill[s.slug];

  return (
    <>
      {/* Desktop: sticky split; every service row hovers in its own colour */}
      <div className="hidden gap-12 lg:grid lg:grid-cols-[1fr_1.15fr]">
        <ul className="self-start border-t border-ink/15">
          {services.map((item, i) => {
            const p = servicePalette[item.slug];
            const isActive = active === i;
            return (
              <li key={item.slug} className="border-b border-ink/15">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`row-link flex w-full items-center gap-4 py-4 pr-3 text-left font-display text-lg font-bold ${
                    isActive ? `${serviceActiveFill[item.slug]} text-ink` : `bg-transparent text-ink ${p.wash}`
                  }`}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm transition-colors duration-200 ${
                      isActive ? `${p.chip} text-white` : "bg-accent-soft text-link"
                    }`}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className={`flex-1 ${isActive ? p.deep : ""}`}>{item.name}</span>
                  <span
                    aria-hidden="true"
                    className={`text-lg transition-transform duration-300 ${
                      isActive ? `translate-x-1 ${p.deep}` : "text-ink/40"
                    }`}
                  >
                    →
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="sticky top-24 self-start">
          <div
            key={active}
            className={`surface ${activeFill} px-8 py-7 [animation:hero-in_0.45s_cubic-bezier(0.22,1,0.36,1)_both]`}
          >
            <p className={`eyebrow ${pal.deep}`}>Service 0{active + 1}</p>
            <h3 className="mt-3 text-2xl">{s.name}</h3>
            <p className="mt-3 leading-relaxed text-fore/85">{s.description}</p>
            <p className={`mt-4 border-l-4 pl-4 font-semibold ${pal.edge} ${pal.deep}`}>
              {s.short}
            </p>
            <Link href={`/services/${s.slug}`} className="btn btn-primary press mt-6">
              Explore this service
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: accordion, each item in its own colour */}
      <div className="flex flex-col lg:hidden">
        {services.map((item, i) => {
          const open = openMobile === i;
          const p = servicePalette[item.slug];
          return (
            <div key={item.slug} className="border-b border-ink/15 first:border-t">
              <button
                type="button"
                className={`row-link flex w-full items-center justify-between gap-3 px-2 py-4 text-left font-display text-base font-bold transition-colors ${
                  open ? serviceActiveFill[item.slug] : p.wash
                }`}
                aria-expanded={open}
                onClick={() => setOpenMobile(open ? null : i)}
              >
                <span className="flex items-center gap-3 text-ink">
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs text-white ${p.chip}`} aria-hidden="true">
                    {i + 1}
                  </span>
                  {item.name}
                </span>
                <span
                  aria-hidden="true"
                  className={`inline-block text-xl transition-transform duration-300 ${p.deep} ${open ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-3 pb-5 pt-1">
                    <p className="text-sm leading-relaxed text-fore/85">{item.description}</p>
                    <Link href={`/services/${item.slug}`} className="btn btn-primary press mt-4 !py-2.5 !text-sm">
                      Explore this service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
