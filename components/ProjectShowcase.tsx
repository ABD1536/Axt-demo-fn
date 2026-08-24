"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Market Expansion",
    year: "[ 2026 ]",
    tags: ["Consulting", "Business"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Creative Campaign",
    year: "[ 2026 ]",
    tags: ["Branding", "Direct"],
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Product Innovation",
    year: "[ 2026 ]",
    tags: ["Consulting", "Business"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Brand Strategy",
    year: "[ 2026 ]",
    tags: ["Consulting", "Business"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  },
];

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

interface Project {
  id: number;
  title: string;
  year: string;
  tags: string[];
  image: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const isEven = index % 2 === 1;
  const initialRotate = isEven ? 18 : -18;

  const rotateZ = useTransform(scrollYProgress, [0, 1], [initialRotate, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateZ, scale, opacity }}
      className="group relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-black shadow-2xl cursor-pointer w-full h-[420px] sm:h-[500px]"
    >
      {/* Full Image covering 100% of the card */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Center Brand Green Hover Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
        <div className="w-16 h-16 rounded-2xl bg-[#0acd00] text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
          <ArrowUpRight className="w-8 h-8" />
        </div>
      </div>

      {/* Floating Grey Gradient Glass Overlay */}
      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 px-6 py-5 sm:px-7 sm:py-6 rounded-[22px] bg-gradient-to-b from-zinc-700/70 via-zinc-800/80 to-zinc-900/90 backdrop-blur-xl border border-white/20 shadow-2xl z-10 flex flex-col justify-center gap-3">
        <div className="flex items-center justify-between gap-4 w-full">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-syne m-0 leading-tight">
            {project.title}
          </h3>
          <span className="text-xs sm:text-sm font-mono text-gray-300 shrink-0">
            {project.year}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-medium font-['Montserrat'] px-3.5 py-1.5 rounded-full bg-[#0acd00] text-white shadow-sm leading-none"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const titleScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.85]);
  const titleOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.2]);

  return (
    <section ref={containerRef} className="psc-section bg-[#ffffff]">
      {/* Title Block */}
      <div className="psc-header">
        <motion.div style={{ scale: titleScale, opacity: titleOpacity }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0acd00] text-white text-xs sm:text-[13px] font-medium uppercase tracking-wider font-['Montserrat'] mb-4 shadow-sm">
            <span className="text-white text-xs">✦</span>
            <span>Completed Projects</span>
          </div>
          <h2 className="psc-title">
            <span className="psc-title-line1">Project</span>
            <span className="psc-title-line2">Showcase</span>
          </h2>
        </motion.div>
      </div>

      {/* 2-Column Aligned Cards Grid */}
      <div className="psc-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="flex justify-center items-center mt-10 sm:mt-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-4 pl-7 pr-2 py-2 rounded-full bg-black text-white font-medium text-sm sm:text-[15px] hover:bg-[#0acd00] hover:text-black transition-all duration-300 shadow-xl font-['Montserrat'] group"
        >
          <span className="font-medium tracking-tight">View All Projects</span>
          <span className="w-10 h-10 rounded-full bg-[#0acd00] text-black group-hover:bg-black group-hover:text-white flex items-center justify-center font-extrabold text-lg group-hover:scale-105 transition-all">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
