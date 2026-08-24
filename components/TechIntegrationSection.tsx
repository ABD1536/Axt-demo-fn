"use client";

import React from "react";

interface TechItem {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const row1Items: TechItem[] = [
  {
    name: "Next.js",
    description: "High-performance React framework for enterprise web apps.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="#000000">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.836 18.068l-6.195-8.082v8.082H9.863V5.932h1.778l6.195 8.163V5.932h1.778v12.136h-1.778z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS engine for ultra-fast bespoke interfaces.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="#38bdf8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6-2.2-4.2-1.8-.913-.228-1.565-.89-2.288-1.624C16.336 4.982 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6-2.2-4.2-1.8-.913-.228-1.565-.89-2.288-1.624C7.536 12.182 6.175 12 3.201 12z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    description: "Strict typed JavaScript for robust and scalable codebases.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
        <rect width="24" height="24" rx="4" fill="#3178c6" />
        <path
          d="M11.5 10.5v1.8h-2.1V19H7.2v-6.7H5.1v-1.8h6.4zm8.2 2.7c-.2-.7-.6-1.3-1.2-1.8-.6-.4-1.3-.6-2.1-.6-1.1 0-2 .4-2.7 1.1-.7.7-1 1.7-1 2.8 0 1.2.3 2.1 1 2.8.7.7 1.6 1.1 2.7 1.1.8 0 1.5-.2 2.1-.6.6-.4 1-.9 1.2-1.6l-1.9-.6c-.2.5-.5.9-.9 1.1-.4.2-.9.3-1.4.3-.6 0-1.1-.2-1.5-.6-.4-.4-.6-1-.6-1.8h6.4c0-.4 0-.7-.1-.9zm-4.3-.3c0-.6.2-1 .5-1.3.3-.3.8-.5 1.3-.5.5 0 1 .2 1.3.5.3.3.5.7.5 1.3h-3.6z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    description: "Event-driven asynchronous I/O server runtime.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="#339933">
        <path d="M12 1.5l10 5.8v11.4l-10 5.8-10-5.8V7.3L12 1.5zm0 2.3L4 8.4v9.2l8 4.6 8-4.6V8.4l-8-4.6z" />
        <path d="M12 6.5l6 3.5v7l-6 3.5-6-3.5v-7l6-3.5z" fill="#68a063" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    description: "Powerful open-source object-relational database system.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="#336791">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    description: "Global edge deployment platform with instant scaling.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="#000000">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    ),
  },
];

const row2Items: TechItem[] = [
  {
    name: "ChatGPT / OpenAI",
    description: "Advanced AI integration for generative business automation.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="#10a37f">
        <path d="M22.28 9.9c-.27-1.98-1.57-3.66-3.44-4.46a7.84 7.84 0 00-6.12-.41 7.85 7.85 0 00-4.54-3.32 7.9 7.9 0 00-6.52 1.48A7.88 7.88 0 00.32 8.35a7.86 7.86 0 001.32 6.55 7.85 7.85 0 00-.4 6.13 7.9 7.9 0 003.32 4.54 7.88 7.88 0 006.52 1.48 7.86 7.86 0 005.16-2.91 7.85 7.85 0 006.04-1.32 7.88 7.88 0 004.54-3.32 7.9 7.9 0 001.48-6.52 7.86 7.86 0 00-2.02-3.08zm-8.8 11.8a5.87 5.87 0 01-4.2-.35l.2-.12 3.5-2.02a1 1 0 00.5-.87v-4.94l1.48.86v4.06a5.9 5.9 0 01-1.48 3.38zm-8.2-3.7a5.88 5.88 0 01-.75-4.14l.2.12 3.5 2.02a1 1 0 001 0l4.28-2.47v1.72l-3.52 2.03a5.9 5.9 0 01-4.71.72zm-2.08-8.2a5.88 5.88 0 013.45-2.43v4.25a1 1 0 00.5.87l4.28 2.47-1.48.86-3.52-2.03a5.9 5.9 0 01-3.23-3.99zm14.62 3.1l-4.28-2.47 1.48-.86 3.52 2.03a5.9 5.9 0 013.23 3.99 5.88 5.88 0 01-3.45 2.43v-4.25a1 1 0 00-.5-.87zm2.08 5.1a5.88 5.88 0 01.75 4.14l-.2-.12-3.5-2.02a1 1 0 00-1 0l-4.28 2.47v-1.72l3.52-2.03a5.9 5.9 0 014.71-.72zm-7.6-2.58l-1.92-1.11 1.92-1.11 1.92 1.11-1.92 1.11zm-2.3-4.26a5.87 5.87 0 014.2.35l-.2.12-3.5 2.02a1 1 0 00-.5.87v4.94l-1.48-.86v-4.06a5.9 5.9 0 011.48-3.38z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    description: "Collaborative cloud interface and UI/UX design suite.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0acf83" />
        <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#a259ff" />
        <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#f24e1e" />
        <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#ff7262" />
        <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1abcfe" />
      </svg>
    ),
  },
  {
    name: "GitLab",
    description: "Version control, CI/CD automation, and cloud repositories.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
        <path d="M23.6 9.57L21.3.43a.65.65 0 00-1.24 0L17.75 7.6H6.25L3.94.43a.65.65 0 00-1.24 0L.4 9.57a1.3 1.3 0 00.47 1.45L12 23.4l11.13-12.38a1.3 1.3 0 00.47-1.45z" fill="#e24329" />
        <path d="M12 23.4L6.25 7.6h11.5L12 23.4z" fill="#fc6d26" />
        <path d="M12 23.4L17.75 7.6h2.31L23.6 9.57a1.3 1.3 0 01-.47 1.45L12 23.4z" fill="#fca326" />
        <path d="M.4 9.57a1.3 1.3 0 00.47 1.45L12 23.4 6.25 7.6H3.94L.4 9.57z" fill="#fca326" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    description: "Seamless and secure global payment infrastructure.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
        <rect width="24" height="24" rx="6" fill="#635bff" />
        <path
          d="M13.9 10.1c0-.9-.7-1.3-1.9-1.3-1.3 0-2.8.5-4 .1.1-.9.6-1.7 1.4-2.1.8-.4 1.8-.6 2.8-.6 2.7 0 4.6 1.4 4.6 3.8 0 3.7-5.1 3.1-5.1 4.7 0 1 .9 1.3 2.1 1.3 1.6 0 3.3-.7 4.5-1.4l.1 2.3c-1.3.6-2.9.9-4.5.9-2.8 0-4.8-1.4-4.8-3.8-.1-4 5.2-3.3 5.2-4.8z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    name: "Apollo.io",
    description: "Automated data intelligence and B2B engagement engine.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
        <rect width="24" height="24" rx="6" fill="#111827" />
        <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2-4.5-4.4 6.2-.9L12 3z" fill="#0acd00" />
      </svg>
    ),
  },
  {
    name: "Slack",
    description: "Real-time collaborative team communication & webhooks.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A" />
        <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0" />
        <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" fill="#2EB67D" />
        <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D" />
        <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z" fill="#ECB22E" />
        <path d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E" />
      </svg>
    ),
  },
];

