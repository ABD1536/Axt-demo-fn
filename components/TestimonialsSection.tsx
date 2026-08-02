"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Axtrait transformed our legacy infrastructure into a sleek, AI-powered platform in under 12 weeks. The results exceeded every KPI we set. Truly enterprise-grade execution.",
    author: "Sarah Mitchell",
    role: "CTO · Nexora Logistics",
    initials: "SM",
    avatarVariant: "violet",
    stars: 5,
  },
  {
    quote:
      "Their team delivered a custom automation suite that cut our operational costs by 38%. The attention to detail and communication throughout was outstanding.",
    author: "James Okonkwo",
    role: "Head of Operations · FinEdge Capital",
    initials: "JO",
    avatarVariant: "cyan",
    stars: 5,
  },
  {
    quote:
      "From design to deployment — Axtrait nailed it. Our web app user retention improved dramatically after the redesign. They understand B2B product strategy deeply.",
    author: "Priya Sharma",
    role: "CEO · Stacklabs SaaS",
    initials: "PS",
    avatarVariant: "amber",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="testimonials-section section"
      id="testimonials"
      ref={sectionRef}
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative orb */}
      <div
        className="glow-orb glow-orb--violet"
        aria-hidden="true"
        style={{ width: 500, height: 500, top: "20%", right: "-15%", opacity: 0.12 }}
      />

      <div className="section-header reveal">
        <span className="badge">Client Stories</span>
        <h2 id="testimonials-heading">
          Trusted by Teams Who{" "}
          <span className="text-gradient">Demand the Best</span>
        </h2>
        <p>
          Don&apos;t take our word for it — hear directly from the businesses
          we&apos;ve helped transform.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <article
            key={t.author}
            className={`card-dark testimonial-card reveal`}
            style={{ transitionDelay: `${i * 0.12}s` }}
            aria-label={`Testimonial from ${t.author}`}
          >
            <div className="testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>
              {Array.from({ length: t.stars }).map((_, si) => (
                <span key={si} aria-hidden="true">★</span>
              ))}
            </div>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <footer className="testimonial-author">
              <div
                className={`avatar avatar--${t.avatarVariant}`}
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div className="author-info">
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
