"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About", hover: "hover:text-deep-teal", bar: "bg-deep-teal" },
  { href: "/approach", label: "Approach", hover: "hover:text-deep-plum", bar: "bg-deep-plum" },
  { href: "/services", label: "Services", hover: "hover:text-deep-blue", bar: "bg-deep-blue" },
  { href: "/work", label: "Work", hover: "hover:text-deep-terra", bar: "bg-deep-terra" },
  { href: "/team", label: "Team", hover: "hover:text-deep-rose", bar: "bg-deep-rose" },
  { href: "/clients", label: "Clients", hover: "hover:text-deep-olive", bar: "bg-deep-olive" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-ink/10 bg-white/80 shadow-[0_2px_18px_rgba(36,47,77,0.08)] backdrop-blur-xl"
          : "border-transparent bg-white/95 backdrop-blur"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "h-[62px]" : "h-[76px]"
        }`}
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Africa Management Consult home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/logo.png"
            alt="Africa Management Consult"
            width={172}
            height={75}
            className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative font-display text-[0.92rem] font-bold no-underline transition-colors duration-200 ease-in ${l.hover} ${
                pathname.startsWith(l.href) ? "text-link" : "text-ink"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-[2.5px] rounded-full transition-all duration-300 ${l.bar} ${
                  pathname.startsWith(l.href) ? "w-full" : "w-0"
                }`}
                aria-hidden="true"
              />
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary !py-2.5 !text-[0.88rem]">
            Request a proposal
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-[8px] border border-ink/20 px-3 py-2 text-ink transition-colors hover:border-ink/40 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
          <span className="font-display text-sm font-bold">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      {open && (
        <div id="mobile-drawer" className="border-t border-ink/10 bg-white/95 backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-[8px] px-2 py-3 font-display text-lg font-bold text-ink no-underline transition-colors duration-200 ease-in ${l.hover} hover:bg-paper`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary mt-2">
              Request a proposal
            </Link>
            <Link href="/work-with-us" className="btn btn-secondary">
              Work with us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
