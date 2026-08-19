"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, X, ArrowRight } from "lucide-react";

/* ── Navigation Data ─────────────────────────────────────────── */
interface NavItem {
  name: string;
  href: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { name: "HOME", href: "/", active: true },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "WORK", href: "/work" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

/* ── Navbar Component ────────────────────────────────────────── */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Close on ESC */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeMenu]);

  return (
    <>
      {/* ── Backdrop Overlay ────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={closeMenu}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              zIndex: 9998,
            }}
          />
        )}
      </AnimatePresence>

      {/* ── Fixed Navbar Wrapper ─────────────────────────────── */}
      <nav
        role="navigation"
        aria-label="Primary Navigation"
        className="axtrait-navbar-wrapper"
      >
        <div className={`axtrait-navbar-container ${isOpen ? "is-open" : ""}`}>
          {/* ── Top Bar (always visible) ─────────────────────── */}
          <div className="axtrait-navbar-top">
            {/* LEFT: Start Project Button (Desktop only) */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="axtrait-nav-cta"
            >
              START PROJECT
            </Link>

            {/* LOGO: Left on mobile/tablet, centered on desktop */}
            <div className="axtrait-nav-logo-wrap">
              <Link
                href="/"
                onClick={closeMenu}
                className="axtrait-nav-logo-link"
              >
                <img
                  src="/AXTRAIT%20WEB%20LOGO.png"
                  alt="AXTRAIT Logo"
                  loading="eager"
                  decoding="async"
                  className="axtrait-nav-logo-img"
                />
              </Link>
            </div>

            {/* RIGHT: Theme Toggle + Hamburger/Close */}
            <div className="axtrait-nav-controls">
              {/* Moon Toggle */}
              <button
                type="button"
                aria-label="Toggle theme"
                className="axtrait-nav-theme-btn"
              >
                <Moon className="w-[15px] h-[15px]" />
              </button>

              {/* Hamburger / X */}
              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                className="axtrait-nav-menu-btn"
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                  >
                    <line
                      x1="0"
                      y1="2"
                      x2="20"
                      y2="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="0"
                      y1="7"
                      x2="20"
                      y2="7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="0"
                      y1="12"
                      x2="20"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* ── Expandable Menu Panel ─────────────────────────── */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="menu-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ overflow: "hidden", borderTop: "1px solid #f0f0f0" }}
              >
                <div className="axtrait-menu-content">
                  {/* ── Two-Column Layout ──────────────────────── */}
                  <div className="axtrait-menu-grid">
                    {/* LEFT: Navigation Links (Text only, no icons) */}
                    <div className="axtrait-menu-links">
                      {navItems.map((item) => {
                        const isActive = item.active;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeMenu}
                            className={`axtrait-menu-link ${isActive ? "active" : ""}`}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* RIGHT: Visual Banner */}
                    <div className="axtrait-menu-banner">
                      <img
                        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
                        alt="AXTRAIT Futuristic Interface"
                        className="axtrait-menu-banner-img"
                        loading="lazy"
                      />
                      <div className="axtrait-menu-banner-overlay" />

                      {/* About Us CTA */}
                      <div className="axtrait-menu-banner-cta">
                        <Link
                          href="/about"
                          onClick={closeMenu}
                          className="axtrait-menu-about-btn"
                        >
                          About Us
                          <ArrowRight className="w-[15px] h-[15px]" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* ── Menu Footer ─────────────────────────────── */}
                  <div className="axtrait-menu-footer">
                    <span>A modern digital design agency</span>
                    <span>Est. 2026</span>
                    <span>Accepting Projects</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
