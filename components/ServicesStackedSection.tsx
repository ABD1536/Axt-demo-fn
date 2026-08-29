"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardData {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const serviceCards: ServiceCardData[] = [
  {
    id: "web-development",
    badge: "[WEB DEVELOPMENT]",
    title: "CUSTOM WEB DEVELOPMENT",
    description:
      "High-performance web applications, scalable enterprise platforms, and native web solutions engineered with modern Next.js, TypeScript, and high-availability cloud architectures.",
    image: "/images/stacked_service_1.jpg",
    href: "/services/web-development",
  },
  {
    id: "lead-generation",
    badge: "[LEAD GENERATION]",
    title: "B2B LEAD GENERATION",
    description:
      "High-converting outbound acquisition engines, data-driven pipeline prospecting, and targeted growth funnels engineered to capture high-value commercial clients.",
    image: "/images/stacked_service_2.jpg",
    href: "/services/lead-generation",
  },
  {
    id: "crm-solutions",
    badge: "[CRM SOLUTIONS]",
    title: "CUSTOM CRM SOLUTIONS",
    description:
      "Bespoke CRM architectures, automated deal flow tracking, and seamless cross-platform integrations tailored to optimize enterprise sales operations.",
    image: "/images/stacked_service_3.jpg",
    href: "/services/crm-solutions",
  },
  {
    id: "ai-automation",
    badge: "[AI & AUTOMATION]",
    title: "AI & WORKFLOW AUTOMATION",
    description:
      "Intelligent custom AI integrations, autonomous conversational agents, and multi-app automated workflows that eliminate manual operational overhead.",
    image: "/images/stacked_service_4.jpg",
    href: "/services/ai-automation",
  },
  {
    id: "saas-development",
    badge: "[SAAS DEVELOPMENT]",
    title: "FULL-STACK SAAS PLATFORMS",
    description:
      "End-to-end multi-tenant SaaS engineering—from secure authentication and global subscription billing to real-time analytics and scalable cloud deployment.",
    image: "/images/about_ai_tech.jpg",
    href: "/services/saas-development",
  },
  {
    id: "app-development",
    badge: "[APP DEVELOPMENT]",
    title: "MOBILE APP DEVELOPMENT",
    description:
      "High-performance iOS and Android mobile applications crafted with modern architectures, low-latency performance, and intuitive user experiences.",
    image: "/images/about_future_city.png",
    href: "/services/app-development",
  },
];

export default function ServicesStackedSection() {
  return (
    <section
      className="w-full bg-white text-zinc-950 pt-20 sm:pt-28 pb-14 sm:pb-18 px-4 sm:px-8"
      aria-label="Our Core Services"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white border border-[#0acd00]/40 text-xs sm:text-[13px] font-bold uppercase tracking-widest font-['Montserrat'] mb-4 shadow-sm">
            <span className="text-[#0acd00] font-extrabold text-sm">+</span>
            <span>OUR CORE SERVICES</span>
          </div>

          {/* Main Title */}
          <h2 className="font-['Syne'] font-bold text-4xl sm:text-6xl lg:text-[68px] xl:text-[76px] text-zinc-950 text-center leading-tight tracking-tight">
            Capabilities Tailored To Your Growth
          </h2>
        </div>

        {/* Full-Cover Sticky Stacked Card Deck */}
        <div className="relative flex flex-col w-full pb-0">
          {serviceCards.map((card, index) => {
            return (
              <div
                key={card.id}
                id={card.id}
                className="sticky top-20 sm:top-24 lg:top-28 w-full scroll-mt-28 mb-20 sm:mb-28 lg:mb-32 transition-all duration-300"
                style={{
                  zIndex: (index + 1) * 10,
                }}
              >
              <div className="w-full bg-[#0d0f12] border border-zinc-800/90 rounded-[22px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] hover:border-[#0acd00]/60 transition-all duration-300 group">
                {/* Top Deck Header Tab Bar with crisp white divider line */}
                <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 bg-[#14171d] border-b border-white/20">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <span className="font-['Syne'] text-sm sm:text-base font-extrabold text-white">
                      0{index + 1}
                    </span>
                    <span className="text-[#0acd00] font-bold">·</span>
                    <span className="font-['Montserrat'] text-xs sm:text-sm font-bold text-[#0acd00] tracking-wider uppercase">
                      {card.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#0acd00] shadow-[0_0_8px_#0acd00]"
                      aria-hidden="true"
                    />
                    <span className="font-['Montserrat'] text-[11px] sm:text-xs font-bold text-zinc-400 tracking-wider">
                      CARD 0{index + 1} OF 0{serviceCards.length}
                    </span>
                  </div>
                </div>

                {/* Inner Card Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
                  {/* Left Column: Image Media with clean white border */}
                  <div className="lg:col-span-6 w-full">
                    <div className="relative w-full aspect-[16/10.5] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/30 shadow-lg bg-zinc-900">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>

                  {/* Right Column: Content with Extra Bold Headline */}
                  <div className="lg:col-span-6 flex flex-col items-start gap-4 sm:gap-6">
                    <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] text-white leading-tight">
                      {card.title}
                    </h3>
                    <p className="font-['Montserrat'] text-sm sm:text-base text-zinc-300 sm:text-zinc-400 leading-relaxed font-normal">
                      {card.description}
                    </p>

                    {/* Explore Service Button with font-medium and white text */}
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0acd00] text-white font-medium font-['Montserrat'] text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-[#0acd00]/20 mt-1 group/btn"
                    >
                      <span>EXPLORE SERVICE</span>
                      <span
                        className="text-white group-hover/btn:text-black font-medium text-base group-hover/btn:translate-x-1 transition-all"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
