import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Africa Management Consult collects, uses, stores and protects personal data under Uganda's Data Protection and Privacy Act, 2019.",
};

export default function PrivacyPage() {
  return (
    <section className="container-page max-w-3xl py-14 lg:py-20">
      <h1 className="text-4xl">Privacy policy</h1>
      <p className="mt-3 text-fore/70">Last updated: 1 October 2026</p>

      <div className="prose-std mt-8 space-y-6 text-fore/85">
        <p>
          {site.legalName} (&ldquo;AMC&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is the data
          controller for personal data submitted through this website. We collect and process
          personal data only as needed to respond to enquiries, deliver assignments and manage our
          consultant roster. We follow Uganda&rsquo;s Data Protection and Privacy Act, 2019.
        </p>

        <h2 className="text-2xl text-ink">What we collect</h2>
        <p>Depending on how you contact us, we may collect:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Proposal requests:</strong> your name, work email, organisation, organisation
            type, the service you need, your timeline, and the content of your message.
          </li>
          <li>
            <strong>Roster and job applications:</strong> your name, email, phone number, the roles
            you offer, the content of your application, and your CV file where you choose to
            upload one.
          </li>
          <li>
            <strong>Direct contact:</strong> anything you share when you call, email or message us,
            including over WhatsApp.
          </li>
        </ul>
        <p>
          We do not collect special-category data (such as health, religion or political views), and
          our services are not directed at children.
        </p>

        <h2 className="text-2xl text-ink">How we use it</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>To respond to your request and prepare proposals.</li>
          <li>To consider you for assignments and roster opportunities you applied for.</li>
          <li>To keep a record of enquiries and applications so we can follow up.</li>
        </ul>
        <p>
          We do not sell personal data. We do not share it with third parties except with your
          consent, with service providers who help us operate (for example email or hosting
          providers, bound by confidentiality), or where required by law.
        </p>

        <h2 className="text-2xl text-ink">How we store and protect it</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Submissions are stored on access-controlled systems that only authorised AMC staff can
            reach.
          </li>
          <li>
            CV files are stored separately from public website files, with random file names, file
            type and size limits, and restricted permissions.
          </li>
          <li>
            The website is protected by security headers (including a content security policy),
            per-IP rate limiting, input sanitisation and bot filtering.
          </li>
          <li>
            Data in transit is encrypted (HTTPS) once the site goes live on its production domain.
          </li>
        </ul>

        <h2 className="text-2xl text-ink">Retention</h2>
        <p>
          Enquiries are kept for up to 24 months. Roster applications and CVs are kept for up to 24
          months and then reviewed or deleted. You can ask us to delete your data at any time, and
          we will act on that request unless the law requires us to keep it.
        </p>

        <h2 className="text-2xl text-ink">Your rights</h2>
        <p>
          Under the Data Protection and Privacy Act, 2019 you may request access to your data,
          corrections to inaccurate data, deletion, or object to how we use it. To exercise any of
          these rights, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or write to {site.address}. You may also
          lodge a complaint with the Personal Data Protection Office in Uganda.
        </p>

        <h2 className="text-2xl text-ink">Cookies and analytics</h2>
        <p>
          This site does not use cookies, advertising trackers or third-party analytics. Server
          logs may record basic technical details (such as IP address and pages requested) for
          security and troubleshooting only.
        </p>

        <h2 className="text-2xl text-ink">Third-party links</h2>
        <p>
          This site links to third-party services such as WhatsApp and Google Maps. Their handling
          of your data is governed by their own privacy policies.
        </p>

        <h2 className="text-2xl text-ink">Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The latest version will always be published
          on this page with its revision date.
        </p>

        <h2 className="text-2xl text-ink">Contact</h2>
        <p>
          Privacy questions: <a href={`mailto:${site.email}`}>{site.email}</a>, {site.address}.
        </p>
      </div>
    </section>
  );
}
