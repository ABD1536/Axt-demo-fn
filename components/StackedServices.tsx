"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceCardData {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  href: string;
  topOffset: number;
}

const serviceCards: ServiceCardData[] = [
  {
    id: "web-development",
    badge: "[WEB DEVELOPMENT]",
    title: "CUSTOM WEB DEVELOPMENT",
    description:
      "High-performance web applications, scalable enterprise platforms, and native web solutions engineered with modern Next.js, TypeScript, and high-availability cloud architectures.",
    image: "/images/stacked_service_1.jpg",
    href: "/services#web-dev",
    topOffset: 100,
  },
  {
    id: "lead-generation",
    badge: "[LEAD GENERATION]",
    title: "B2B LEAD GENERATION & GROWTH",
    description:
      "Targeted data acquisition, high-converting outbound strategies, and automated funnel optimization designed to flood your sales pipeline with qualified B2B prospects.",
    image: "/images/stacked_service_2.jpg",
    href: "/services#lead-gen",
    topOffset: 145,
  },
  {
    id: "crm-solutions",
    badge: "[CRM SOLUTIONS]",
    title: "ENTERPRISE CRM & WORKFLOW SOLUTIONS",
    description:
      "Custom CRM architectures, seamless third-party API integrations, sales pipeline tracking, and client management systems tailored for maximum operational efficiency.",
    image: "/images/stacked_service_3.jpg",
    href: "/services#crm",
    topOffset: 190,
  },
  {
    id: "ai-automation",
    badge: "[AI & AUTOMATION]",
    title: "INTELLIGENT AI & AUTOMATION AGENTS",
    description:
      "Empowering B2B operations with custom LLM integrations, automated data workflows, computer vision models, and autonomous AI agents designed for business scaling.",
    image: "/images/stacked_service_4.jpg",
    href: "/services#ai",
    topOffset: 235,
  },
];

export default function StackedServices() {
  return (
    <section className="stacked-services-section" aria-label="Axtrait Services Stack Deck">
      <div className="stacked-services-container">
        {/* Section Header */}
        <div className="stacked-services-header">
          <div className="stacked-header-badge">
            <span className="badge-star">✦</span>
            <span>OUR CORE SERVICES</span>
          </div>
          <h2 className="stacked-header-title">
            SOLUTIONS ENGINEERED FOR <span className="highlight-text">GROWTH</span>
          </h2>
        </div>

        {/* Stacked Card Deck List */}
        <div className="stacked-cards-list">
          {serviceCards.map((card, index) => (
            <div
              key={card.id}
              className="stacked-card-item"
              style={{
                position: "sticky",
                top: `${card.topOffset}px`,
                zIndex: (index + 1) * 10,
              }}
            >
              <div className="stacked-card-box">
                {/* Top Deck Header Tab Bar */}
                <div className="stacked-card-tab-bar">
                  <div className="tab-left">
                    <span className="tab-index">0{index + 1}</span>
                    <span className="tab-divider">•</span>
                    <span className="tab-badge">{card.badge}</span>
                  </div>
                  <div className="tab-right">
                    <span className="tab-status-dot" aria-hidden="true" />
                    <span className="tab-status-text">CARD 0{index + 1} OF 0{serviceCards.length}</span>
                  </div>
                </div>

                <div className="stacked-card-inner">
                  {/* Left Column: Image Media */}
                  <div className="stacked-card-media">
                    <div className="stacked-image-wrapper">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="stacked-card-img"
                      />
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="stacked-card-content">
                    <h3 className="stacked-card-title">{card.title}</h3>
                    <p className="stacked-card-desc">{card.description}</p>
                    
                    <Link href={card.href} className="stacked-card-btn">
                      <span>EXPLORE SERVICE</span>
                      <span className="btn-arrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
