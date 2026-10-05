import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description: "Our commitment to WCAG 2.2 AA accessibility on the Africa Management Consult website.",
};

export default function AccessibilityPage() {
  return (
    <section className="container-page max-w-3xl py-14 lg:py-20">
      <h1 className="text-4xl">Accessibility statement</h1>
      <p className="mt-3 text-fore/70">Last updated: September 2026</p>
      <div className="mt-8 space-y-6 text-fore/85">
        <p>
          We want this site to work for everyone, including people using assistive technologies,
          small screens and low-bandwidth connections.
        </p>
        <h2 className="text-2xl text-ink">Our target</h2>
        <p>
          This site aims to meet WCAG 2.2 Level AA. We test keyboard navigation, colour contrast,
          text alternatives and form labels, and we respect reduced-motion preferences.
        </p>
        <h2 className="text-2xl text-ink">Known limitations</h2>
        <p>
          Some imagery originates from compressed print documents and may appear softer than ideal at
          large sizes. We are progressively replacing these with original photography.
        </p>
        <h2 className="text-2xl text-ink">Feedback</h2>
        <p>
          If something on this site is hard to use, please tell us and we will fix it or provide the
          information another way. Write to us using the contact details on the contact page.
        </p>
      </div>
    </section>
  );
}
