"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import ParallaxVideoSection from "@/components/ParallaxVideoSection";
import ServicesSection from "@/components/ServicesSection";
import WorkHighlightSection from "@/components/WorkHighlightSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="relative w-full bg-[#000000]">
        {/* 1. Hero Container - Fixed/Pinned in Background */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0 flex flex-col justify-center items-center">
          <HeroSection />
        </div>

        {/* 2. Overlapping Section - Slides smoothly directly OVER the Hero */}
        <div className="relative z-10 min-h-screen bg-[#ffffff] rounded-t-[40px] md:rounded-t-[60px] border-t border-black/10 shadow-[0_-30px_70px_rgba(0,0,0,1)]">
          <MarqueeBanner />
          <AboutSection />
          <ParallaxVideoSection />
          <ServicesSection />
          <WorkHighlightSection />
          <ProcessSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
