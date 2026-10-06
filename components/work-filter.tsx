"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { projects, services } from "@/lib/content";
import { groupDeepCycle, hoverBorderCycle, hoverCycle, washFillCycle } from "@/lib/palette";

const sectors = Array.from(new Set(projects.map((p) => p.sector)));

export function WorkFilter() {
  const [service, setService] = useState<string>("all");
  const [sector, setSector] = useState<string>("all");

  const visible = useMemo(
    () =>
      projects.filter(
        (p) =>
          (service === "all" || p.service === service) &&
          (sector === "all" || p.sector === sector),
      ),
    [service, sector],
  );

  return (
    <div>
      <div className="surface surface-mist flex flex-wrap items-end gap-x-8 gap-y-4 px-6 py-5">
        <div>
          <label htmlFor="f-service" className="block font-display text-sm font-bold text-ink">
            Service
          </label>
          <select
            id="f-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-2 min-w-56 rounded-[12px] border border-ink/20 bg-white px-4 py-2.5 text-fore"
          >
            <option value="all">All services</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="f-sector" className="block font-display text-sm font-bold text-ink">
            Sector
          </label>
          <select
            id="f-sector"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="mt-2 min-w-56 rounded-[12px] border border-ink/20 bg-white px-4 py-2.5 text-fore"
          >
            <option value="all">All sectors</option>
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <p className="pb-3 text-sm text-fore/70" aria-live="polite">
          {visible.length} project{visible.length === 1 ? "" : "s"}
        </p>
      </div>

      {visible.length === 0 ? (
        <div className="card mt-8 px-8 py-14 text-center">
          <p className="font-display text-xl text-ink">No projects match these filters.</p>
          <p className="mt-2 text-fore/75">Try a wider selection, or talk to us about your assignment.</p>
          <button
            type="button"
            className="btn btn-secondary mt-6"
            onClick={() => {
              setService("all");
              setSector("all");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {visible.map((p, idx) => (
            <li key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                className={`card card-hover group flex h-full flex-col overflow-hidden no-underline ${hoverBorderCycle[idx % hoverBorderCycle.length]}`}
              >
                {p.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={p.imageAlt ?? ""}
                    width={640}
                    height={360}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                )}
                <div className={`flex flex-1 flex-col p-6 ${washFillCycle[idx % washFillCycle.length]}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`tag ${p.status === "Ongoing" ? "!bg-[#e3f2e7] !border-[#9dcfae]" : ""}`}
                    >
                      {p.status}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-fore/60">
                      {p.years}
                    </span>
                  </div>
                  <h3 className={`mt-3 text-xl transition-colors duration-200 ${groupDeepCycle[idx % groupDeepCycle.length]}`}>
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-link">{p.client}</p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-fore/80">{p.summary}</p>
                  <span className={`link-arrow mt-auto pt-5 font-display text-sm font-bold ${hoverCycle[idx % hoverCycle.length].deep}`}>
                    Open case study
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
