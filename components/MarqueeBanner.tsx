"use client";

const brands = [
  {
    name: "Quizlet",
    svg: (
      <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="22" fill="#000000" letterSpacing="-0.5">
          Quizlet
        </text>
      </svg>
    ),
  },
  {
    name: "ROBLOX",
    svg: (
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="18" height="18" rx="3" transform="rotate(-12 11 15)" stroke="#000000" strokeWidth="3.5" fill="none" />
        <text x="28" y="23" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontSize="20" fill="#000000" letterSpacing="1">
          ROBLOX
        </text>
      </svg>
    ),
  },
  {
    name: "Jotform",
    svg: (
      <svg width="115" height="32" viewBox="0 0 115 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10L14 16L4 22V10Z" fill="#0acd00" />
        <path d="M12 6L22 12L12 18V6Z" fill="#000000" />
        <text x="28" y="22" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="19" fill="#000000">
          Jotform
        </text>
      </svg>
    ),
  },
  {
    name: "FORTER",
    svg: (
      <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="23" fontFamily="'Montserrat', sans-serif" fontWeight="800" fontSize="20" fill="#000000" letterSpacing="3">
          F O R T E R
        </text>
      </svg>
    ),
  },
  {
    name: "HSBC",
    svg: (
      <svg width="115" height="32" viewBox="0 0 115 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="8" width="16" height="16" fill="#0acd00" transform="rotate(45 10 16)" />
        <text x="28" y="23" fontFamily="'Montserrat', sans-serif" fontWeight="800" fontSize="20" fill="#000000" letterSpacing="1.5">
          HSBC
        </text>
      </svg>
    ),
  },
  {
    name: "The Guardian",
    svg: (
      <svg width="130" height="32" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="16" fontFamily="'Syne', serif" fontWeight="700" fontSize="14" fill="#000000">
          The
        </text>
        <text x="0" y="29" fontFamily="'Syne', serif" fontWeight="800" fontSize="16" fill="#000000">
          Guardian
        </text>
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" fontFamily="'Montserrat', sans-serif" fontWeight="800" fontSize="22" fill="#000000" letterSpacing="-0.5">
          stripe
        </text>
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg width="90" height="32" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontSize="20" fill="#000000" letterSpacing="1">
          aws
        </text>
        <path d="M5 26 Q 30 32 55 26" stroke="#0acd00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,24 20,7 30,24" fill="#000000" />
        <text x="36" y="22" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="18" fill="#000000">
          Vercel
        </text>
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg width="95" height="32" viewBox="0 0 95 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="11" r="4" fill="#000000" />
        <circle cx="16" cy="11" r="4" fill="#0acd00" />
        <circle cx="8" cy="19" r="4" fill="#000000" />
        <text x="26" y="22" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="19" fill="#000000">
          Figma
        </text>
      </svg>
    ),
  },
];

// Duplicate items for continuous seamless 60fps infinite marquee loop
const marqueeList = [...brands, ...brands, ...brands];

export default function MarqueeBanner() {
  return (
    <section className="partner-marquee-section" aria-label="Partner Brands">
      <div className="partner-marquee-container">
        
        {/* Section Heading with Green Highlighted Pill */}
        <h2 className="partner-marquee-title">
          <span>The Visionaries and </span>
          <span className="partner-badge-pill">Industry Leaders</span>
          <span> We&apos;ve</span>
          <br className="partner-title-br" />
          <span className="partner-title-line2">Proudly Partnered.</span>
        </h2>

        {/* Continuous Looping Logo Marquee */}
        <div className="partner-marquee-wrapper">
          <div className="partner-marquee-track">
            {marqueeList.map((brand, index) => (
              <div className="partner-logo-card" key={`${brand.name}-${index}`}>
                {brand.svg}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
