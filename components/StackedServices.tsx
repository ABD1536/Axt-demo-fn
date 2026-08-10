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
  zIndex: number;
}

const serviceCards: ServiceCardData[] = [
  {
    id: "web-app-dev",
    badge: "[WEB & APP DEVELOPMENT]",
    title: "CUSTOM WEB & NATIVE APP DEVELOPMENT",
    description:
      "High-performance web applications, scalable enterprise platforms, and native iOS/Android solutions engineered with modern Next.js, TypeScript, and high-availability cloud architectures.",
    image: "/images/stacked_service_1.jpg",
    href: "/services#web-app",
    topOffset: 90,
    zIndex: 10,
  },
  {
    id: "ai-automation",
    badge: "[AI & AUTOMATION INTEGRATION]",
    title: "INTELLIGENT AI AUTOMATION & AGENTS",
    description:
      "Empowering B2B operations with custom LLM integrations, automated data pipelines, computer vision models, and autonomous AI agents designed for seamless business workflow optimization.",
    image: "/images/stacked_service_2.jpg",
    href: "/services#ai",
    topOffset: 135,
    zIndex: 20,
  },
  {
    id: "ui-ux-design",
    badge: "[UI/UX & PRODUCT DESIGN]",
    title: "STRATEGIC UI/UX & BRAND DESIGN",
    description:
      "User-centered digital product design, interactive wireframing, high-converting design systems, and avant-garde visual architectures built for maximum conversion and brand distinction.",
    image: "/images/stacked_service_3.jpg",
    href: "/services#design",
    topOffset: 180,
    zIndex: 30,
  },
  {
    id: "enterprise-it",
    badge: "[CUSTOM IT & B2B SOLUTIONS]",
    title: "ENTERPRISE IT & CLOUD INFRASTRUCTURE",
    description:
      "Robust cloud infrastructure setup, WebGL 3D visualizations, enterprise cybersecurity protocols, and high-frequency database optimization built for enterprise scaling.",
    image: "/images/stacked_service_4.jpg",
    href: "/services#infrastructure",
    topOffset: 225,
    zIndex: 40,
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
                zIndex: card.zIndex,
              }}
            >
              <div className="stacked-card-box">
                {/* Top Card Deck Tab Header Bar */}
                <div className="stacked-card-tab-bar">
                  <div className="tab-left">
                    <span className="tab-index">0{index + 1}</span>
                    <span className="tab-divider">•</span>
                    <span className="tab-badge">{card.badge}</span>
                  </div>
                  <div className="tab-right">
                    <span className="tab-status-dot" aria-hidden="true" />
                    <span className="tab-status-text">SERVICE 0{index + 1}</span>
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
