"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import Footer from "@/components/Footer";

const locations = [
  {
    city: "Global Headquarters",
    address: "100 Tech Plaza, Suite 800",
    region: "Innovation District, CA 94105",
    email: "contact@axtrait.com",
    phone: "+1 (555) 019-2831",
  },
  {
    city: "EMEA Regional Hub",
    address: "25 Financial Tower, Level 14",
    region: "Tech Square, London EC2A 1NT",
    email: "emea@axtrait.com",
    phone: "+44 20 7946 0912",
  },
];

const faqs = [
  {
    q: "What is the typical timeline for a project?",
    a: "Most projects range from 6-16 weeks depending on scope. We provide detailed milestones during scoping.",
  },
  {
    q: "What engagement models do you offer?",
    a: "We support both fixed-scope deliverable contracts and dedicated agile engineering pods.",
  },
  {
    q: "How do you handle IP and code ownership?",
    a: "You retain 100% intellectual property ownership of all custom code, assets, and infrastructure from day one.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.08], [0.96, 1]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
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
          className="relative z-10 min-h-screen bg-[#ffffff] shadow-[0_-30px_80px_rgba(0,0,0,0.95)] origin-top rounded-t-[40px] sm:rounded-t-[56px]"
        >
          {/* Partner Brands Marquee */}
          <MarqueeBanner />

          {/* Contact Section */}
          <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-bold uppercase tracking-wider text-[#0acd00] mb-4">
                ✦ Direct Communication
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight mb-4">
                Let&apos;s Build Something <span className="text-[#0acd00]">Extraordinary</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Whether you have a fully scoped project or need technical guidance, our engineers and product leads are here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Project Inquiry Form */}
              <div className="lg:col-span-7 bg-[#f7f7f7] border border-gray-200/80 rounded-3xl p-8 sm:p-12 shadow-sm">
                <h3 className="font-['Syne'] font-bold text-2xl text-black mb-2">Project Inquiry</h3>
                <p className="text-sm text-gray-500 mb-8">Fill out the brief below and our solutions team will respond within 24 hours.</p>

                {submitted ? (
                  <div className="bg-white border border-[#0acd00]/40 rounded-2xl p-8 text-center shadow-sm">
                    <div className="text-4xl mb-3">🎉</div>
                    <h4 className="font-['Syne'] font-bold text-xl text-black mb-2">Message Received</h4>
                    <p className="text-sm text-gray-600">
                      Thank you for reaching out! A senior tech lead will review your project requirements and schedule an introductory call.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-black outline-none focus:border-[#0acd00] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-black outline-none focus:border-[#0acd00] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="Company Inc."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-black outline-none focus:border-[#0acd00] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Primary Capability Needed</label>
                      <select
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 outline-none focus:border-[#0acd00] transition-colors"
                      >
                        <option>Web &amp; Mobile App Development</option>
                        <option>AI Integration &amp; Automation</option>
                        <option>Cloud Infrastructure &amp; DevOps</option>
                        <option>UI/UX Design &amp; Product Strategy</option>
                        <option>Custom Architecture Consulting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Project Overview &amp; Goals *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your project scope, target timeline, and goals..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-black outline-none focus:border-[#0acd00] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#000000] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full hover:bg-[#0acd00] hover:text-black transition-all duration-300 shadow-md"
                    >
                      Send Project Inquiry →
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Locations & Quick Info */}
              <div className="lg:col-span-5 space-y-6">
                {locations.map((loc) => (
                  <div
                    key={loc.city}
                    className="bg-[#f7f7f7] border border-gray-200/80 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="inline-block px-3 py-1 bg-black/5 border border-black/10 rounded-full text-xs font-semibold text-gray-700 mb-3">
                      📍 {loc.city}
                    </span>
                    <h4 className="font-['Syne'] font-bold text-lg text-black mb-1">{loc.address}</h4>
                    <p className="text-xs text-gray-500 mb-4">{loc.region}</p>
                    <div className="pt-3 border-t border-gray-200 flex flex-col gap-1.5 text-xs text-gray-600">
                      <div>✉️ {loc.email}</div>
                      <div>📞 {loc.phone}</div>
                    </div>
                  </div>
                ))}

                <div className="bg-[#000000] text-white rounded-2xl p-7 border border-white/10 shadow-lg">
                  <h4 className="font-['Syne'] font-bold text-lg text-white mb-4">Frequently Asked Questions</h4>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div key={faq.q}>
                        <div className="text-xs font-bold text-[#0acd00] mb-1">{faq.q}</div>
                        <div className="text-xs text-gray-400 leading-relaxed">{faq.a}</div>
                      </div>
                    ))}
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
