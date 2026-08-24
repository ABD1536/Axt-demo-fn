"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
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
  const [subscribed, setSubscribed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.08], [0.96, 1]);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

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
          className="relative z-10 min-h-screen bg-[#ffffff] shadow-[0_-30px_80px_rgba(0,0,0,0.95)] origin-top rounded-t-[40px] sm:rounded-t-[56px]"
        >
          {/* Partner Brands Marquee */}
          <MarqueeBanner />

          {/* Featured Post Banner */}
          <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="bg-[#f7f7f7] border border-gray-200/80 rounded-3xl p-8 sm:p-12 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#0acd00]/10 text-[#0acd00] text-xs font-bold uppercase tracking-wider">
                  Featured Publication
                </span>
                <span className="text-xs sm:text-sm text-gray-500 font-medium">Aug 1, 2026 • 7 min read</span>
              </div>
              <h2 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-black leading-tight mb-4">
                Building Production-Grade RAG Pipelines with Claude 3.5 &amp; Next.js 15
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                Discover how our engineering team builds ultra-responsive vector search systems capable of processing millions of enterprise documents with sub-100ms latency.
              </p>
              <div className="flex justify-between items-center flex-wrap gap-4 pt-6 border-t border-gray-200">
                <span className="text-xs sm:text-sm font-semibold text-gray-700">By Alex Rivera, Head of AI</span>
                <span className="text-xs sm:text-sm font-bold text-[#0acd00] hover:underline cursor-pointer">
                  Read Full Article →
                </span>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-bold uppercase tracking-wider text-[#0acd00] mb-4">
                ✦ Latest Publications
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight mb-4">
                Explore Our <span className="text-[#0acd00]">Knowledge Base</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Technical insights, architecture case studies, and engineering benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {articles.map((art) => (
                <article
                  key={art.title}
                  className="bg-[#f7f7f7] border border-gray-200/80 rounded-2xl p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#0acd00]/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-3 py-1 bg-black/5 border border-black/10 text-gray-700 text-xs font-semibold rounded-full">
                        {art.category}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{art.readTime}</span>
                    </div>

                    <h3 className="font-['Syne'] font-bold text-lg sm:text-xl text-black leading-snug mb-3">
                      {art.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-400">{art.date}</span>
                    <span className="text-[#0acd00] hover:underline cursor-pointer">Read Article →</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Subscription */}
          <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="bg-[#000000] text-white rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold uppercase tracking-wider text-[#0acd00] mb-4">
                  ✦ Stay Ahead
                </div>
                <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
                  Subscribe to Axtrait Digest
                </h2>
                <p className="text-gray-400 text-base sm:text-lg mb-8">
                  Get our monthly breakdown of tech architecture, AI innovations, and B2B growth benchmarks delivered directly to your inbox.
                </p>

                {subscribed ? (
                  <div className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0acd00]/20 border border-[#0acd00]/40 rounded-full text-[#0acd00] font-bold text-sm">
                    ✓ You&apos;re subscribed! Welcome to Axtrait Digest.
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      placeholder="Enter your work email"
                      required
                      className="px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm outline-none focus:border-[#0acd00] transition-colors flex-1"
                    />
                    <button
                      type="submit"
                      className="bg-[#0acd00] text-black font-bold text-sm px-8 py-3.5 rounded-full hover:brightness-110 shadow-lg shadow-[#0acd00]/25 transition-all"
                    >
                      Subscribe Now
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
