import Link from "next/link";

export function CtaBand({
  title = "Let us talk about your next assignment.",
  text = "Tell us what you need to achieve. We respond with a clear scope, a team and a timeline.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-page py-8">
      <div className="relative overflow-hidden rounded-[12px] bg-ink px-5 py-8 text-white md:px-8 md:py-9">
        {/* brand texture, no gradients */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "url('/images/scallop.jpg')",
            backgroundSize: "auto 150px",
            backgroundPosition: "right -30px top -40px",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />
        <div className="glass relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-6 text-center md:flex-row md:justify-between md:gap-6 md:px-8 md:py-5 md:text-left">
          <div>
            <h2 className="text-xl text-white md:text-2xl">{title}</h2>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-white/90">{text}</p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn btn-light !px-5 !py-2 !text-sm">
              Request a proposal
            </Link>
            <Link
              href="/work"
              className="btn btn-secondary !border-white/60 !px-5 !py-2 !text-sm !text-white hover:!bg-white hover:!text-ink"
            >
              See our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
