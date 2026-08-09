"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-section" aria-label="About Axtrait">
      <div className="about-container">
        
        {/* Top Header Row */}
        <div className="about-top-row">
          
          {/* Left: Overlapping Avatars & Trust Metric */}
          <div className="about-left-widget">
            <div className="about-avatars-stack">
              <div className="about-avatar-item">
                <Image
                  src="/images/avatar_1.jpg"
                  alt="Client portrait 1"
                  width={48}
                  height={48}
                  className="about-avatar-img"
                />
              </div>
              <div className="about-avatar-item">
                <Image
                  src="/images/avatar_2.jpg"
                  alt="Client portrait 2"
                  width={48}
                  height={48}
                  className="about-avatar-img"
                />
              </div>
              <div className="about-avatar-item">
                <Image
                  src="/images/avatar_3.jpg"
                  alt="Client portrait 3"
                  width={48}
                  height={48}
                  className="about-avatar-img"
                />
              </div>
            </div>
            <div className="about-trust-text">
              <strong className="about-trust-number">Join 5,000+</strong>
              <span className="about-trust-label">satisfied members</span>
            </div>
          </div>

          {/* Right: Category Badge & Big Typography Headline */}
          <div className="about-right-headline">
            <div className="about-badge">
              <span className="about-badge-icon">✦</span>
              <span className="about-badge-text">About us</span>
            </div>

            <h2 className="about-main-title">
              Axtrait Is A Creative Studio Based In London We Think Like An Agency And Produce Like A Visuals For Brands &amp; Agencies.
            </h2>
          </div>

        </div>

        {/* Divider Line */}
        <hr className="about-divider" />

        {/* Bottom Content Grid */}
        <div className="about-bottom-grid">
          
          {/* Left Box: Big Metric Stat */}
          <div className="about-stat-box">
            <div className="about-stat-number">
              10<span className="about-stat-plus">+</span>
            </div>
            <p className="about-stat-desc">
              Trusted Experience Built on Successful Projects.
            </p>
          </div>

          {/* Center Box: Sci-Fi Futuristic City Concept Asset */}
          <div className="about-3d-box">
            <div className="about-3d-wrapper">
              <Image
                src="/images/about_future_city.png"
                alt="Futuristic Sci-Fi City Concept"
                width={420}
                height={320}
                className="about-3d-img"
              />
            </div>
          </div>

          {/* Right Box: Narrative Paragraph & Black/Neon CTA Button */}
          <div className="about-narrative-box">
            <h3 className="about-narrative-subtitle">
              Bold Designs, Boundless Imagination
            </h3>
            <p className="about-narrative-para">
              We help ambitious brands break boundaries with bold design and smart
              strategies. Our creative team is driven by innovation and fueled by
              passion, delivering solutions that capture attention and drive growth.
              Whether you&apos;re a startup or an established business, we bring your
              vision to life.
            </p>

            <a href="#contact" className="about-cta-btn">
              <span className="about-cta-text">Know More Us</span>
              <span className="about-cta-icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.75 12.25L12.25 1.75M12.25 1.75H3.5M12.25 1.75V10.5"
                    stroke="#000000"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
