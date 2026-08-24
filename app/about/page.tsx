"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutCraftingSection from "@/components/AboutCraftingSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import TextMarqueeBar from "@/components/TextMarqueeBar";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
            titleLine1="ABOUT US"
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
          {/* 1. Crafting Powerful Brands (About Us Section) */}
          <AboutCraftingSection />

          {/* Section Divider Line */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12" aria-hidden="true">
            <div className="w-full border-t border-zinc-200" />
          </div>

          {/* 2. Four Steps To Market Dominance (How We Work) */}
          <HowWeWorkSection />

          {/* 3. Continuous Green Star Marquee Strip */}
          <TextMarqueeBar />

          {/* 4. Why Choose Us (Dark Background Section) */}
          <WhyChooseUsSection />

          {/* 5. Partner Brands Marquee */}
          <MarqueeBanner />

          {/* Footer */}
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
