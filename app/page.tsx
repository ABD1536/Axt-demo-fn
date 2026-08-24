"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import ParallaxVideoSection from "@/components/ParallaxVideoSection";
import StatsCounterSection from "@/components/StatsCounterSection";
import StackedServices from "@/components/StackedServices";
import ProjectShowcase from "@/components/ProjectShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import TechIntegrationSection from "@/components/TechIntegrationSection";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic scale transformation for overlapping sheet on scroll
  const scale = useTransform(scrollYProgress, [0, 0.08], [0.96, 1]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="relative w-full bg-[#000000]">
        {/* 1. FIXED HERO: Locked in background */}
        <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden flex flex-col justify-center items-center">
          <HeroSection />
        </div>

        {/* 2. SCROLL SPACER: Provides natural scroll distance before sheet overlaps */}
        <div className="h-screen w-full pointer-events-none" aria-hidden="true" />

        {/* 3. OVERLAPPING SHEET: Slides up and overlaps over the fixed hero */}
        <motion.div
          style={{
            scale,
          }}
          className="relative z-10 min-h-screen bg-[#ffffff] shadow-[0_-30px_80px_rgba(0,0,0,0.95)] origin-top rounded-t-[40px] sm:rounded-t-[56px]"
        >
          <MarqueeBanner />
          <AboutSection />
          <ParallaxVideoSection />
          <StatsCounterSection />
          <StackedServices />
          <ProjectShowcase />
          <TestimonialsSection />
          <BlogSection />
          <FaqSection />
          <TechIntegrationSection />
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
