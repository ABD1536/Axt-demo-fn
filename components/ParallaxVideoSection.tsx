"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ParallaxVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section is within the viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Parallax range shift from -40px to +40px
        const shift = (progress - 0.5) * 80;
        setOffsetY(shift);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="parallax-section" aria-label="Axtrait Promotional Video">
      <div className="parallax-container" ref={sectionRef}>
        
        {/* Parallax Background Image Container */}
        <div
          className="parallax-img-wrapper"
          style={{ transform: `translate3d(0, ${offsetY}px, 0)` }}
        >
          <Image
            src="/images/parallax_office.jpg"
            alt="Axtrait Digital Workspace Office"
            fill
            className="parallax-bg-img"
            priority
          />
          {/* Subtle dark overlay for contrast */}
          <div className="parallax-overlay" />
        </div>

        {/* Center: 360-Degree Rotating Badge & Play Button */}
        <div className="parallax-center-badge">
          <button className="parallax-play-btn" aria-label="Play Promotional Video">
            
            {/* SVG Circular Rotating Text Ring */}
            <svg
              className="parallax-text-ring"
              viewBox="0 0 160 160"
              width="160"
              height="160"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
              </defs>
              <text fill="#ffffff" fontSize="10.5" fontWeight="700" letterSpacing="2.2" fontFamily="'Montserrat', sans-serif">
                <textPath href="#circlePath" startOffset="0%">
                  PLAY OUR PROMOTIONAL VIDEO • AXTRAIT DIGITAL •
                </textPath>
              </text>
            </svg>

            {/* Inner Play Icon Circle with Neon Green Accent */}
            <div className="parallax-play-icon-box">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 10.134a1 1 0 010 1.732l-15 8.66A1 1 0 012 19.66V2.34a1 1 0 011.5-.866l15 8.66z"
                  fill="#0acd00"
                />
              </svg>
            </div>

          </button>
        </div>

        {/* Floating Stat Badge (Bottom-Left) */}
        <div className="parallax-stat-card">
          <span className="parallax-stat-label">Business Increase</span>
          <strong className="parallax-stat-value">3X</strong>
        </div>

      </div>
    </section>
  );
}
