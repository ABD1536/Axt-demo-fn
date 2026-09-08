"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { useChatbot } from "@/components/chatbot/AxtraitChatbot";

/* ── Services Mega Menu & Accordion Data ──────────────────────── */
interface ServiceItem {
  number: string;
  title: string;
  href: string;
  subtitle: string;
  badges: string[];
}

const servicesList: ServiceItem[] = [
  {
    number: "01",
    title: "Web Development",
    href: "/services/web-development",
    subtitle: "Modern, responsive, high-performance websites.",
    badges: ["Web Apps", "E-Com", "Next.js"],
  },
  {
    number: "02",
    title: "Lead Generation",
    href: "/services/lead-generation",
    subtitle: "High-converting outbound & inbound funnels.",
    badges: ["Paid Media", "Funnels", "B2B Intel"],
  },
  {
    number: "03",
    title: "CRM Solutions",
    href: "/services/crm-solutions",
    subtitle: "Smart sales workflows & pipeline systems.",
    badges: ["Pipeline", "Workflows", "Tracking"],
  },
  {
    number: "04",
    title: "AI & Automation",
    href: "/services/ai-automation",
    subtitle: "Intelligent AI bots & system automation.",
    badges: ["AI Agents", "Automations", "Bots"],
  },
  {
    number: "05",
    title: "SaaS Development",
    href: "/services/saas-development",
    subtitle: "Scalable custom software & cloud portals.",
    badges: ["Multi-Tenant", "Portals", "Dashboards"],
  },
  {
    number: "06",
    title: "App Development",
    href: "/services/app-development",
    subtitle: "Native & cross-platform iOS/Android apps.",
    badges: ["iOS", "Android", "React Native"],
  },
];

/* ── Navigation Data ─────────────────────────────────────────── */
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "WORK", href: "/work" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

