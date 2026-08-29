"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

interface ProjectItem {
  id: string;
  title: string;
  year: string;
  tags: string[];
  category: string;
  image: string;
}

const allProjects: ProjectItem[] = [
  // 1. WEB DEVELOPMENT
  {
    id: "web-1",
    title: "MKT Auto Marketplace",
    year: "[ 2026 ]",
    tags: ["Automotive", "Next.js"],
    category: "WEB DEVELOPMENT",
    image: "/images/stacked_service_1.jpg",
  },
  {
    id: "web-2",
    title: "Silver Arrow Luxury Rentals",
    year: "[ 2026 ]",
    tags: ["Car Rental", "Vercel"],
    category: "WEB DEVELOPMENT",
    image: "/images/stage_1.jpg",
  },
  {
    id: "web-3",
    title: "The Crazy Entrepreneur Global",
    year: "[ 2026 ]",
    tags: ["Media Hub", "CMS"],
    category: "WEB DEVELOPMENT",
    image: "/images/about_arch_main.jpg",
  },
  {
    id: "web-4",
    title: "Apex Enterprise Cloud Portal",
    year: "[ 2026 ]",
    tags: ["Fintech", "React"],
    category: "WEB DEVELOPMENT",
    image: "/images/stage_2.jpg",
  },
  {
    id: "web-5",
    title: "Omnichannel Ecommerce Platform",
    year: "[ 2026 ]",
    tags: ["Shopify", "Tailwind"],
    category: "WEB DEVELOPMENT",
    image: "/images/stacked_service_3.jpg",
  },
  {
    id: "web-6",
    title: "Prime Estates Showcase",
    year: "[ 2026 ]",
    tags: ["Real Estate", "TypeScript"],
    category: "WEB DEVELOPMENT",
    image: "/images/stage_3.jpg",
  },

  // 2. LEAD GENERATION
  {
    id: "lead-1",
    title: "B2B Outbound Acquisition Engine",
    year: "[ 2026 ]",
    tags: ["Apollo.io", "Cold Email"],
    category: "LEAD GENERATION",
    image: "/images/stacked_service_2.jpg",
  },
  {
    id: "lead-2",
    title: "High-Ticket Real Estate Pipeline",
    year: "[ 2026 ]",
    tags: ["Meta Ads", "Funnels"],
    category: "LEAD GENERATION",
    image: "/images/about_pill_portrait.jpg",
  },
  {
    id: "lead-3",
    title: "Multi-Channel Prospecting Funnel",
    year: "[ 2026 ]",
    tags: ["LinkedIn", "Automation"],
    category: "LEAD GENERATION",
    image: "/images/about_team_collab.jpg",
  },
  {
    id: "lead-4",
    title: "Automated Lead Validator & Enricher",
    year: "[ 2026 ]",
    tags: ["Data Intel", "API"],
    category: "LEAD GENERATION",
    image: "/images/stage_4.jpg",
  },
  {
    id: "lead-5",
    title: "Conversion Rate Optimization Suite",
    year: "[ 2026 ]",
    tags: ["Landing Pages", "CRO"],
    category: "LEAD GENERATION",
    image: "/images/about_innovation_team.jpg",
  },
  {
    id: "lead-6",
    title: "Enterprise Inbound Growth Funnel",
    year: "[ 2026 ]",
    tags: ["Google Ads", "Tracking"],
    category: "LEAD GENERATION",
    image: "/images/card_3d_gem.jpg",
  },

  // 3. CRM SOLUTIONS
  {
    id: "crm-1",
    title: "Custom Enterprise CRM Portal",
    year: "[ 2026 ]",
    tags: ["Zoho Books", "API"],
    category: "CRM SOLUTIONS",
    image: "/images/stacked_service_3.jpg",
  },
  {
    id: "crm-2",
    title: "Automated Sales Deal Pipeline",
    year: "[ 2026 ]",
    tags: ["Workflow", "Webhooks"],
    category: "CRM SOLUTIONS",
    image: "/images/stage_2.jpg",
  },
  {
    id: "crm-3",
    title: "Real Estate Multi-Broker CRM",
    year: "[ 2026 ]",
    tags: ["Property Hub", "Cloud"],
    category: "CRM SOLUTIONS",
    image: "/images/about_arch_main.jpg",
  },
  {
    id: "crm-4",
    title: "Omnichannel WhatsApp CRM Gateway",
    year: "[ 2026 ]",
    tags: ["Meta API", "Support"],
    category: "CRM SOLUTIONS",
    image: "/images/about_future_city.png",
  },
  {
    id: "crm-5",
    title: "Client Invoicing & Billing Tracker",
    year: "[ 2026 ]",
    tags: ["Finance", "Automation"],
    category: "CRM SOLUTIONS",
    image: "/images/card_3d_sphere.jpg",
  },
  {
    id: "crm-6",
    title: "Support Desk Dispatch System",
    year: "[ 2026 ]",
    tags: ["Helpdesk", "Operations"],
    category: "CRM SOLUTIONS",
    image: "/images/card_3d_robot.jpg",
  },

  // 4. AI & AUTOMATION
  {
    id: "ai-1",
    title: "Autonomous Support AI Agent",
    year: "[ 2026 ]",
    tags: ["LLM", "Chatbot"],
    category: "AI & AUTOMATION",
    image: "/images/about_ai_tech.jpg",
  },
  {
    id: "ai-2",
    title: "Smart Document & Invoice Parser",
    year: "[ 2026 ]",
    tags: ["OCR", "Automation"],
    category: "AI & AUTOMATION",
    image: "/images/stacked_service_4.jpg",
  },
  {
    id: "ai-3",
    title: "AI Lead Qualifier Bot",
    year: "[ 2026 ]",
    tags: ["WhatsApp AI", "CRM"],
    category: "AI & AUTOMATION",
    image: "/images/card_cyborg_exact.png",
  },
  {
    id: "ai-4",
    title: "Real-Time Data Sync Pipeline",
    year: "[ 2026 ]",
    tags: ["Zapier", "Webhooks"],
    category: "AI & AUTOMATION",
    image: "/images/about_3d_torus.jpg",
  },
  {
    id: "ai-5",
    title: "Predictive Business Analytics Bot",
    year: "[ 2026 ]",
    tags: ["Python", "AI Engine"],
    category: "AI & AUTOMATION",
    image: "/images/stage_1.jpg",
  },
  {
    id: "ai-6",
    title: "AI Content & Campaign Generator",
    year: "[ 2026 ]",
    tags: ["OpenAI", "Media"],
    category: "AI & AUTOMATION",
    image: "/images/hero_card_1.jpg",
  },

  // 5. SAAS DEVELOPMENT
  {
    id: "saas-1",
    title: "Perky Digital Loyalty Platform",
    year: "[ 2026 ]",
    tags: ["Next.js", "NextGen"],
    category: "SAAS DEVELOPMENT",
    image: "/images/hero_card_2.jpg",
  },
  {
    id: "saas-2",
    title: "Multi-Tenant Booking Engine",
    year: "[ 2026 ]",
    tags: ["Cloud SaaS", "Stripe"],
    category: "SAAS DEVELOPMENT",
    image: "/images/stage_4.jpg",
  },
  {
    id: "saas-3",
    title: "Cloud Asset Telemetry Hub",
    year: "[ 2026 ]",
    tags: ["IoT", "Dashboard"],
    category: "SAAS DEVELOPMENT",
    image: "/images/about_future_city.png",
  },
  {
    id: "saas-4",
    title: "Global Subscription Gateway",
    year: "[ 2026 ]",
    tags: ["Billing", "Webhooks"],
    category: "SAAS DEVELOPMENT",
    image: "/images/stacked_service_1.jpg",
  },
  {
    id: "saas-5",
    title: "Creator Portfolio & Media Suite",
    year: "[ 2026 ]",
    tags: ["Vercel", "AWS"],
    category: "SAAS DEVELOPMENT",
    image: "/images/about_arch_main.jpg",
  },
  {
    id: "saas-6",
    title: "Secure API Rate-Limiter SaaS",
    year: "[ 2026 ]",
    tags: ["Go", "Redis"],
    category: "SAAS DEVELOPMENT",
    image: "/images/card_3d_gem.jpg",
  },

  // 6. APP DEVELOPMENT
  {
    id: "app-1",
    title: "Luxury Mobility iOS / Android App",
    year: "[ 2026 ]",
    tags: ["React Native", "iOS"],
    category: "APP DEVELOPMENT",
    image: "/images/hero_card_3.jpg",
  },
  {
    id: "app-2",
    title: "Dealership Mobile Inventory",
    year: "[ 2026 ]",
    tags: ["Flutter", "Android"],
    category: "APP DEVELOPMENT",
    image: "/images/stacked_service_2.jpg",
  },
  {
    id: "app-3",
    title: "Field Sales CRM Mobile Application",
    year: "[ 2026 ]",
    tags: ["Mobile", "Cloud"],
    category: "APP DEVELOPMENT",
    image: "/images/stage_3.jpg",
  },
  {
    id: "app-4",
    title: "High-Performance Invoicing Mobile App",
    year: "[ 2026 ]",
    tags: ["Finance", "Expo"],
    category: "APP DEVELOPMENT",
    image: "/images/card_3d_sphere.jpg",
  },
  {
    id: "app-5",
    title: "Smart Real Estate Agent Mobile Suite",
    year: "[ 2026 ]",
    tags: ["Mobile UI", "Map API"],
    category: "APP DEVELOPMENT",
    image: "/images/about_team_collab.jpg",
  },
  {
    id: "app-6",
    title: "Instant Team Dispatch & Chat App",
    year: "[ 2026 ]",
    tags: ["WebSockets", "Native"],
    category: "APP DEVELOPMENT",
    image: "/images/about_innovation_team.jpg",
  },
];

