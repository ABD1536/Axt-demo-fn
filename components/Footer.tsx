"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="pixgro-footer-section" role="contentinfo">
      <div className="pixgro-footer-outer-card">
        {/* Main Footer Content Row */}
        <div className="pixgro-footer-grid">
          {/* Left Navigation Columns */}
          <div className="pixgro-left-columns">
            {/* Column 1: MENUS */}
            <div className="pixgro-col">
              <h4 className="pixgro-col-title">MENUS</h4>
              <ul className="pixgro-link-list">
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/about">ABOUT US</Link></li>
                <li><Link href="/work">PROJECTS</Link></li>
                <li><Link href="/services">SERVICE</Link></li>
                <li><Link href="/contact">CONTACT</Link></li>
              </ul>
            </div>

            {/* Column 2: SERVICES */}
            <div className="pixgro-col">
              <h4 className="pixgro-col-title">SERVICES</h4>
              <ul className="pixgro-link-list">
                <li><Link href="/services#web-dev">WEB DEVELOPMENT</Link></li>
                <li><Link href="/services#lead-gen">LEAD GENERATION</Link></li>
                <li><Link href="/services#crm">CRM SOLUTIONS</Link></li>
                <li><Link href="/services#ai">AI &amp; AUTOMATION</Link></li>
                <li><Link href="/services#infrastructure">IT INFRASTRUCTURE</Link></li>
              </ul>
            </div>

            {/* Column 3: SOCIAL MEDIA */}
            <div className="pixgro-col">
              <h4 className="pixgro-col-title">SOCIAL MEDIA</h4>
              <ul className="pixgro-link-list">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
                <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">DRIBBBLE</a></li>
                <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">TWITTER</a></li>
              </ul>
            </div>
          </div>

          {/* Right Sub-Card: Newsletter Box */}
          <div className="pixgro-newsletter-subcard">
            <span className="newsletter-subtitle">Subscribe to Our</span>
            <h3 className="newsletter-main-title">Newsletter</h3>

            <form onSubmit={handleSubmit} className="pixgro-newsletter-form">
              <div className="pixgro-input-pill">
                <input
                  type="email"
                  placeholder="Your email here..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pixgro-email-input"
                  required
                />
                <button type="submit" className="pixgro-subscribe-btn">
                  {submitted ? "Subscribed!" : "Subscribe"}
                </button>
              </div>
            </form>

            <p className="newsletter-bottom-quote">
              &ldquo;Your monthly dose of creativity, delivered straight to your inbox.&rdquo;
            </p>
          </div>
        </div>

        {/* Giant Translucent Watermark */}
        <div className="pixgro-watermark-text" aria-hidden="true">
          AXTRAIT
        </div>

        {/* Bottom Copyright Row */}
        <div className="pixgro-copyright-row">
          <p className="copyright-text">
            © 2026 Designed by <span className="highlight-author">Axtrait</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
