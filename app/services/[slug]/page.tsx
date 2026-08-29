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

/* ── Icon Map ─────────────────────────────────────────────────── */
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-[#0acd00]" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#0acd00]" />,
  Layout: <Layout className="w-6 h-6 text-[#0acd00]" />,
  Database: <Database className="w-6 h-6 text-[#0acd00]" />,
  Palette: <Palette className="w-6 h-6 text-[#0acd00]" />,
  Zap: <Zap className="w-6 h-6 text-[#0acd00]" />,
  Mail: <Mail className="w-6 h-6 text-[#0acd00]" />,
  Search: <Search className="w-6 h-6 text-[#0acd00]" />,
  Target: <Target className="w-6 h-6 text-[#0acd00]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#0acd00]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#0acd00]" />,
  Share2: <Share2 className="w-6 h-6 text-[#0acd00]" />,
  Layers: <Layers className="w-6 h-6 text-[#0acd00]" />,
  GitBranch: <GitBranch className="w-6 h-6 text-[#0acd00]" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-[#0acd00]" />,
  CreditCard: <CreditCard className="w-6 h-6 text-[#0acd00]" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-[#0acd00]" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-[#0acd00]" />,
  Bot: <Bot className="w-6 h-6 text-[#0acd00]" />,
  Headphones: <Headphones className="w-6 h-6 text-[#0acd00]" />,
  FileText: <FileText className="w-6 h-6 text-[#0acd00]" />,
  Network: <Network className="w-6 h-6 text-[#0acd00]" />,
  Mic: <Mic className="w-6 h-6 text-[#0acd00]" />,
  Cloud: <Cloud className="w-6 h-6 text-[#0acd00]" />,
  PieChart: <PieChart className="w-6 h-6 text-[#0acd00]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#0acd00]" />,
  Code: <Code className="w-6 h-6 text-[#0acd00]" />,
  Server: <Server className="w-6 h-6 text-[#0acd00]" />,
  Smartphone: <Smartphone className="w-6 h-6 text-[#0acd00]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#0acd00]" />,
  WifiOff: <WifiOff className="w-6 h-6 text-[#0acd00]" />,
  Bell: <Bell className="w-6 h-6 text-[#0acd00]" />,
  CheckCircle: <CheckCircle className="w-6 h-6 text-[#0acd00]" />,
};

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
            <section className="mb-24">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 mb-6">
                <span className="text-[#0acd00] text-xs">✦</span>
                <span className="text-[11px] font-bold tracking-widest text-zinc-900 uppercase font-['Montserrat']">
                  {service.introBadge}
                </span>
              </div>

              {/* Grid Header & Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-7">
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 font-['Syne'] leading-[1.08]">
                    {service.introHeadline}
                  </h2>
                </div>
                <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
                  <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-['Montserrat'] font-medium">
                    {service.introDescription}
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#000000] text-white hover:bg-[#0acd00] hover:text-black font-bold text-sm transition-all duration-300 font-['Montserrat'] group"
                    >
                      Start This Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-[#0acd00] uppercase tracking-wider transition-colors font-['Montserrat']"
                    >
                      All Services <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14">
                {service.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-zinc-50/80 border border-zinc-200/80 hover:border-[#0acd00]/40 transition-colors"
                  >
                    <div className="text-2xl sm:text-4xl font-extrabold text-zinc-950 font-['Syne'] tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-zinc-500 mt-1.5 font-['Montserrat']">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Divider */}
            <div className="w-full border-t border-zinc-200 mb-24" aria-hidden="true" />

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
                    className="p-7 rounded-3xl bg-white border border-zinc-200/80 hover:border-[#0acd00]/50 hover:shadow-xl hover:shadow-[#0acd00]/5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200/70 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-[#0acd00]/30 transition-all">
                        {iconMap[cap.icon] || <Code2 className="w-6 h-6 text-[#0acd00]" />}
                      </div>
                      <h3 className="text-lg font-bold text-zinc-950 font-['Syne'] group-hover:text-[#0acd00] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-2.5 leading-relaxed font-['Montserrat']">
                        {cap.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 mt-6 flex-wrap pt-4 border-t border-zinc-100">
                      {cap.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 font-['Montserrat']"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Divider */}
            <div className="w-full border-t border-zinc-200 mb-24" aria-hidden="true" />

            {/* ── Section 3: Engineering & Execution Process ──────────── */}
            <section className="mb-24">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 text-[11px] font-bold uppercase tracking-wider mb-4 font-['Montserrat']">
                  <span className="text-[#0acd00]">✦</span>
                  <span>DELIVERY WORKFLOW</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold text-zinc-950 font-['Syne'] tracking-tight">
                  {service.processTitle}
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base mt-3 font-['Montserrat']">
                  {service.processSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all flex flex-col justify-between relative"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-mono font-bold text-[#0acd00] px-2.5 py-1 rounded-md bg-[#0acd00]/10 border border-[#0acd00]/20">
                          STAGE {step.step}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-zinc-950 font-['Syne'] mb-2.5">
                        {step.title}
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed font-['Montserrat']">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-200/70">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-['Montserrat']">
                        Deliverables:
                      </div>
                      <ul className="space-y-1.5">
                        {step.deliverables.map((deliv, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-1.5 text-xs text-zinc-700 font-['Montserrat'] font-medium"
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
            </section>
          </div>

          {/* ── Section 4: Continuous Text Marquee Strip ─────────────── */}
          <div className="my-16">
            <TextMarqueeBar />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* ── Section 5: Tech Stack Badges ────────────────────────── */}
            <section className="mb-24 text-center">
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

              <div className="flex flex-wrap gap-2.5 sm:gap-3.5 justify-center max-w-4xl mx-auto">
                {service.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2.5 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 hover:border-[#0acd00]/40 text-xs sm:text-sm font-bold text-zinc-800 transition-all font-['Montserrat'] shadow-sm"
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
                      <div className="flex items-center gap-1.5 mt-4 flex-wrap">
                        {cs.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white border border-zinc-200 text-zinc-600 font-['Montserrat']"
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
                      className="rounded-2xl border border-zinc-200/80 bg-zinc-50/60 overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-['Syne'] font-bold text-base sm:text-lg text-zinc-900 hover:text-[#0acd00] transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 shrink-0 text-zinc-400 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-[#0acd00]" : ""
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
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-zinc-600 leading-relaxed font-['Montserrat'] border-t border-zinc-200/50 pt-3">
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

            {/* ── Section 8: High-Impact Conversion CTA Block ─────────── */}
            <section className="mb-12">
              <div className="relative rounded-3xl sm:rounded-[40px] bg-[#050608] border border-zinc-800 p-8 sm:p-16 text-center text-white overflow-hidden shadow-2xl">
                {/* Background Ambient Glow */}
                <div
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#0acd00]/20 blur-[120px] pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#0acd00] text-[11px] font-bold uppercase tracking-wider mb-6 font-['Montserrat']">
                    <span>✦</span>
                    <span>READY TO LAUNCH</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-bold font-['Syne'] tracking-tight leading-tight">
                    {service.ctaHeadline}
                  </h2>
                  <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed font-['Montserrat']">
                    {service.ctaSubtext}
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0acd00] text-black font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300 font-['Montserrat'] shadow-[0_0_24px_rgba(10,205,0,0.4)]"
                    >
                      Start Project ↗
                    </Link>
                    <Link
                      href="/work"
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900/80 border border-zinc-700 text-white font-bold text-sm uppercase tracking-wider hover:bg-zinc-800 transition-colors font-['Montserrat']"
                    >
                      Explore Case Studies
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