/* ── Navbar Component ────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();
  const { toggle: toggleChatbot } = useChatbot();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveTab(null);
    setIsMobileServicesOpen(false);
  }, []);

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

            {/* RIGHT: Chatbot Toggle + Hamburger/Close */}
            <div className="axtrait-nav-controls">
              {/* Chatbot Toggle */}
              <button
                type="button"
                aria-label="Open Axtrait AI Assistant"
                onClick={toggleChatbot}
                className="axtrait-nav-theme-btn !p-0.5 overflow-hidden"
              >
                <Image
                  src="/images/Chatbot-Icon.png"
                  alt="Axtrait AI"
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-full object-cover"
                />
              </button>

              {/* Hamburger / X */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen((v) => {
                    const nextState = !v;
                    if (!nextState) {
                      setActiveTab(null);
                      setIsMobileServicesOpen(false);
                    }
                    return nextState;
                  });
                }}
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
                  className="axtrait-menu-content max-h-[82vh] sm:max-h-[85vh] overflow-y-auto"
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
                  {/* ── Two-Column (Desktop) / Stacked (Mobile) Layout ── */}
                  <div className="axtrait-menu-grid items-stretch">
                    {/* LEFT (Desktop) / TOP (Mobile): Navigation Links */}
                    <div className="axtrait-menu-links">
                      {navItems.map((item) => {
                        const isActive =
                          item.href === "/"
                            ? pathname === "/"
                            : pathname === item.href || pathname?.startsWith(item.href + "/");
                        const isServices = item.name === "SERVICES";

                        if (isServices) {
                          return (
                            <div key={item.name} className="flex flex-col">
                              {/* Desktop / Tablet Link + Chevron Trigger */}
                              <div
                                className="hidden md:flex items-center justify-between"
                                onMouseEnter={() => setActiveTab("SERVICES")}
                              >
                                <Link
                                  href="/services"
                                  onClick={closeMenu}
                                  className={`axtrait-menu-link flex-1 ${
                                    isActive || activeTab === "SERVICES" ? "active" : ""
                                  }`}
                                >
                                  <span>{item.name}</span>
                                </Link>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab((prev) =>
                                      prev === "SERVICES" ? null : "SERVICES"
                                    );
                                  }}
                                  aria-label="Toggle services submenu"
                                  className="p-2 text-zinc-500 hover:text-black transition-colors"
                                >
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                      activeTab === "SERVICES"
                                        ? "rotate-180 text-[#0acd00]"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>

                              {/* Mobile Navigation Header: Direct Link to /services + Toggle Chevron */}
                              <div className="md:hidden flex flex-col">
                                <div className="flex items-center justify-between">
                                  <Link
                                    href="/services"
                                    onClick={closeMenu}
                                    className={`axtrait-menu-link flex-1 ${
                                      isActive ? "active" : ""
                                    } ${isMobileServicesOpen ? "text-[#0acd00]" : ""}`}
                                  >
                                    <span>{item.name}</span>
                                  </Link>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      setIsMobileServicesOpen((v) => !v);
                                    }}
                                    aria-label="Toggle services submenu"
                                    className="p-2.5 sm:p-3 text-zinc-500 hover:text-black transition-colors shrink-0 flex items-center justify-center"
                                    aria-expanded={isMobileServicesOpen}
                                  >
                                    <ChevronDown
                                      className={`w-4 h-4 transition-transform duration-300 ${
                                        isMobileServicesOpen
                                          ? "rotate-180 text-[#0acd00]"
                                          : "text-zinc-400"
                                      }`}
                                    />
                                  </button>
                                </div>

                                {/* Mobile Accordion Expanded Content */}
                                <AnimatePresence>
                                  {isMobileServicesOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{
                                        height: "auto",
                                        opacity: 1,
                                        transition: {
                                          height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                                          opacity: { duration: 0.25 },
                                        },
                                      }}
                                      exit={{
                                        height: 0,
                                        opacity: 0,
                                        transition: {
                                          height: { duration: 0.25, ease: "easeIn" },
                                          opacity: { duration: 0.15 },
                                        },
                                      }}
                                      className="overflow-hidden pl-2 pr-1 pt-1 pb-2 flex flex-col gap-2"
                                    >
                                      {/* All Services Overview Link Card */}
                                      <Link
                                        href="/services"
                                        onClick={closeMenu}
                                        className="p-3 rounded-xl bg-[#0acd00]/10 border border-[#0acd00]/30 active:bg-[#0acd00]/20 flex items-center justify-between transition-all group"
                                      >
                                        <div className="flex items-center gap-2">
                                          <span className="text-xs font-bold text-[#0acd00]">✦</span>
                                          <span className="text-sm font-bold text-zinc-900 font-['Syne'] group-hover:text-[#0acd00] transition-colors">
                                            All Services Overview
                                          </span>
                                        </div>
                                        <div className="w-7 h-7 rounded-full bg-[#0acd00] flex items-center justify-center shrink-0 text-black shadow-sm group-hover:scale-105 transition-transform">
                                          <ArrowRight className="w-3.5 h-3.5" />
                                        </div>
                                      </Link>
                                      {servicesList.map((service) => (
                                        <Link
                                          key={service.number}
                                          href={service.href}
                                          onClick={closeMenu}
                                          className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 active:bg-zinc-100 flex items-center justify-between transition-all group"
                                        >
                                          <div className="flex flex-col gap-1 pr-2">
                                            <div className="flex items-center gap-2">
                                              <span className="text-xs font-mono font-bold text-[#0acd00]">
                                                {service.number}
                                              </span>
                                              <span className="text-sm font-bold text-zinc-900 font-['Syne'] group-hover:text-[#0acd00] transition-colors">
                                                {service.title}
                                              </span>
                                            </div>
                                            <p className="text-[11px] text-zinc-500 line-clamp-1 font-['Montserrat']">
                                              {service.subtitle}
                                            </p>
                                            <div className="flex items-center gap-1 mt-1 flex-wrap">
                                              {service.badges.map((badge, bIdx) => (
                                                <span
                                                  key={bIdx}
                                                  className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#0acd00] text-white shadow-sm font-['Montserrat']"
                                                >
                                                  {badge}
                                                </span>
                                              ))}
                                            </div>
                                          </div>
                                          <div className="w-7 h-7 rounded-full bg-[#0acd00]/15 flex items-center justify-center shrink-0 text-[#0acd00] group-hover:bg-[#0acd00] group-hover:text-black transition-all">
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                          </div>
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeMenu}
                            onMouseEnter={() => setActiveTab(null)}
                            className={`axtrait-menu-link ${isActive ? "active" : ""}`}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* RIGHT (Desktop) / BOTTOM (Mobile): Dynamic In-Modal Content */}
                    <div className="w-full min-h-[160px] md:min-h-[260px]">
                      {/* Desktop / Tablet View: Dynamic Switcher */}
                      <div className="hidden md:block h-full">
                        <AnimatePresence mode="wait">
                          {activeTab === "SERVICES" ? (
                            <motion.div
                              key="services-panel"
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.98 }}
                              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                              className="h-full flex flex-col justify-center bg-zinc-50/60 rounded-2xl border border-zinc-200/80 p-4 sm:p-5"
                            >
                              {/* Panel Header */}
                              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200/60">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0acd00]/10 border border-[#0acd00]/25 text-[11px] font-bold text-[#0acd00] uppercase tracking-wider font-['Montserrat']">
                                  <span>✦</span>
                                  <span>OUR CAPABILITIES</span>
                                </div>
                                <Link
                                  href="/services"
                                  onClick={closeMenu}
                                  className="text-xs font-semibold text-zinc-500 hover:text-[#0acd00] transition-colors flex items-center gap-1 font-['Montserrat']"
                                >
                                  View All Services <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>

                              {/* 2-Column Services Grid */}
                              <div className="grid grid-cols-2 gap-3 mt-1">
                                {servicesList.map((service) => (
                                  <Link
                                    key={service.number}
                                    href={service.href}
                                    onClick={closeMenu}
                                    className="p-3 rounded-2xl bg-white hover:bg-zinc-100/90 border border-zinc-200/70 hover:border-[#0acd00]/40 transition-all duration-200 group block text-left shadow-sm"
                                  >
                                    {/* Title + Arrow */}
                                    <div className="text-sm font-bold text-zinc-900 group-hover:text-[#0acd00] flex items-center justify-between font-['Syne']">
                                      <span className="flex items-center">
                                        <span className="text-xs font-mono text-zinc-400 mr-1.5">
                                          {service.number}.
                                        </span>
                                        {service.title}
                                      </span>
                                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#0acd00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                                    </div>

                                    {/* Subtitle */}
                                    <p className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5 font-['Montserrat']">
                                      {service.subtitle}
                                    </p>

                                    {/* Badges */}
                                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                                      {service.badges.map((badge, bIdx) => (
                                        <span
                                          key={bIdx}
                                          className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#0acd00] text-white shadow-sm font-['Montserrat']"
                                        >
                                          {badge}
                                        </span>
                                      ))}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="default-banner"
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.98 }}
                              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                              className="axtrait-menu-banner relative h-full min-h-[250px] md:h-[260px] lg:h-[280px]"
                            >
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
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Mobile View (< md): Always show the full preview image banner below the menu links */}
                      <div className="md:hidden axtrait-menu-banner relative h-[150px] sm:h-[170px] w-full mt-4 rounded-2xl overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
                          alt="AXTRAIT Futuristic Interface"
                          className="axtrait-menu-banner-img"
                          loading="lazy"
                        />
                        <div className="axtrait-menu-banner-overlay" />
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
