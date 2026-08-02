"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "WORK", href: "/work" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`} role="banner">
        {/* Logo */}
        <Link href="/" className="nav-logo" aria-label="Axtrait home" onClick={() => setMobileOpen(false)}>
          Ax<span>trait</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    style={isActive ? { color: "var(--text-primary)", fontWeight: 600 } : {}}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link
            href="/contact"
            className="btn-primary nav-cta"
            onClick={() => setMobileOpen(false)}
            id="nav-get-started"
          >
            Get Started
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile toggle */}
          <button
            className="nav-toggle"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span
              style={
                mobileOpen
                  ? {
                      transform: "rotate(45deg) translate(5px, 5px)",
                      background: "var(--text-primary)",
                    }
                  : {}
              }
            />
            <span
              style={
                mobileOpen
                  ? { opacity: 0, transform: "translateX(-10px)" }
                  : {}
              }
            />
            <span
              style={
                mobileOpen
                  ? {
                      transform: "rotate(-45deg) translate(5px, -5px)",
                      background: "var(--text-primary)",
                    }
                  : {}
              }
            />
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <nav
        className={`mobile-nav ${mobileOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link ${isActive ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          className="btn-primary"
          style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
          onClick={() => setMobileOpen(false)}
        >
          Get Started →
        </Link>
      </nav>
    </>
  );
}
