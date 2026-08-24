"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "DISCOVERY",
    description:
      "We begin every engagement with a deep-dive strategy sprint — understanding your market, your competition, and exactly where the unfair leverage lives.",
  },
  {
    number: "02",
    title: "ARCHITECTURE",
    description:
      "We design the system before we build it. Brand identity, conversion logic, technical stack — every decision is deliberate and outcome-driven.",
  },
  {
    number: "03",
    title: "ENGINEERING",
    description:
      "Zero templates. We build bespoke, performance-optimized digital platforms in Next.js, Shopify Plus, or whatever infrastructure your growth demands.",
  },
  {
    number: "04",
    title: "LAUNCH & SCALE",
    description:
      "We don't disappear after launch. We monitor, iterate, and optimize — turning your digital infrastructure into a compounding growth machine.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section
      className="w-full bg-white text-zinc-900 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 px-6 lg:px-12 overflow-hidden border-b border-zinc-100"
      aria-label="How We Work Process"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 sm:mb-10 lg:mb-12"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase font-['Montserrat'] mb-2.5 sm:mb-3 text-[#0acd00]">
            <span>✦</span>
            <span>HOW WE WORK</span>
          </div>

          {/* Headline with font-weight 700 and clean line gap */}
          <h2 className="font-['Syne'] font-bold text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] leading-tight tracking-tight max-w-3xl">
            <span className="text-zinc-950 block">Four Steps To</span>
            <span className="text-[#0acd00] block mt-1 sm:mt-1.5">Market Dominance.</span>
          </h2>
        </motion.div>

        {/* 2-Up 2-Down Grid (2 Columns, 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              className="bg-[#0a0a0c] text-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-[#0acd00]/50 shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[290px] sm:min-h-[310px] group"
            >
              <div>
                {/* Extra Large Green Stroke Number */}
                <div
                  className="font-['Syne'] font-bold text-5xl sm:text-6xl lg:text-[72px] leading-none text-transparent mb-3.5 tracking-tighter select-none"
                  style={{
                    WebkitTextStroke: "2px #0acd00",
                  }}
                >
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="font-['Syne'] font-extrabold text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] text-white uppercase tracking-wider mb-2.5 group-hover:text-[#0acd00] transition-colors leading-[1.15]">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="font-['Montserrat'] text-zinc-400 text-sm sm:text-[14.5px] leading-relaxed font-normal max-w-xl">
                  {step.description}
                </p>
              </div>

              {/* Bottom Arrow Button */}
              <div className="pt-5">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 group-hover:border-[#0acd00] group-hover:bg-[#0acd00] group-hover:text-black transition-all duration-300 shadow-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
