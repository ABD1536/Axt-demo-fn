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
        <motion.div
          className={`axtrait-navbar-container ${isOpen ? "is-open" : ""}`}
          animate={
            isOpen
              ? {
                  scale: [1, 1.015, 1],
                  transition: {
                    duration: 0.62,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : {
                  scale: 1,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                }
          }
          style={{ transformOrigin: "top center" }}
        >
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
                <div className="relative w-[18px] h-[14px] flex flex-col justify-between items-start pointer-events-none">
                  {/* Top line: full width */}
                  <motion.span
                    className="w-full h-[2px] bg-current rounded-full block origin-center"
                    animate={
                      isOpen
                        ? { rotate: 45, y: 6 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Middle line: shorter ~60% left-aligned */}
                  <motion.span
                    className="w-[11px] h-[2px] bg-current rounded-full block origin-left"
                    animate={
                      isOpen
                        ? { opacity: 0, scaleX: 0 }
                        : { opacity: 1, scaleX: 1 }
                    }
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  />
                  {/* Bottom line: full width */}
                  <motion.span
                    className="w-full h-[2px] bg-current rounded-full block origin-center"
                    animate={
                      isOpen
                        ? { rotate: -45, y: -6 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* ── Expandable Menu Panel ─────────────────────────── */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="menu-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.3, ease: "easeOut" },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.4, ease: [0.32, 0, 0.67, 0], delay: 0.08 },
                    opacity: { duration: 0.2, ease: "easeIn" },
                  },
                }}
                style={{ overflow: "hidden", borderTop: "1px solid #f0f0f0" }}
              >
                <motion.div
                  className="axtrait-menu-content"
                  initial={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.4,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                    filter: "blur(4px)",
                    transition: {
                      duration: 0.2,
                      ease: "easeIn",
                    },
                  }}
                >
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
                      <motion.img
                        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
                        alt="AXTRAIT Futuristic Interface"
                        className="axtrait-menu-banner-img"
                        loading="lazy"
                        initial={{ scale: 1.05 }}
                        animate={{
                          scale: 1,
                          transition: {
                            duration: 0.65,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
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
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </>
  );
}
