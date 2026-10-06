import Link from "next/link";
import { IconMail, IconMapPin, IconPhone, IconWhatsApp } from "@/components/icons";
import { site, services } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-5">
      <div className="scallop-band" role="presentation" />
      <div className="bg-ink text-white">
        <div className="container-page grid gap-8 py-9 md:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:py-10">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/logo-white.png"
              alt="Africa Management Consult"
              width={172}
              height={75}
              className="h-10 w-auto"
            />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">
              {site.tagline}. Training, research and project management for enterprises, institutions
              and communities across Uganda and East Africa.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white/60">Explore</h2>
            <ul className="mt-3 space-y-2">
              {[
                ["/about", "About"],
                ["/approach", "Approach"],
                ["/services", "Services"],
                ["/work", "Work"],
                ["/team", "Team"],
                ["/clients", "Clients"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-white/85 no-underline hover:text-white hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white/60">Services</h2>
            <ul className="mt-3 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/85 no-underline hover:text-white hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white/60">Contact</h2>
            <ul className="mt-3 space-y-2 text-white/85">
              <li className="flex items-start gap-2.5">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <span>
                  <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="text-white/85 no-underline hover:underline">
                    {site.phonePrimary}
                  </a>{" "}
                  <span className="text-white/60">(call)</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconWhatsApp className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <span>
                  <a
                    href={site.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/85 no-underline hover:underline"
                  >
                    {site.whatsapp}
                  </a>{" "}
                  <span className="text-white/60">(WhatsApp)</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <a href={`mailto:${site.email}`} className="text-white/85 no-underline hover:underline">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-0.5 text-sm leading-relaxed text-white/70">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <span>{site.address}</span>
              </li>
            </ul>
            <Link href="/contact" className="btn btn-light mt-4 !px-5 !py-2 !text-sm">
              Request a proposal
            </Link>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="container-page flex flex-col gap-2 py-4 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {site.legalName}. Registration No. {site.regNo}.
            </p>
            <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-1.5">
              <Link href="/privacy" className="text-white/65 no-underline hover:text-white hover:underline">
                Privacy
              </Link>
              <Link href="/terms" className="text-white/65 no-underline hover:text-white hover:underline">
                Terms
              </Link>
              <Link href="/accessibility" className="text-white/65 no-underline hover:text-white hover:underline">
                Accessibility
              </Link>
              <Link href="/work-with-us" className="text-white/65 no-underline hover:text-white hover:underline">
                Work with us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
