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
import ServicesSection from "@/components/ServicesSection";
import WorkHighlightSection from "@/components/WorkHighlightSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic transforms for side gap shrinkage & expansion on scroll
  const scale = useTransform(scrollYProgress, [0, 0.12], [0.93, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.12], ["36px", "0px"]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="relative w-full bg-[#000000]">
        {/* 1. FIXED & FROZEN HERO: Locked 100% stationary in top background */}
        <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden flex flex-col justify-center items-center">
          <HeroSection />
        </div>

        {/* 2. 100vh SCROLL SPACER */}
        <div className="h-screen w-full pointer-events-none" aria-hidden="true" />

        {/* 3. OVERLAPPING SHEET: Slides UP directly over the frozen Hero */}
        <motion.div
          style={{
            scale,
            borderRadius,
          }}
          className="relative z-10 min-h-screen bg-[#ffffff] shadow-[0_-30px_80px_rgba(0,0,0,0.95)] origin-top overflow-hidden"
        >
          <MarqueeBanner />
          <AboutSection />
          <ParallaxVideoSection />
          <StatsCounterSection />
          <StackedServices />
          <ServicesSection />
          <WorkHighlightSection />
          <ProcessSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
