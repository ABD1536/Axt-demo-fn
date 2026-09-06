"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const articles = [
  {
    title: "Building Production-Grade RAG Pipelines with Claude 3.5 & Next.js 15",
    category: "AI Engineering",
    readTime: "7 min read",
    date: "Aug 1, 2026",
    author: "Alex Rivera, Head of AI",
    summary:
      "A technical walkthrough on constructing low-latency retrieval systems for enterprise vector search, including caching strategies and context window optimization.",
  },
  {
    title: "Why Modern B2B SaaS Platforms Are Moving Away from Monolithic Frameworks",
    category: "Web Architecture",
    readTime: "5 min read",
    date: "Jul 24, 2026",
    author: "David Chen, Lead Architect",
    summary:
      "How modular micro-frontends and edge-rendered Next.js applications enable 4x faster feature iteration for high-scale enterprise engineering teams.",
  },
  {
    title: "Zero-Downtime Infrastructure Migrations: Lessons from 50+ Kubernetes Projects",
    category: "Cloud & DevOps",
    readTime: "9 min read",
    date: "Jul 15, 2026",
    author: "Marcus Vance, Director of IT",
    summary:
      "Essential patterns for blue-green deployments, database schema migrations without downtime, and proactive monitoring with Prometheus.",
  },
  {
    title: "Designing Dark Mode Design Systems That Enterprise Users Actually Love",
    category: "UI/UX Strategy",
    readTime: "4 min read",
    date: "Jul 08, 2026",
    author: "Elena Rostova, Product Designer",
    summary:
      "Key color contrast ratios, accessibility guidelines, and component token design tactics for complex enterprise dashboard interfaces.",
  },
  {
    title: "Securing B2B Web Apps Against Emerging OWASP Top 10 Threats in 2026",
    category: "Cybersecurity",
    readTime: "6 min read",
    date: "Jun 28, 2026",
    author: "Marcus Vance, Director of IT",
    summary:
      "Practical defensive coding techniques, rate-limiting strategies, and API security headers for modern Node.js and Next.js applications.",
  },
  {
    title: "The ROI of Custom AI Assistants: Benchmark Report Across 30 B2B Scaleups",
    category: "AI & Automation",
    readTime: "8 min read",
    date: "Jun 14, 2026",
    author: "Alex Rivera, Head of AI",
    summary:
      "An empirical study measuring cost reductions, employee productivity gains, and resolution speeds after implementing internal AI assistants.",
  },
];

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.08], [0.96, 1]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="relative w-full bg-[#000000]">
        {/* 1. FIXED HERO: Locked in background */}
        <div className="fixed top-0 left-0 w-full h-[55vh] min-h-[440px] max-h-[560px] z-0 overflow-hidden flex flex-col justify-center items-center">
          <HeroSection
            className="hero-v2-compact"
            badge="DIGITAL & IT AGENCY"
            titleLine1="BLOG"
            titleLine2=""
            primaryCtaText=""
            secondaryCtaText=""
            showCards={false}
          />
        </div>

        {/* 2. SCROLL SPACER */}
        <div className="h-[55vh] min-h-[440px] max-h-[560px] w-full pointer-events-none" aria-hidden="true" />

        {/* 3. OVERLAPPING SHEET */}
        <motion.div
          style={{
            scale,
          }}
          className="relative z-10 min-h-screen bg-[#ffffff] shadow-[0_-30px_80px_rgba(0,0,0,0.95)] origin-top rounded-t-[40px] sm:rounded-t-[56px] pt-14 sm:pt-20 overflow-hidden"
        >
          {/* Articles Grid */}
          <section className="pb-20 sm:pb-28 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white border border-zinc-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm font-['Montserrat']">
                <span>✦</span>
                <span>Latest Publications</span>
              </div>
              <h2 className="font-['Syne'] font-bold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight mb-4">
                Explore Our <span className="text-[#0acd00]">Knowledge Base</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg font-['Montserrat']">
                Technical insights, architecture case studies, and engineering benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {articles.map((art) => (
                <article
                  key={art.title}
                  className="group rounded-2xl p-7 flex flex-col justify-between bg-gradient-to-br from-[#0a0a0c] via-[#051a09] to-[#02280d] border border-[#0acd00]/30 hover:border-[#0acd00]/70 shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_25px_rgba(10,205,0,0.18)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-3.5 py-1.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide border border-white shadow-sm font-['Montserrat']">
                        {art.category}
                      </span>
                      <span className="text-zinc-400 text-xs font-mono">{art.readTime}</span>
                    </div>

                    <h3 className="text-white font-['Syne'] font-bold text-lg sm:text-xl leading-snug group-hover:text-[#0acd00] transition-colors mt-4 mb-3">
                      {art.title}
                    </h3>

                    <p className="text-zinc-300 text-xs sm:text-sm font-['Montserrat'] leading-relaxed mb-6 line-clamp-3">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80 flex justify-between items-center text-xs font-semibold">
                    <span className="text-zinc-400 text-xs font-mono">{art.date}</span>
                    <span className="text-[#0acd00] font-semibold text-xs sm:text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all font-['Montserrat'] cursor-pointer">
                      Read Article <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
