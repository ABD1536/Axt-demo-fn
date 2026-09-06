"use client";

import { use, useRef, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TextMarqueeBar from "@/components/TextMarqueeBar";
import Footer from "@/components/Footer";
import { servicesData, ServiceDetail } from "@/data/servicesData";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  ShoppingBag,
  Layout,
  Database,
  Palette,
  Zap,
  Mail,
  Search,
  Target,
  TrendingUp,
  Sparkles,
  Share2,
  Layers,
  GitBranch,
  MessageSquare,
  CreditCard,
  BarChart3,
  RefreshCw,
  Bot,
  Headphones,
  FileText,
  Network,
  Mic,
  Cloud,
  PieChart,
  ShieldCheck,
  Code,
  Server,
  Smartphone,
  Cpu,
  WifiOff,
  Bell,
  CheckCircle,
} from "lucide-react";

/* ── Star Badge Icon ──────────────────────────────────────────── */
function StarBadgeIcon({ className = "w-5 h-5 text-white" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
    </svg>
  );
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const service: ServiceDetail | undefined = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.08], [0.96, 1]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="relative w-full bg-[#000000]">
        {/* ── 1. FIXED HERO: Locked in background (Exact About/Work Architecture) ── */}
        <div className="fixed top-0 left-0 w-full h-[55vh] min-h-[440px] max-h-[560px] z-0 overflow-hidden flex flex-col justify-center items-center">
          <HeroSection
            className="hero-v2-compact hero-v2-service-detail"
            badge={`✦ ${service.number}. ${service.badge}`}
            titleLine1={service.heroTitleLine1}
            titleLine2={service.heroTitleLine2 || ""}
            titleClassName="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl tracking-tight leading-[1.1] max-w-5xl mx-auto px-4 !whitespace-normal"
            primaryCtaText=""
            secondaryCtaText=""
            showCards={false}
          />
        </div>

        {/* ── 2. SCROLL SPACER ────────────────────────────────────────── */}
        <div
          className="h-[55vh] min-h-[440px] max-h-[560px] w-full pointer-events-none"
          aria-hidden="true"
        />

        {/* ── 3. OVERLAPPING SHEET LAYER ──────────────────────────────── */}
        <motion.div
          style={{ scale }}
          className="relative z-10 min-h-screen bg-[#ffffff] shadow-[0_-30px_80px_rgba(0,0,0,0.95)] origin-top rounded-t-[40px] sm:rounded-t-[56px] pt-14 sm:pt-20 pb-24 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* ── Section 1: Intro Overview & Metrics ──────────────────── */}
            <section className="mb-12 sm:mb-16">
              {/* Eyebrow Badge (Green Pill with White Font) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0acd00] text-white border border-[#0acd00] mb-4 sm:mb-5 shadow-sm">
                <span className="text-white text-xs">✦</span>
                <span className="text-[11px] font-bold tracking-widest text-white uppercase font-['Montserrat']">
                  {service.introBadge}
                </span>
              </div>

              {/* Grid Header & Description (In-line Top Alignment) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-7">
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 font-['Syne'] leading-[1.08]">
                    {service.introHeadline}
                  </h2>
                </div>
                <div className="lg:col-span-5 pt-1.5 sm:pt-2.5">
                  <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-['Montserrat'] font-medium">
                    {service.introDescription}
                  </p>
                </div>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14">
                {service.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-gradient-to-br from-[#0a0a0c] via-[#051a09] to-[#02280d] border border-[#0acd00]/30 hover:border-[#0acd00]/60 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                  >
                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Montserrat',sans-serif] tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-zinc-300 mt-2 font-['Montserrat'] tracking-wide">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Dual Showcase Image Block (Below Metrics, Above Core Capabilities) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 sm:mt-12 mb-0">
                <div className="rounded-3xl overflow-hidden border border-zinc-200/80 bg-zinc-50 shadow-md relative h-[280px] sm:h-[360px] group">
                  <Image
                    src={service.dualShowcaseImages?.[0] || "/images/stacked_service_1.jpg"}
                    alt={`${service.badge} showcase visual 1`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden border border-zinc-200/80 bg-zinc-50 shadow-md relative h-[280px] sm:h-[360px] group">
                  <Image
                    src={service.dualShowcaseImages?.[1] || "/images/hero_card_2.jpg"}
                    alt={`${service.badge} showcase visual 2`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="w-full border-t border-zinc-200 mb-12 sm:mb-16" aria-hidden="true" />

            {/* ── Section 2: Core Capabilities Grid ───────────────────── */}
            <section className="mb-24">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0acd00]/10 border border-[#0acd00]/25 text-[#0acd00] text-[11px] font-bold uppercase tracking-wider mb-4 font-['Montserrat']">
                  <span>✦</span>
                  <span>CAPABILITIES SCOPE</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold text-zinc-950 font-['Syne'] tracking-tight">
                  {service.capabilitiesTitle}
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base mt-3 font-['Montserrat']">
                  {service.capabilitiesSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {service.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-gradient-to-br from-[#0a0a0c] via-[#051f0b] to-[#043310] border border-[#0acd00]/30 hover:border-[#0acd00]/70 hover:shadow-2xl hover:shadow-[#0acd00]/20 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                  >
                    <div>
                      {/* Green Circle Badge with White 4-Point Star */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0acd00] flex items-center justify-center mb-6 shadow-[0_0_16px_rgba(10,205,0,0.45)] group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(10,205,0,0.7)] transition-all duration-300">
                        <StarBadgeIcon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white font-['Syne'] group-hover:text-[#0acd00] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 mt-2.5 leading-relaxed font-['Montserrat']">
                        {cap.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 mt-6 flex-wrap pt-4 border-t border-white/10">
                      {cap.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-zinc-200 border border-white/5 font-['Montserrat'] group-hover:border-[#0acd00]/30 group-hover:bg-[#0acd00]/10 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Full-Width Hero Showcase Banner with Centered CTA Button */}
              <div className="w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden border border-zinc-200 shadow-lg relative my-16 group">
                <Image
                  src={service.fullWidthBannerImage || "/images/parallax_office.jpg"}
                  alt={`${service.badge} development workspace and digital design showcase`}
                  fill
                  sizes="100vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Ambient Overlay for High Contrast */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />

                {/* Centered Modern "Start This Project" CTA Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between gap-4 sm:gap-5 pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full bg-white text-zinc-950 font-medium text-xs sm:text-sm font-['Montserrat'] shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_40px_rgba(10,205,0,0.45)] hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <span className="tracking-wider text-zinc-950 font-medium font-['Montserrat'] uppercase">Start This Project</span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0acd00] flex items-center justify-center text-black shrink-0 transition-transform duration-300 group-hover/btn:rotate-45 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-black stroke-[2.5]" />
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* ── Section 3: Engineering & Execution Process (Full-Bleed Full Viewport Width) ──── */}
          <section className="relative w-full pt-24 sm:pt-32 pb-24 sm:pb-32 bg-gradient-to-b from-[#000000] via-[#041a08] to-[#000000] overflow-hidden mt-12 sm:mt-16 mb-0">
            {/* Subtle Ambient Cosmic Green Radial Glow */}
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(10,205,0,0.22),transparent)] pointer-events-none"
              aria-hidden="true"
            />

            {/* Inner Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Header & Eyebrow */}
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="bg-[#0acd00] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-md mb-4 font-['Montserrat']">
                  <span>✦</span>
                  <span>DELIVERY WORKFLOW</span>
                </div>
                <h2 className="text-white font-bold text-3xl sm:text-5xl font-['Syne'] tracking-tight text-center whitespace-pre-line leading-[1.15]">
                  {service.processTitle}
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto text-center mt-3 mb-14 font-['Montserrat']">
                  {service.processSubtitle}
                </p>
              </div>

              {/* 4 Solid White Cards Inside Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-white/20 shadow-2xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="bg-black text-white border border-zinc-800 text-xs font-bold px-3.5 py-1.5 rounded-lg w-fit mb-4 font-['Montserrat'] tracking-wider uppercase shadow-sm">
                        STAGE {step.step}
                      </div>
                      <h3 className="text-zinc-900 font-bold text-lg leading-snug mb-3 font-['Syne']">
                        {step.title}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 font-['Montserrat']">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100">
                      <div className="text-[11px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-2">
                        Deliverables:
                      </div>
                      <ul className="text-zinc-700 text-xs space-y-1.5 font-['Montserrat']">
                        {step.deliverables.map((deliv, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-1.5 font-medium"
                          >
                            <Check className="w-3.5 h-3.5 text-[#0acd00] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 4: Continuous Text Marquee Strip (Directly Attached - No Gap) ─── */}
          <TextMarqueeBar />

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* ── Section 5: Tech Stack Badges ────────────────────────── */}
            <section className="pt-20 sm:pt-28 pb-24 text-center">
              <div className="max-w-3xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 text-[11px] font-bold uppercase tracking-wider mb-4 font-['Montserrat']">
                  <span className="text-[#0acd00]">✦</span>
                  <span>TECHNOLOGY ECOSYSTEM</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 font-['Syne'] tracking-tight">
                  {service.techStackTitle}
                </h2>
                <p className="text-zinc-600 text-sm mt-2 font-['Montserrat']">
                  {service.techStackSubtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto mt-8 mb-4">
                {service.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#0a0a0c] via-[#051f0b] to-[#043310] border border-[#0acd00]/40 hover:border-[#0acd00] text-white font-semibold text-xs sm:text-sm tracking-wide font-['Montserrat'] shadow-[0_2px_12px_rgba(10,205,0,0.15)] hover:shadow-[0_0_16px_rgba(10,205,0,0.35)] transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Divider */}
            <div className="w-full border-t border-zinc-200 mb-24" aria-hidden="true" />

            {/* ── Section 6: Selected Case Studies ─────────────────────── */}
            <section className="mb-24">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 text-[11px] font-bold uppercase tracking-wider mb-3 font-['Montserrat']">
                    <span className="text-[#0acd00]">✦</span>
                    <span>PROVEN RESULTS</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-bold text-zinc-950 font-['Syne'] tracking-tight">
                    {service.caseStudiesTitle}
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-[#0acd00] uppercase tracking-wider transition-colors font-['Montserrat']"
                >
                  View All Portfolio <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.caseStudies.map((cs, idx) => (
                  <Link
                    key={idx}
                    href="/work"
                    className="group rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all block"
                  >
                    <div className="relative h-[280px] sm:h-[340px] w-full overflow-hidden bg-zinc-900">
                      <Image
                        src={cs.image}
                        alt={cs.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[#0acd00] text-xs font-bold font-['Montserrat'] border border-zinc-800">
                        {cs.metrics}
                      </div>
                    </div>
                    <div className="p-7">
                      <div className="flex items-center justify-between text-xs text-zinc-400 font-bold uppercase tracking-wider font-['Montserrat'] mb-2">
                        <span>{cs.category}</span>
                        <span>[ {cs.year} ]</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 font-['Syne'] group-hover:text-[#0acd00] transition-colors flex items-center justify-between">
                        {cs.title}
                        <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-[#0acd00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-['Montserrat'] line-clamp-2">
                        {cs.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-4">
                        {cs.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full bg-gradient-to-r from-[#0a0a0c] via-[#051a09] to-[#02280d] border border-[#0acd00]/30 hover:border-[#0acd00]/60 text-white font-medium text-[11px] sm:text-xs tracking-wide font-['Montserrat'] shadow-sm transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Divider */}
            <div className="w-full border-t border-zinc-200 mb-24" aria-hidden="true" />

            {/* ── Section 7: FAQs Accordion ───────────────────────────── */}
            <section className="mb-24">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 text-[11px] font-bold uppercase tracking-wider mb-4 font-['Montserrat']">
                  <span className="text-[#0acd00]">✦</span>
                  <span>COMMON INQUIRIES</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold text-zinc-950 font-['Syne'] tracking-tight">
                  {service.faqsTitle}
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base mt-3 font-['Montserrat']">
                  {service.faqsSubtitle}
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-3.5">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-gradient-to-r from-[#0a0a0c] via-[#051a09] to-[#02280d] border border-[#0acd00]/30 hover:border-[#0acd00]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 group"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-['Syne'] font-bold text-base sm:text-lg transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className={isOpen ? "text-[#0acd00]" : "text-white group-hover:text-[#0acd00] transition-colors"}>
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-[#0acd00]" : "text-white/80 group-hover:text-[#0acd00]"
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                              transition: {
                                height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                                opacity: { duration: 0.2 },
                              },
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              transition: {
                                height: { duration: 0.2, ease: "easeIn" },
                                opacity: { duration: 0.15 },
                              },
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed font-['Montserrat'] border-t border-[#0acd00]/15 pt-3.5">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* End of Content */}
          </div>

          {/* Footer */}
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
