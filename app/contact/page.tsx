"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { MapPin, CheckCircle2, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.08], [0.96, 1]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="relative w-full bg-[#000000]">
        {/* 1. FIXED HERO: Locked in background (Untouched) */}
        <div className="fixed top-0 left-0 w-full h-[55vh] min-h-[440px] max-h-[560px] z-0 overflow-hidden flex flex-col justify-center items-center">
          <HeroSection
            className="hero-v2-compact"
            badge="DIGITAL & IT AGENCY"
            titleLine1="CONTACT"
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
          className="relative z-10 min-h-screen bg-[#ffffff] shadow-[0_-30px_80px_rgba(0,0,0,0.95)] origin-top rounded-t-[40px] sm:rounded-t-[56px] pt-14 sm:pt-20 pb-20 overflow-hidden"
        >
          {/* Main Contact Section */}
          <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
              
              {/* ── LEFT COLUMN: Dark Form Card ("SEND A MESSAGE.") ── */}
              <div className="lg:col-span-6 bg-[#16171b] border border-zinc-800 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                {/* Subtle Ambient Glow */}
                <div 
                  className="absolute -top-24 -right-24 w-64 h-64 bg-[#0acd00]/10 rounded-full blur-3xl pointer-events-none" 
                  aria-hidden="true" 
                />

                <div className="relative z-10">
                  <h3 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase mb-8 sm:mb-10">
                    SEND A MESSAGE.
                  </h3>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="py-12 text-center flex flex-col items-center justify-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#0acd00]/15 border border-[#0acd00]/30 flex items-center justify-center text-[#0acd00] mb-4">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h4 className="font-['Syne'] font-bold text-2xl text-white mb-2">
                          Inquiry Received
                        </h4>
                        <p className="font-['Montserrat'] text-sm text-zinc-400 max-w-md leading-relaxed mb-8">
                          Thank you for reaching out. An Axtrait solutions architect will review your project brief and get back to you within 24 hours.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ name: "", email: "", telephone: "", subject: "", message: "" });
                          }}
                          className="px-6 py-3 rounded-full border border-[#0acd00] text-[#0acd00] hover:bg-[#0acd00] hover:text-black font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-all duration-200"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8">
                        {/* Name Field */}
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Name"
                            className="w-full bg-transparent border-b-2 border-zinc-700 focus:border-[#0acd00] pb-3 text-white font-['Montserrat'] text-sm sm:text-base placeholder:text-zinc-500 outline-none transition-colors"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email Address"
                            className="w-full bg-transparent border-b-2 border-zinc-700 focus:border-[#0acd00] pb-3 text-white font-['Montserrat'] text-sm sm:text-base placeholder:text-zinc-500 outline-none transition-colors"
                          />
                        </div>

                        {/* Telephone Field */}
                        <div className="relative">
                          <input
                            type="tel"
                            value={formData.telephone}
                            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                            placeholder="Telephone"
                            className="w-full bg-transparent border-b-2 border-zinc-700 focus:border-[#0acd00] pb-3 text-white font-['Montserrat'] text-sm sm:text-base placeholder:text-zinc-500 outline-none transition-colors"
                          />
                        </div>

                        {/* Subject Field */}
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="Subject"
                            className="w-full bg-transparent border-b-2 border-zinc-700 focus:border-[#0acd00] pb-3 text-white font-['Montserrat'] text-sm sm:text-base placeholder:text-zinc-500 outline-none transition-colors"
                          />
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                          <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Message"
                            className="w-full bg-transparent border-b-2 border-zinc-700 focus:border-[#0acd00] pb-3 text-white font-['Montserrat'] text-sm sm:text-base placeholder:text-zinc-500 outline-none transition-colors resize-y min-h-[100px]"
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-3">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#0acd00] bg-[#1f2128] hover:bg-[#0acd00] text-white hover:text-black font-['Montserrat'] font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 disabled:opacity-50"
                          >
                            <span>{isSubmitting ? "SENDING..." : "SUBMIT YOUR INQUIRY"}</span>
                            {!isSubmitting && <Send className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* ── RIGHT COLUMN: Info & Google Maps ("WE'RE HERE TO HELP.") ── */}
              <div className="lg:col-span-6 flex flex-col justify-between py-2 sm:py-4">
                <div>
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#0acd00] text-lg font-bold">✦</span>
                    <span className="font-['Montserrat'] text-xs font-bold uppercase tracking-widest text-zinc-900">
                      GET IN TOUCH
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="font-['Syne'] font-bold font-[700] text-4xl sm:text-5xl lg:text-[56px] text-zinc-950 tracking-tight leading-[1.06] mb-4">
                    We&apos;re Here To Help.
                  </h2>

                  {/* Description */}
                  <p className="font-['Montserrat'] text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
                    Whether you have a question, need assistance, or want to start a project, our team is ready to assist you. Reach out to us through any of the channels below, and we&apos;ll get back to you promptly.
                  </p>

                  {/* Section Title: OUR CONTACT INFORMATION Pill */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black text-white border border-[#0acd00] font-['Syne'] font-bold text-sm sm:text-base tracking-normal uppercase shadow-md">
                      <span className="text-[#0acd00] text-sm leading-none">✦</span>
                      <span>OUR CONTACT INFORMATION</span>
                    </div>
                  </div>

                  {/* 2x2 Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
                    {/* Item 1: EMAIL */}
                    <div>
                      <div className="font-['Montserrat'] text-xs font-extrabold text-zinc-950 uppercase tracking-wider mb-1">
                        EMAIL ADDRESS
                      </div>
                      <a
                        href="mailto:contact@axtrait.com"
                        className="font-['Montserrat'] text-sm font-bold text-[#0acd00] hover:underline"
                      >
                        contact@axtrait.com
                      </a>
                    </div>

                    {/* Item 2: PHONE */}
                    <div>
                      <div className="font-['Montserrat'] text-xs font-extrabold text-zinc-950 uppercase tracking-wider mb-1">
                        PHONE NUMBER
                      </div>
                      <a
                        href="tel:+15550192831"
                        className="font-['Montserrat'] text-sm font-bold text-[#0acd00] hover:underline"
                      >
                        +1 (555) 019-2831
                      </a>
                    </div>

                    {/* Item 3: OFFICE ADDRESS */}
                    <div>
                      <div className="font-['Montserrat'] text-xs font-extrabold text-zinc-950 uppercase tracking-wider mb-1">
                        OFFICE ADDRESS
                      </div>
                      <p className="font-['Montserrat'] text-sm font-medium text-zinc-700 leading-snug">
                        100 Tech Plaza, Suite 800, Innovation District, CA 94105
                      </p>
                    </div>

                    {/* Item 4: OFFICE HOURS */}
                    <div>
                      <div className="font-['Montserrat'] text-xs font-extrabold text-zinc-950 uppercase tracking-wider mb-1">
                        OFFICE HOURS
                      </div>
                      <p className="font-['Montserrat'] text-sm font-medium text-zinc-700 leading-snug">
                        Monday – Friday, 9:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed Box */}
                <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-sm relative group bg-zinc-100 mt-2">
                  <div className="relative h-[220px] sm:h-[240px] w-full">
                    <iframe
                      loading="lazy"
                      src="https://maps.google.com/maps?q=San%20Francisco%2C%20CA%2C%20USA&t=m&z=11&output=embed&iwloc=near"
                      title="Axtrait Headquarters Location"
                      aria-label="Axtrait Headquarters Location Map"
                      className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-zinc-200 text-zinc-800 text-xs font-bold font-['Montserrat'] flex items-center gap-1.5 shadow-sm pointer-events-none">
                      <MapPin className="w-3.5 h-3.5 text-[#0acd00]" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>

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
