import type { Metadata } from "next";
import { ProposalForm } from "@/components/proposal-form";
import { IconMail, IconMapPin, IconPhone, IconWhatsApp } from "@/components/icons";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Request a proposal",
  description:
    "Contact Africa Management Consult in Mukono, Uganda. Request a proposal, call, WhatsApp or email us.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container-page py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="tag">Contact</p>
            <h1 className="mt-5 text-4xl md:text-5xl">Request a proposal.</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-fore/85">
              Tell us about your organisation, the service you need and your timeline. We respond
              within two working days.
            </p>
            <div className="mt-8">
              <ProposalForm />
            </div>
          </div>

          <aside className="space-y-5">
            <div className="surface surface-mist px-7 py-6">
              <h2 className="text-xl">Talk to us directly</h2>
              <ul className="mt-4 space-y-4">
                <li>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-fore/60">
                    <IconPhone className="h-4 w-4 text-accent" />
                    Phone
                  </p>
                  <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="font-display text-lg font-bold">
                    {site.phonePrimary}
                  </a>
                  <ul className="mt-1 space-y-0.5 text-sm text-fore/75">
                    {site.phoneAlt.map((ph) => (
                      <li key={ph}>
                        <a href={`tel:${ph.replace(/\s/g, "")}`}>{ph}</a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-fore/60">
                    <IconWhatsApp className="h-4 w-4 text-accent" />
                    WhatsApp
                  </p>
                  <a
                    href={site.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg font-bold"
                  >
                    {site.whatsapp}
                  </a>
                </li>
                <li>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-fore/60">
                    <IconMail className="h-4 w-4 text-accent" />
                    Email
                  </p>
                  <a href={`mailto:${site.email}`} className="font-display text-lg font-bold">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="surface surface-sky overflow-hidden">
              <div className="bg-ink px-7 py-5 text-white">
                <h2 className="flex items-center gap-2 text-lg text-white">
                  <IconMapPin className="h-4.5 w-4.5 text-white/80" />
                  Visit us
                </h2>
                <p className="mt-1 text-white/85">{site.address}</p>
              </div>
              {/* Static map placeholder: replace with an embedded map at launch */}
              <div className="relative h-56 bg-[#dfe8f4]">
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <p className="text-sm text-ink/80">
                    Goma Division, Mukono Municipality, Mukono, Uganda
                    <br />
                    <a
                      className="mt-2 inline-block font-semibold"
                      href="https://www.google.com/maps/search/?api=1&query=Mukono%20Uganda"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
