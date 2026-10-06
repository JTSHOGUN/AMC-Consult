import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <p className="font-display text-7xl font-extrabold text-accent">404</p>
      <h1 className="mt-4 text-3xl">This page could not be found.</h1>
      <p className="mx-auto mt-3 max-w-md text-fore/80">
        The link may be out of date. Try our work, services, or get in touch directly.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Request a proposal
        </Link>
      </div>
    </section>
  );
}
