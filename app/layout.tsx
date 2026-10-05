import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const base = "https://africamanagementconsult.com"; // FLAG: confirm domain at launch

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: "Africa Management Consult | Training, research and project management in Uganda",
    template: "%s | Africa Management Consult",
  },
  description:
    "AMC is a Ugandan consulting firm delivering enterprise development, training, research and project management for donors, NGOs, government and corporates across East Africa.",
  openGraph: {
    type: "website",
    siteName: "Africa Management Consult",
    title: "Africa Management Consult | Training, research and project management in Uganda",
    description:
      "AMC is a Ugandan consulting firm delivering enterprise development, training, research and project management for donors, NGOs, government and corporates across East Africa.",
    images: [{ url: "/images/og-card.jpg", width: 1200, height: 630, alt: "Africa Management Consult" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Management Consult",
    description:
      "Enterprise development, training, research and project management across Uganda and East Africa.",
    images: ["/images/og-card.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/plus-jakarta-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/source-sans-3.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[4px] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
