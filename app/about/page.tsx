import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Axtrait Digital & IT Solutions",
  description:
    "Learn about Axtrait's story, mission, and values as a premier IT & Digital agency delivering high-performance tech solutions for B2B enterprises and startups.",
};

const values = [
  {
    icon: "⚡",
    title: "Engineering Precision",
    description:
      "We don't settle for quick fixes or bloated templates. Every application is built with clean architecture, strict typing, and benchmarked performance.",
  },
  {
    icon: "🤖",
    iconVariant: "cyan",
    title: "AI-First Architectures",
    description:
      "We seamlessly integrate artificial intelligence into core workflows to automate complex manual processes and deliver real enterprise value.",
  },
  {
    icon: "🛡️",
    title: "Enterprise Reliability & Security",
    description:
      "Security, compliance, and 99.99% uptime are baked into every layer of infrastructure from day one.",
  },
  {
    icon: "🚀",
    title: "B2B Scale & Velocity",
    description:
      "Designed specifically for startups, mid-market leaders, and enterprise organizations requiring rapid deployment without technical debt.",
  },
];

const teamStats = [
  { value: "8+", label: "Years of Growth" },
  { value: "120+", label: "Enterprise Projects" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "15+", label: "Global Tech Experts" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "72px" }}>
        {/* Header Hero */}
        <section className="section" style={{ background: "var(--gradient-hero)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div className="glow-orb glow-orb--violet" style={{ width: 500, height: 500, top: "-10%", left: "20%" }} aria-hidden="true" />
          <div style={{ maxWidth: "850px", margin: "0 auto" }}>
            <span className="badge">About Axtrait</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                marginTop: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              We Build the Digital Backbone for <span className="text-gradient">Tomorrow&apos;s Market Leaders</span>
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "680px",
                margin: "0 auto 2.5rem",
              }}
            >
              Axtrait Digital &amp; IT Solutions was founded on a simple premise: B2B companies deserve technical agency partners who combine cutting-edge AI and cloud engineering with deep business acumen.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <Link href="/services" className="btn-primary">
                Our Services →
              </Link>
              <Link href="/contact" className="btn-ghost">
                Talk to Our Engineers
              </Link>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section" style={{ background: "var(--bg-surface)" }}>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <span className="badge" style={{ marginBottom: "1rem" }}>Our Origin &amp; Vision</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                }}
              >
                Bridging Complex Technology with <span className="text-gradient">Measurable B2B ROI</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1rem" }}>
                In a digital landscape filled with surface-level agency promises, Axtrait stands out by delivering robust, secure, and production-hardened software solutions.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                Whether migrating legacy architectures to serverless cloud infrastructure, launching bespoke SaaS platforms, or automating enterprise operations with modern AI pipelines, our team ensures every line of code serves your strategic business objectives.
              </p>
            </div>

            {/* Stat Cards Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
              }}
            >
              {teamStats.map((stat) => (
                <div key={stat.label} className="card-dark" style={{ padding: "2rem", textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      background: "var(--gradient-cta)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div className="section-header">
            <span className="badge">Why Choose Us</span>
            <h2>
              The Principles That <span className="text-gradient">Drive Our Delivery</span>
            </h2>
            <p>We work as an extension of your internal product and IT teams.</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            {values.map((v) => (
              <div key={v.title} className="card-dark" style={{ padding: "2.25rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section" style={{ background: "var(--bg-surface)", textAlign: "center" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
              Ready to Upgrade Your Digital Infrastructure?
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.05rem" }}>
              Partner with Axtrait to accelerate your technology roadmap with confidence.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule a Technical Consultation →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
