"use client";

import { useState } from "react";
import Image from "next/image";

interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  stars: number;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Axtrait rewrote the physics of our market entrance. The brand authority they generated functionally eliminated our competitors overnight. Completely staggering execution and attention to detail.",
    author: "Marcus Chen",
    role: "Director · Nexora Tech",
    avatar: "/images/avatar_1.jpg",
    stars: 5,
  },
  {
    id: 2,
    quote:
      "The sheer speed and quality of execution is staggering. Axtrait builds digital products that feel alive, intentional, and entirely unmatched across modern technical landscapes.",
    author: "Sophia Rossi",
    role: "CMO · Vertex Global",
    avatar: "/images/avatar_2.jpg",
    stars: 5,
  },
  {
    id: 3,
    quote:
      "From strategic wireframing to custom WebGL interfaces, Axtrait delivered an avant-garde experience that increased our conversion metrics by 340% within 30 days.",
    author: "Liam Vance",
    role: "Head of Product · FinTech Core",
    avatar: "/images/avatar_3.jpg",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const nextTestimonial = () => {
    setActiveTab((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTab((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const visibleTestimonials = [
    testimonialsData[activeTab],
    testimonialsData[(activeTab + 1) % testimonialsData.length],
  ];

  return (
    <section className="testimonials-white-section" aria-label="Client Testimonials">
      <div className="testimonials-white-container">
        {/* Section Header */}
        <div className="testimonials-header-row">
          <div className="testimonials-header-left">
            <div className="testimonials-badge-pill">
              <span className="badge-icon">✦</span>
              <span>TESTIMONIAL</span>
            </div>
            <h2 className="testimonials-title">
              The Best Clients Say <br className="hidden md:inline" />
              <span className="highlight-green">About Our Work</span>
            </h2>
          </div>

          <div className="testimonials-header-right">
            <div className="rating-num">4.8</div>
            <div className="rating-info">
              <div className="star-row" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <span className="review-count">(5k+) Customer Reviews</span>
            </div>
          </div>
        </div>

        {/* 3-Card Grid Row */}
        <div className="testimonials-cards-grid">
          {/* Card 1: Rotating Trusted Badge Card */}
          <div className="testimonial-badge-card">
            <div className="rotating-badge-wrapper">
              <svg viewBox="0 0 100 100" className="rotating-svg-text" aria-hidden="true">
                <path
                  id="circlePathTestimonial"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text className="rotating-text-content">
                  <textPath href="#circlePathTestimonial" startOffset="0%">
                    ✦ TRUSTED BY CLIENTS ✦ TRUSTED BY CLIENTS
                  </textPath>
                </text>
              </svg>
              <div className="quote-center-icon">
                <span aria-hidden="true">”</span>
              </div>
            </div>
          </div>

          {/* Card 2 & Card 3: Client Testimonial Cards */}
          {visibleTestimonials.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="testimonial-content-card">
              <div className="card-top-stars" aria-label="5 stars">
                ★★★★★
              </div>
              <blockquote className="testimonial-quote-text">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="testimonial-author-footer">
                <div className="author-left">
                  <div className="author-avatar-img">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="author-meta">
                    <h4 className="author-name">{item.author}</h4>
                    <p className="author-role">{item.role}</p>
                  </div>
                </div>

                {/* Arrow Controls on the right-most card */}
                {idx === 1 && (
                  <div className="slider-arrow-controls">
                    <button
                      onClick={prevTestimonial}
                      className="slider-arrow-btn"
                      aria-label="Previous testimonial"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="slider-arrow-btn"
                      aria-label="Next testimonial"
                    >
                      ›
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Review Banner */}
        <div className="review-banner-footer">
          <div className="review-banner-col">
            <span className="banner-sub">Our Clients</span>
            <h4 className="banner-title">Consistently Rated 4.8/5</h4>
          </div>

          <div className="review-banner-divider" aria-hidden="true" />

          <div className="review-banner-col">
            <div className="platform-logo-item">
              <div className="platform-icon google-icon">G</div>
              <div className="platform-text">
                <span className="platform-name">Google</span>
                <span className="platform-score">4.8/5 (102 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
