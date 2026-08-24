"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCraftingSection() {
  const avatars = [
    "/images/avatar_1.jpg",
    "/images/avatar_2.jpg",
    "/images/avatar_3.jpg",
    "/images/team_2.jpg",
  ];

  return (
    <section
      className="w-full bg-white text-zinc-900 pt-16 sm:pt-24 pb-8 sm:pb-12 px-6 lg:px-12 overflow-hidden rounded-t-[40px] sm:rounded-t-[56px]"
      aria-label="Where Innovation Meets Digital Excellence"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── 1. Top Section Header ──────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          
          {/* Left: Eyebrow + 2-Line Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Eyebrow Rounded Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white border border-[#0acd00]/40 text-xs sm:text-[13px] font-bold uppercase tracking-wider font-['Montserrat'] mb-4 shadow-sm">
              <span className="text-[#0acd00] text-xs">✦</span>
              <span>Award Winning Digital Agency</span>
            </div>

            {/* Main Headline (Increased Size) */}
            <h2 className="font-['Syne'] font-bold text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] leading-[1.08] tracking-tight">
              <span className="text-zinc-950 block">Where Innovation Meets</span>
              <span className="text-[#0acd00] block mt-1.5 sm:mt-2.5">Digital Excellence</span>
            </h2>
          </motion.div>

          {/* Right: Mini Chart Icon + Rotating "Hire Us" Circular Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex items-center gap-6 self-start lg:self-end"
          >
            {/* Mini Activity Chart Bars Icon */}
            <div className="hidden sm:flex items-end gap-1.5 h-8 px-2 py-1" aria-hidden="true">
              <div className="w-1.5 h-3 bg-[#0acd00]/40 rounded-full" />
              <div className="w-1.5 h-6 bg-[#0acd00] rounded-full" />
              <div className="w-1.5 h-4 bg-zinc-300 rounded-full" />
              <div className="w-1.5 h-7 bg-zinc-900 rounded-full" />
            </div>

            {/* Rotating Circular Hire Us Badge */}
            <Link
              href="/contact"
              aria-label="Hire Us - Get in touch with Axtrait"
              className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center group flex-shrink-0"
            >
              {/* Rotating Circular Text SVG */}
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full" overflow="visible">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] font-bold font-['Montserrat'] uppercase tracking-[2.6px] fill-zinc-800 group-hover:fill-[#0acd00] transition-colors">
                    <textPath href="#circlePath" startOffset="0%">
                      HIRE US • HIRE US • HIRE US •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Circle Button with Arrow */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-zinc-950 group-hover:bg-[#0acd00] text-white group-hover:text-black flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 z-10">
                <svg
                  width="18"
                  height="18"
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
            </Link>
          </motion.div>

        </div>

        {/* ── 2. Middle Content Row: Stats + Paragraph ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 pt-8 border-t border-zinc-100">
          
          {/* Left: 2 Enlarged Stats Columns in Syne font (lg:col-span-5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-10">
            {/* Stat 1 */}
            <div>
              <div className="font-['Syne'] font-extrabold text-4xl sm:text-5xl lg:text-[50px] xl:text-[54px] text-zinc-950 leading-none mb-2.5 tracking-tight">
                950+
              </div>
              <p className="font-['Montserrat'] text-zinc-500 text-xs sm:text-sm font-medium leading-snug">
                Projects Completed
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="font-['Syne'] font-extrabold text-4xl sm:text-5xl lg:text-[50px] xl:text-[54px] text-zinc-950 leading-none mb-2.5 tracking-tight">
                18+
              </div>
              <p className="font-['Montserrat'] text-zinc-500 text-xs sm:text-sm font-medium leading-snug">
                Years Of Experience
              </p>
            </div>
          </div>

          {/* Right: Paragraph (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <p className="font-['Montserrat'] text-zinc-600 text-sm sm:text-base leading-relaxed">
              We help ambitious brands break boundaries with bold design, high-performance technology, and smart digital strategies. Our team is driven by engineering precision, delivering software and branding solutions that capture market attention and drive sustained commercial growth.
            </p>
          </div>

        </div>

        {/* ── 3. Bottom Visuals: Large Showcase Card + Portrait Image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: Large Visual / Interactive Media Card (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 rounded-[28px] sm:rounded-[36px] bg-[#0d0d0f] text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl min-h-[420px] sm:min-h-[460px] flex flex-col justify-between border border-zinc-800 group"
          >
            {/* Background Decorative Curves and Circles */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {/* Green Glow Ambient Blob */}
              <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#0acd00]/10 rounded-full blur-[100px]" />
              
              {/* Floating Solid Dot */}
              <div className="absolute top-12 left-1/2 w-4 h-4 rounded-full bg-zinc-600" />
              
              {/* Floating Hollow Circle */}
              <div className="absolute top-1/2 right-12 w-8 h-8 rounded-full border border-zinc-700/80" />
              
              {/* Curved Glowing Arc Line SVG */}
              <svg
                viewBox="0 0 500 300"
                className="absolute inset-0 w-full h-full opacity-30 stroke-[#0acd00]"
                fill="none"
              >
                <path
                  d="M 50,260 Q 250,50 480,180"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* Top Spacer */}
            <div className="relative z-10 flex justify-end">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#0acd00] px-3 py-1 rounded-full bg-[#0acd00]/10 border border-[#0acd00]/20">
                ✦ Studio Reel
              </span>
            </div>

            {/* Center Brand / Play Emblem */}
            <div className="relative z-10 my-auto text-center py-8">
              <div className="inline-flex items-center justify-center gap-3">
                <span className="font-['Syne'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                  Axtrait
                </span>
                <span className="w-3 h-3 rounded-full bg-[#0acd00] shadow-[0_0_12px_#0acd00] animate-pulse" />
              </div>
              <p className="font-['Montserrat'] text-zinc-400 text-xs sm:text-sm mt-3 max-w-sm mx-auto font-medium">
                Enterprise Design Systems &amp; Autonomous AI Engineering
              </p>
            </div>

            {/* Bottom Docked Rating & Customer Avatars Pill */}
            <div className="relative z-10 flex justify-center pt-4">
              <div className="bg-black/90 backdrop-blur-xl border border-white/15 rounded-full px-5 py-2.5 flex items-center gap-4 shadow-2xl hover:border-[#0acd00]/50 transition-colors">
                {/* Overlapping Avatar Stack */}
                <div className="flex items-center">
                  {avatars.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-black -ml-2 first:ml-0 bg-zinc-800"
                    >
                      <Image
                        src={avatar}
                        alt="Axtrait Customer Reviewer"
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Rating Number & Text */}
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-[#0acd00] text-xs">★</span>
                    <span className="font-['Syne'] font-extrabold text-sm text-white">4.8 Star</span>
                  </div>
                  <div className="font-['Montserrat'] text-[11px] text-zinc-400 font-medium leading-none">
                    Rating
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Team Portrait Collaboration Image Card (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 rounded-[28px] sm:rounded-[36px] overflow-hidden relative min-h-[420px] sm:min-h-[460px] h-full shadow-2xl border border-zinc-200 group bg-zinc-100"
          >
            <Image
              src="/images/about_innovation_team.jpg"
              alt="Axtrait digital agency team in strategic session"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle bottom shadow vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
