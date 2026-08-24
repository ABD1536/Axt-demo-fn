"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import Footer from "@/components/Footer";

const categories = ["All", "Web & Mobile", "AI & Automation", "Cloud & Infra", "UI/UX Design"] as const;

const caseStudies = [
  {
    title: "Nexora Global Logistics Platform",
    client: "Nexora Enterprise Solutions",
    category: "Web & Mobile",
    metric: "+240% Speed & 99.99% Uptime",
    summary:
      "Engineered a real-time global freight tracking dashboard processing over 500,000 telemetry updates daily, replacing legacy monolithic tools.",
    challenge:
      "Legacy system experienced severe DB lockups and latency spikes during peak supply chain windows, resulting in missed delivery SLA tracking.",
    solution:
      "Rebuilt the core UI in Next.js App Router with micro-frontends, backed by Node.js microservices and Redis caching layer on AWS ECS.",
    results: [
      "240% increase in dashboard load performance",
      "Zero unhandled outages across 12 consecutive months",
      "Automated automated reporting saving 25+ staff hours weekly",
    ],
    tags: ["Next.js", "Node.js", "Redis", "AWS ECS", "Tailwind CSS"],
  },
  {
    title: "FinEdge AI Investment Assistant",
    client: "FinEdge Capital Management",
    category: "AI & Automation",
    metric: "65% Cost Reduction & 4x Capacity",
    summary:
      "Deployed an enterprise RAG assistant that parses financial prospectuses, SEC filings, and quarterly reports in seconds for analyst teams.",
    challenge:
      "Investment analysts spent over 30 hours per week manually extracting balance sheet metrics from unstructured PDF financial filings.",
    solution:
      "Developed a custom vector search pipeline using Anthropic Claude & Llama 3, connected to an internal secure document repository with role-based access control.",
    results: [
      "Analyst document review time reduced from 4 hours to 15 minutes",
      "96.4% extraction precision verified by independent audit",
      "Saved $420k annually in manual data entry overhead",
    ],
    tags: ["Python", "Claude API", "Vector DB", "FastAPI", "React"],
  },
  {
    title: "HealthCore HIPAA Cloud Migration",
    client: "HealthCore Telehealth",
    category: "Cloud & Infra",
    metric: "SOC2 & HIPAA Compliant",
    summary:
      "Migrated legacy patient portals to a zero-trust multi-region AWS cloud setup with automated vulnerability patching and real-time monitoring.",
    challenge:
      "Compliance audit flagged multiple infrastructure risks on legacy VM infrastructure, hindering enterprise B2B partner acquisition.",
    solution:
      "Architected Terraform-managed Kubernetes clusters on AWS EKS with encrypted data vaults, automated audit logging, and automated failover.",
    results: [
      "Achieved 100% compliance pass on SOC2 Type II and HIPAA audits",
      "Infrastructure deployment times reduced from days to 8 minutes",
      "45% reduction in monthly cloud hosting costs",
    ],
    tags: ["Terraform", "AWS EKS", "Kubernetes", "Datadog", "Docker"],
  },
  {
    title: "Stacklabs Enterprise SaaS Redesign",
    client: "Stacklabs Software",
    category: "UI/UX Design",
    metric: "+180% User Activation Rate",
    summary:
      "Complete end-to-end design system overhaul and UX redesign for a complex developer tooling and workflow orchestration platform.",
    challenge:
      "Outdated UI resulted in steep user onboarding dropoff, causing a 40% trial-to-paid conversion bottleneck.",
    solution:
      "Conducted extensive user testing, simplified multi-step workflow configurations into guided wizards, and created a unified dark-mode design system.",
    results: [
      "Trial-to-paid conversion increased by 180%",
      "System design component adoption reached 100% across dev team",
      "User satisfaction NPS rose from +22 to +68",
    ],
    tags: ["Figma", "Design System", "User Research", "Prototyping", "CRO"],
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.08], [0.96, 1]);

  const filteredProjects =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="relative w-full bg-[#000000]">
        {/* 1. FIXED HERO: Locked in background */}
        <div className="fixed top-0 left-0 w-full h-[55vh] min-h-[440px] max-h-[560px] z-0 overflow-hidden flex flex-col justify-center items-center">
          <HeroSection
            className="hero-v2-compact"
            badge="DIGITAL & IT AGENCY"
            titleLine1="WORK"
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

          {/* Case Studies Section */}
          <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-bold uppercase tracking-wider text-[#0acd00] mb-4">
                ✦ Proven Results
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight mb-4">
                Case Studies &amp; <span className="text-[#0acd00]">Client Showcase</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Explore how we help high-growth startups and enterprise clients solve complex engineering challenges and achieve market dominance.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#000000] text-white shadow-md"
                      : "bg-[#f4f4f4] text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Case Studies Cards List */}
            <div className="flex flex-col gap-10 sm:gap-14">
              {filteredProjects.map((cs) => (
                <article
                  key={cs.title}
                  className="bg-[#f7f7f7] border border-gray-200/80 rounded-3xl p-8 sm:p-12 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <span className="inline-block px-3.5 py-1 rounded-full bg-[#0acd00]/10 text-[#0acd00] text-xs font-bold uppercase tracking-wider mb-3">
                        {cs.category}
                      </span>
                      <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-black">
                        {cs.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Client: {cs.client}</p>
                    </div>
                    <div className="px-4 py-2 bg-black text-[#0acd00] rounded-xl text-xs sm:text-sm font-bold shadow-sm whitespace-nowrap">
                      {cs.metric}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                    {cs.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
                    <div>
                      <h4 className="text-xs font-bold text-[#0acd00] uppercase tracking-wider mb-2">
                        The Challenge
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-2">
                        The Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-['Syne'] font-bold text-sm text-black uppercase tracking-wider mb-4">
                      Verified Outcomes
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                      {cs.results.map((res) => (
                        <li
                          key={res}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-white border border-gray-200/60 rounded-xl p-3.5"
                        >
                          <span className="text-[#0acd00] font-bold text-base leading-none">✓</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 bg-black/5 border border-black/10 rounded-full text-xs font-semibold text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="bg-[#000000] text-white rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
                  Have a Similar Project in Mind?
                </h2>
                <p className="text-gray-400 text-base sm:text-lg mb-8">
                  Let&apos;s discuss how we can build a scalable engineering solution for your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0acd00] text-black font-bold text-base px-8 py-4 rounded-full hover:brightness-110 shadow-lg shadow-[#0acd00]/25 transition-all duration-300"
                >
                  <span>Start Your Project Case Review</span>
                  <span aria-hidden="true">→</span>
                </Link>
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
