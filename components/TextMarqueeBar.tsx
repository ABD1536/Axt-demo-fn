"use client";

import React from "react";

const keywords = [
  "Innovation",
  "Transform",
  "Design",
  "Create",
  "Empower",
  "Scale",
  "Engineer",
  "Accelerate",
];

function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block flex-shrink-0 mx-6 sm:mx-8"
      aria-hidden="true"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

function KeywordTrack() {
  return (
    <div className="flex items-center shrink-0">
      {keywords.map((word, index) => (
        <div key={`${word}-${index}`} className="inline-flex items-center shrink-0">
          <span className="font-['Syne'] font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-white drop-shadow-sm">
            {word}
          </span>
          <StarIcon />
        </div>
      ))}
    </div>
  );
}

export default function TextMarqueeBar() {
  return (
    <section
      className="w-full bg-[#0acd00] text-white py-4 sm:py-5 lg:py-6 overflow-hidden select-none border-y border-black/10"
      aria-label="Core Competencies Marquee"
    >
      <div className="w-full overflow-hidden flex">
        {/* Track Container moving at a very slow, graceful pace */}
        <div
          className="flex flex-nowrap shrink-0 items-center w-max hover:[animation-play-state:paused]"
          style={{
            animation: "axtraitSlowScroll 75s linear infinite",
          }}
        >
          <KeywordTrack />
          <KeywordTrack />
          <KeywordTrack />
          <KeywordTrack />
        </div>
      </div>

      <style jsx global>{`
        @keyframes axtraitSlowScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
