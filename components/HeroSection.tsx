"use client";

import Link from "next/link";
import Image from "next/image";

/* ── Geodesic Sphere SVG ──────────────────────────────────────────
   A 3D triangular-tessellated mesh sphere matching the reference visual.
──────────────────────────────────────────────────────────────── */
function GeodesicSphere() {
  const SIZE = 650;
  const CX = SIZE / 2;
  const CY = SIZE / 2;
  const R = SIZE * 0.45;

  const SIDE = 34;
  const H = SIDE * (Math.sqrt(3) / 2);

  const tris: string[] = [];
  const ROWS = Math.ceil((R * 2 + SIDE * 2) / H);
  const COLS = Math.ceil((R * 2 + SIDE * 2) / SIDE);

  for (let row = -ROWS; row <= ROWS; row++) {
    for (let col = -COLS; col <= COLS; col++) {
      const xOff = row % 2 === 0 ? 0 : SIDE / 2;
      const bx = CX - R + col * SIDE + xOff;
      const by = CY - R + row * H;

      const ux1 = bx, uy1 = by + H;
      const ux2 = bx + SIDE, uy2 = by + H;
      const ux3 = bx + SIDE / 2, uy3 = by;

      const dx1 = bx, dy1 = by;
      const dx2 = bx + SIDE, dy2 = by;
      const dx3 = bx + SIDE / 2, dy3 = by + H;

      tris.push(`${ux1},${uy1} ${ux2},${uy2} ${ux3},${uy3}`);
      tris.push(`${dx1},${dy1} ${dx2},${dy2} ${dx3},${dy3}`);
    }
  }

  const lightX = CX - R * 0.45;
  const lightY = CY - R * 0.5;

  function triangleFill(pts: string): string {
    const coords = pts.split(" ").map((p) => p.split(",").map(Number));
    const cx = (coords[0][0] + coords[1][0] + coords[2][0]) / 3;
    const cy = (coords[0][1] + coords[1][1] + coords[2][1]) / 3;
    const dist = Math.sqrt((cx - lightX) ** 2 + (cy - lightY) ** 2);
    const normalized = Math.max(0, 1 - dist / (R * 1.5));
    const g = Math.round(35 + normalized * 170);
    const r = Math.round(normalized * 10);
    return `rgb(${r},${g},0)`;
  }

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        <radialGradient id="sgFade" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="white" stopOpacity="1" />
          <stop offset="85%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="sphereFadeMask">
          <circle cx={CX} cy={CY} r={R} fill="url(#sgFade)" />
        </mask>
        <clipPath id="sphereClip">
          <circle cx={CX} cy={CY} r={R} />
        </clipPath>
        <radialGradient id="specular" cx="35%" cy="30%" r="45%">
          <stop offset="0%" stopColor="#0acd00" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#055000" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g clipPath="url(#sphereClip)" mask="url(#sphereFadeMask)">
        {tris.map((pts, i) => (
          <polygon
            key={i}
            points={pts}
            fill={triangleFill(pts)}
            stroke="#021200"
            strokeWidth="0.5"
          />
        ))}
      </g>

      <circle
        cx={CX}
        cy={CY}
        r={R}
        fill="url(#specular)"
        clipPath="url(#sphereClip)"
        mask="url(#sphereFadeMask)"
      />
    </svg>
  );
}

/* ── Hero Section Component ───────────────────────────────────── */
export default function HeroSection() {
  const cards = [
    { src: "/images/hero_card_1.jpg", alt: "Axtrait Creative Lead" },
    { src: "/images/hero_card_2.jpg", alt: "Axtrait Engineering Team" },
    { src: "/images/hero_card_3.jpg", alt: "Axtrait AI Avatar Studio" },
  ];

  return (
    <section className="hero-v2" id="hero" aria-label="Hero">
      {/* ── 3D Geodesic Mesh Sphere Background ──────────────────────── */}
      <div className="hero-v2-sphere" aria-hidden="true">
        <GeodesicSphere />
      </div>

      {/* ── Centered Hero Container ─────────────────────────────── */}
      <div className="hero-v2-inner hero-v2-centered">
        
        {/* 0. TOP BADGE: Star Icon + Tagline Pill */}
        <div className="hero-v2-badge">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#0acd00"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <span>DIGITAL &amp; IT AGENCY</span>
        </div>

        {/* 1. HEADLINE: Centered 2-Line Headline Text */}
        <h1 className="hero-v2-h1 hero-v2-h1-centered">
          <span className="hero-v2-block-text">PLUG INTO</span>
          <span className="hero-v2-block-text">INNOVATION</span>
        </h1>

        {/* 2. CTA Buttons */}
        <div className="hero-v2-btns hero-v2-btns-centered">
          <Link href="/contact" className="btn-pill-v2-primary" id="hero-lets-talk">
            <span>Let&apos;s Talk</span>
            <span className="btn-arrow red-arrow" aria-hidden="true">↗</span>
          </Link>

          <Link href="/work" className="btn-pill-v2-ghost" id="hero-view-work">
            <span>View Work</span>
            <span className="btn-arrow white-arrow" aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* 3. 3 Image Cards */}
        <div className="hero-v2-cards">
          {cards.map((card, i) => (
            <div key={i} className="hero-v2-card">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 30vw, 145px"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