function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="w-[260px] sm:w-[280px] min-w-[260px] sm:min-w-[280px] max-w-[280px] h-[155px] sm:h-[165px] p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#1f2227] via-[#282c34] to-[#3a3f4a] border border-zinc-700/50 shadow-md hover:border-[#0acd00]/60 transition-all flex flex-col justify-start gap-2.5 shrink-0 group select-none">
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-2xl bg-white shadow-sm flex items-center justify-center p-2 border border-zinc-200 shrink-0 group-hover:scale-105 transition-transform">
          {item.icon}
        </div>
        <h3 className="text-base sm:text-[17px] font-bold font-['Syne'] text-white group-hover:text-[#0acd00] transition-colors leading-tight">
          {item.name}
        </h3>
      </div>
      <p className="text-zinc-300 text-xs sm:text-[13px] font-['Montserrat'] leading-relaxed font-normal">
        {item.description}
      </p>
    </div>
  );
}

export default function TechIntegrationSection() {
  const duplicatedRow1 = [...row1Items, ...row1Items, ...row1Items];
  const duplicatedRow2 = [...row2Items, ...row2Items, ...row2Items];

  return (
    <section
      className="w-full bg-white py-20 sm:py-24 px-4 overflow-hidden border-t border-zinc-200"
      aria-label="Our Technologies"
    >
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 text-center">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white border border-[#0acd00]/40 text-xs sm:text-[13px] font-bold uppercase tracking-widest font-['Montserrat'] mb-6 sm:mb-8 shadow-sm">
          <span className="text-[#0acd00]">✦</span>
          <span>OUR TECHNOLOGIES</span>
        </div>

        {/* Main Heading */}
        <h2 className="font-['Syne'] font-bold text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] text-zinc-950 text-center max-w-3xl mx-auto leading-[1.22] sm:leading-[1.2] tracking-tight">
          Effortless IT Integration For Modern Business.
        </h2>
      </div>

      {/* Dual Continuous Infinite Marquee Rows */}
      <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-[100vw]">
        {/* Row 1: Leftward Scrolling */}
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track-left">
            {duplicatedRow1.map((item, index) => (
              <TechCard key={`row1-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Scrolling */}
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track-right">
            {duplicatedRow2.map((item, index) => (
              <TechCard key={`row2-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