const filterCategories = [
  "ALL",
  "WEB DEVELOPMENT",
  "LEAD GENERATION",
  "CRM SOLUTIONS",
  "AI & AUTOMATION",
  "SAAS DEVELOPMENT",
  "APP DEVELOPMENT",
] as const;

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const isEven = index % 2 === 1;
  const initialRotate = isEven ? 18 : -18;

  const rotateZ = useTransform(scrollYProgress, [0, 1], [initialRotate, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateZ, scale, opacity }}
      className="group relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-black shadow-2xl cursor-pointer w-full h-[420px] sm:h-[500px]"
    >
      {/* Full Image covering 100% of the card */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Center Brand Green Hover Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
        <div className="w-16 h-16 rounded-2xl bg-[#0acd00] text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
          <ArrowUpRight className="w-8 h-8" />
        </div>
      </div>

      {/* Floating White Gradient Glass Overlay */}
      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 px-6 py-5 sm:px-7 sm:py-6 rounded-[22px] bg-gradient-to-b from-white/95 via-white/90 to-white/80 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.18)] z-10 flex flex-col justify-center gap-3">
        <div className="flex items-center justify-between gap-4 w-full">
          <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight font-['Syne'] m-0 leading-tight">
            {project.title}
          </h3>
          <span className="text-xs sm:text-sm font-mono text-zinc-600 font-semibold shrink-0">
            {project.year}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-semibold font-['Montserrat'] px-3.5 py-1.5 rounded-full bg-[#0acd00] text-black shadow-sm leading-none"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const containerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: showcaseScrollY } = useScroll({
    target: showcaseRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.08], [0.96, 1]);
  const titleScale = useTransform(showcaseScrollY, [0, 0.25], [1, 0.9]);
  const titleOpacity = useTransform(showcaseScrollY, [0.85, 1], [1, 0.25]);

  const displayedProjects =
    activeCategory === "ALL"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

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
          className="relative z-10 min-h-screen bg-[#ffffff] shadow-[0_-30px_80px_rgba(0,0,0,0.95)] origin-top rounded-t-[40px] sm:rounded-t-[56px] pt-6 sm:pt-10"
        >
          {/* Project Showcase Section */}
          <section ref={showcaseRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-[#ffffff]" aria-label="Our Projects">
            {/* Header */}
            <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
                <span className="text-[#0acd00]">✦</span>
                <span>PROVEN RESULTS</span>
              </div>
              <h2 className="font-['Syne'] font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-black leading-[1.06] mb-6 tracking-tight">
                Case Studies &amp; <span className="text-[#0acd00]">Client Showcase</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-xl font-['Montserrat'] max-w-2xl mx-auto">
                Explore how we help high-growth startups and enterprise clients solve complex engineering challenges and achieve market dominance.
              </p>
            </div>

            {/* Filter Tabs Bar */}
            <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 mb-14 sm:mb-16 max-w-7xl mx-auto px-4">
              {filterCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 sm:px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? "bg-black text-white font-bold shadow-lg shadow-black/20 scale-105"
                        : "bg-zinc-100 text-zinc-600 font-semibold hover:text-black hover:bg-zinc-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* 2-Column Grid with Staggered Scroll Parallax & Rotations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-12 sm:gap-y-16 lg:gap-y-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={`${activeCategory}-${project.id}`}
                  project={project}
                  index={index}
                />
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
                <p className="text-gray-400 text-base sm:text-lg mb-8 font-['Montserrat']">
                  Let&apos;s discuss how we can build a scalable engineering solution tailored to your business goals.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0acd00] text-black font-bold text-base px-8 py-4 rounded-full hover:brightness-110 shadow-lg shadow-[#0acd00]/25 transition-all duration-300 font-['Montserrat']"
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
