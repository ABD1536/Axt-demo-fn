"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";

const services = [
  "Web & App Development",
  "AI Automation & Assistants",
  "UI/UX Design",
  "Custom IT Solutions",
  "Cloud & Infrastructure",
  "Other / Not Sure",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async send (replace with real API call / EmailJS / Formspree)
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      className="contact-section section"
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
    >
      {/* Decorative orbs */}
      <div
        className="glow-orb glow-orb--cyan"
        aria-hidden="true"
        style={{ width: 400, height: 400, bottom: "0%", left: "-8%", opacity: 0.12 }}
      />
      <div
        className="glow-orb glow-orb--violet"
        aria-hidden="true"
        style={{ width: 500, height: 500, top: "10%", right: "-10%", opacity: 0.1 }}
      />

      <div className="contact-wrapper">
        {/* Left — Info */}
        <div className="contact-info reveal">
          <span className="badge" style={{ marginBottom: "1.5rem" }}>
            Let&apos;s Build Together
          </span>
          <h2 id="contact-heading">
            Ready to Plug Into the{" "}
            <span className="text-gradient">Future?</span>
          </h2>
          <p>
            Tell us about your project and we&apos;ll respond within one
            business day with a tailored proposal — no fluff, no pushy sales
            tactics. Just real expertise.
          </p>

          <div className="contact-channels">
            {[
              {
                icon: "📧",
                label: "Email Us",
                value: "hello@axtrait.com",
              },
              {
                icon: "📞",
                label: "Call / WhatsApp",
                value: "+1 (555) 000-0000",
              },
              {
                icon: "🕐",
                label: "Response Time",
                value: "Within 24 business hours",
              },
            ].map((ch) => (
              <div className="contact-channel" key={ch.label}>
                <div className="channel-icon" aria-hidden="true">
                  {ch.icon}
                </div>
                <div className="channel-text">
                  <strong>{ch.label}</strong>
                  <span>{ch.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          {submitted ? (
            <div
              className="contact-form"
              style={{ textAlign: "center", padding: "4rem 2.5rem" }}
              role="status"
              aria-live="polite"
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                }}
                aria-hidden="true"
              >
                ✅
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                Message Received!
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Thanks for reaching out. Our team will review your project and
                get back to you within one business day.
              </p>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-fname">
                    First Name *
                  </label>
                  <input
                    id="contact-fname"
                    className="form-input"
                    type="text"
                    placeholder="John"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-lname">
                    Last Name *
                  </label>
                  <input
                    id="contact-lname"
                    className="form-input"
                    type="text"
                    placeholder="Doe"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Work Email *
                </label>
                <input
                  id="contact-email"
                  className="form-input"
                  type="email"
                  placeholder="john@company.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-company">
                  Company / Organisation
                </label>
                <input
                  id="contact-company"
                  className="form-input"
                  type="text"
                  placeholder="Acme Corp"
                  autoComplete="organization"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-service">
                  Service Needed *
                </label>
                <select
                  id="contact-service"
                  className="form-select"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Project Brief *
                </label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Tell us about your project goals, timeline, and any specific requirements…"
                  required
                  rows={5}
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="btn-primary form-submit"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                      style={{ animation: "spin 1s linear infinite" }}
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Your Brief
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  lineHeight: 1.6,
                }}
              >
                🔒 Your information is secure and will never be shared with
                third parties.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Spinner keyframe (inline) */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
