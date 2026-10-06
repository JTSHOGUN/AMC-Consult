import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms of use for the Africa Management Consult website.",
};

export default function TermsPage() {
  return (
    <section className="container-page max-w-3xl py-14 lg:py-20">
      <h1 className="text-4xl">Terms of use</h1>
      <p className="mt-3 text-fore/70">Last updated: 1 October 2026</p>
      <div className="mt-8 space-y-6 text-fore/85">
        <p>
          This website is operated by {site.legalName}, Registration No. {site.regNo}, registered in
          Uganda. By using this site you agree to these terms. If you do not agree, please do not
          use the site.
        </p>

        <h2 className="text-2xl text-ink">Content</h2>
        <p>
          We publish project descriptions, team profiles and service information in good faith, based
          on our own records and client-approved material. Nothing on this site constitutes a
          binding offer or professional advice; assignments are governed by signed agreements.
        </p>

        <h2 className="text-2xl text-ink">Intellectual property</h2>
        <p>
          Site content, branding and imagery belong to {site.legalName} or are used with permission.
          Client names and logos are the property of their respective owners and are used with
          permission. You may not copy, reproduce or redistribute site content for commercial
          purposes without written consent.
        </p>

        <h2 className="text-2xl text-ink">Acceptable use</h2>
        <p>
          You agree not to misuse this site, including by attempting to gain unauthorised access,
          introducing malicious code, scraping the site at scale, or submitting false or unlawful
          information through our forms.
        </p>

        <h2 className="text-2xl text-ink">Your submissions</h2>
        <p>
          Information you submit through our forms is handled as described in our{" "}
          <a href="/privacy">privacy policy</a>. You confirm that the information you provide is
          accurate and that you have the right to provide it.
        </p>

        <h2 className="text-2xl text-ink">Third-party links</h2>
        <p>
          This site links to third-party services such as WhatsApp and Google Maps. We are not
          responsible for their content, availability or data practices.
        </p>

        <h2 className="text-2xl text-ink">Liability</h2>
        <p>
          We aim to keep information accurate and current, but provide it as is and without
          warranties of any kind. To the extent permitted by law, {site.legalName} is not liable for
          losses arising from use of this site or reliance on its content.
        </p>

        <h2 className="text-2xl text-ink">Governing law</h2>
        <p>
          These terms are governed by the laws of Uganda, and disputes are subject to the courts of
          Uganda.
        </p>

        <h2 className="text-2xl text-ink">Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The latest version will always be published
          on this page with its revision date. Continued use of the site after changes means you
          accept the updated terms.
        </p>

        <h2 className="text-2xl text-ink">Contact</h2>
        <p>
          Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>, {site.address}.
        </p>
      </div>
    </section>
  );
}
