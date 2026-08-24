"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  return (
    <section
      className="w-full bg-[#000000] text-white py-20 lg:py-28 px-6 lg:px-16 overflow-hidden border-t border-[#1a1a1a]"
      aria-label="Why Choose Us"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ── Section Header ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 lg:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase font-['Montserrat'] mb-4 text-[#0acd00]">
            <span className="w-2 h-2 rounded-full bg-[#0acd00] inline-block animate-pulse" />
            <span>WHY CHOOSE US</span>
          </div>

          {/* Main Full-Width Headline in Syne font with clean line spacing */}
          <h2 className="font-['Syne'] font-bold text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] leading-tight tracking-tight max-w-5xl">
            <span className="text-white block">
              Turning Modern Ideas Into
            </span>
            <span className="text-white block mt-2.5 sm:mt-3.5">
              High-Impact Global Success.
            </span>
          </h2>
        </motion.div>

        {/* ── Two Column Content Grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Boardroom Collaboration Photo with White Border (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-5 rounded-[28px] sm:rounded-[32px] overflow-hidden relative h-[420px] sm:h-[480px] lg:h-full min-h-[420px] border-2 sm:border-[3px] border-white shadow-2xl group bg-[#0a0a0a]"
          >
            <Image
              src="/images/why_choose_meeting.jpg"
              alt="Axtrait team in boardroom collaboration meeting"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Column: Description + CTA + 3 Stat/Art Cards (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Top Text & CTA */}
            <div>
              <p className="text-zinc-400 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-xl font-['Montserrat']">
                We help ambitious brands break boundaries with bold design and smart strategies. Our creative team is driven by innovation and fueled by passion, delivering solutions that capture attention and drive growth. Whether you&apos;re a startup or an established business, we bring your vision to life.
              </p>

              {/* Let's Talk CTA Button */}
              <div className="mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 pl-7 pr-2 py-2 rounded-full border border-white/20 bg-black text-white font-bold text-sm hover:border-[#0acd00] hover:text-[#0acd00] transition-all duration-300 font-['Montserrat'] group shadow-lg"
                >
                  <span>Let&apos;s Talk</span>
                  <span className="w-10 h-10 rounded-full bg-[#0acd00] text-black flex items-center justify-center font-extrabold text-lg group-hover:scale-105 transition-transform">
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            {/* Bottom 3 Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-stretch mt-4">
              
              {/* Card 1: Corporate Stat Card */}
              <div className="sm:col-span-5 bg-[#FDF9F3] text-black rounded-[24px] p-6 sm:p-7 flex flex-col justify-between min-h-[220px] shadow-lg border border-zinc-200/50 hover:translate-y-[-4px] transition-transform duration-300">
                <span className="text-zinc-900 font-bold text-sm font-['Montserrat']">
                  Corporate
                </span>
                <div className="font-['Syne'] font-extrabold text-4xl sm:text-5xl text-[#0acd00] my-2 leading-none">
                  80+
                </div>
                <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed font-['Montserrat'] font-medium">
                  We provide innovative and reliable solutions.
                </p>
              </div>

              {/* Card 2: Business Stat Card */}
              <div className="sm:col-span-5 bg-[#FDF9F3] text-black rounded-[24px] p-6 sm:p-7 flex flex-col justify-between min-h-[220px] shadow-lg border border-zinc-200/50 hover:translate-y-[-4px] transition-transform duration-300">
                <span className="text-zinc-900 font-bold text-sm font-['Montserrat']">
                  Business
                </span>
                <div className="font-['Syne'] font-extrabold text-4xl sm:text-5xl text-[#0acd00] my-2 leading-none">
                  100%
                </div>
                <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed font-['Montserrat'] font-medium">
                  We provide innovative and reliable solutions.
                </p>
              </div>

              {/* Card 3: Slim 3D Abstract Artwork Thumbnail */}
              <div className="sm:col-span-2 rounded-[24px] overflow-hidden relative min-h-[220px] h-full border border-white/10 shadow-lg group bg-[#0a0a0a]">
                <Image
                  src="/images/why_choose_abstract.jpg"
                  alt="Axtrait 3D Abstract Cubist Art Figure"
                  fill
                  sizes="160px"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
