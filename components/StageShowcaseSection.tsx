"use client";

import Image from "next/image";

const stages = [
  {
    title: "WEB DEVELOPMENT",
    image: "/images/stage_1.jpg",
    alt: "Axtrait Web Development",
  },
  {
    title: "AI AUTOMATION",
    image: "/images/stage_2.jpg",
    alt: "Axtrait AI Automation",
  },
  {
    title: "LEAD GENERATION",
    image: "/images/stage_3.jpg",
    alt: "Axtrait Lead Generation",
  },
  {
    title: "APP DEVELOPMENT",
    image: "/images/stage_4.jpg",
    alt: "Axtrait App Development",
  },
];

export default function StageShowcaseSection() {
  return (
    <section className="stage-showcase-section" id="stages" aria-label="Our Stages">
      <div className="stage-showcase-container">
        
        {/* Top Tag: {01} */}
        <div className="stage-tag-badge" aria-hidden="true">
          <span>&#123;01&#125;</span>
        </div>

        {/* Headline: PREMIUM QUALITY AT EVERY STAGE */}
        <h2 className="stage-showcase-h2">
          <span className="stage-block">PREMIUM QUALITY AT</span>
          <span className="stage-block">EVERY STAGE</span>
        </h2>

        {/* 4 Cards Grid */}
        <div className="stage-cards-grid">
          {stages.map((stage, i) => (
            <div className="stage-card" key={i}>
              <div className="stage-card-img-wrapper">
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                  style={{ objectFit: "cover" }}
                  priority={i < 2}
                />
              </div>

              {/* Bottom White Pill Badge with Green Dot */}
              <div className="stage-card-pill">
                <span className="stage-pill-dot" />
                <span className="stage-pill-text">{stage.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
