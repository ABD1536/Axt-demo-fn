"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { type FormEvent, useState } from "react";

const articles = [
  {
    title: "Building Production-Grade RAG Pipelines with Claude 3.5 & Next.js 15",
    category: "AI Engineering",
    readTime: "7 min read",
    date: "Aug 1, 2026",
    author: "Alex Rivera, Head of AI",
    summary:
      "A technical walkthrough on constructing low-latency retrieval systems for enterprise vector search, including caching strategies and context window optimization.",
  },
  {
    title: "Why Modern B2B SaaS Platforms Are Moving Away from Monolithic Frameworks",
    category: "Web Architecture",
    readTime: "5 min read",
    date: "Jul 24, 2026",
    author: "David Chen, Lead Architect",
    summary:
      "How modular micro-frontends and edge-rendered Next.js applications enable 4x faster feature iteration for high-scale enterprise engineering teams.",
  },
  {
    title: "Zero-Downtime Infrastructure Migrations: Lessons from 50+ Kubernetes Projects",
    category: "Cloud & DevOps",
    readTime: "9 min read",
    date: "Jul 15, 2026",
    author: "Marcus Vance, Director of IT",
    summary:
      "Essential patterns for blue-green deployments, database schema migrations without downtime, and proactive monitoring with Prometheus.",
  },
  {
    title: "Designing Dark Mode Design Systems That Enterprise Users Actually Love",
    category: "UI/UX Strategy",
    readTime: "4 min read",
    date: "Jul 08, 2026",
    author: "Elena Rostova, Product Designer",
    summary:
      "Key color contrast ratios, accessibility guidelines, and component token design tactics for complex enterprise dashboard interfaces.",
  },
  {
    title: "Securing B2B Web Apps Against Emerging OWASP Top 10 Threats in 2026",
    category: "Cybersecurity",
    readTime: "6 min read",
    date: "Jun 28, 2026",
    author: "Marcus Vance, Director of IT",
    summary:
      "Practical defensive coding techniques, rate-limiting strategies, and API security headers for modern Node.js and Next.js applications.",
  },
  {
    title: "The ROI of Custom AI Assistants: Benchmark Report Across 30 B2B Scaleups",
    category: "AI & Automation",
    readTime: "8 min read",
    date: "Jun 14, 2026",
    author: "Alex Rivera, Head of AI",
    summary:
      "An empirical study measuring cost reductions, employee productivity gains, and resolution speeds after implementing internal AI assistants.",
  },
];

export default function BlogPage() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "72px" }}>
        {/* Hero */}
        <section className="section" style={{ background: "var(--gradient-hero)", textAlign: "center", position: "relative" }}>
          <div className="glow-orb glow-orb--cyan" style={{ width: 500, height: 500, top: "-10%", right: "20%" }} aria-hidden="true" />
          <div style={{ maxWidth: "850px", margin: "0 auto" }}>
            <span className="badge">Insights &amp; Engineering</span>
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
              Tech Articles &amp; <span className="text-gradient">Industry Insights</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "660px", margin: "0 auto" }}>
              Deep dives into AI integration, Next.js architecture, cloud infrastructure, and enterprise B2B software strategy.
            </p>
          </div>
        </section>

        {/* Featured Post Banner */}
        <section className="section" style={{ background: "var(--bg-surface)", paddingBottom: "3rem" }}>
          <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
            <div className="card-dark" style={{ padding: "3rem", display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span className="badge">Featured Article</span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Aug 1, 2026 • 7 min read</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.25 }}>
                Building Production-Grade RAG Pipelines with Claude 3.5 &amp; Next.js 15
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "850px" }}>
                Discover how our engineering team builds ultra-responsive vector search systems capable of processing millions of enterprise documents with sub-100ms latency.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--accent-glow)", fontWeight: 600 }}>By Alex Rivera, Head of AI</span>
                <span style={{ fontSize: "0.9rem", color: "var(--accent-secondary)", fontWeight: 600, cursor: "pointer" }}>Read Full Article →</span>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div className="section-header">
            <span className="badge">Latest Publications</span>
            <h2>
              Explore Our <span className="text-gradient">Knowledge Base</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.75rem",
              maxWidth: "1150px",
              margin: "0 auto",
            }}
          >
            {articles.map((art) => (
              <article key={art.title} className="card-dark" style={{ padding: "2.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span className="service-tag" style={{ background: "rgba(124, 58, 237, 0.12)", color: "#c4b5fd" }}>
                      {art.category}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{art.readTime}</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.35,
                      marginBottom: "0.85rem",
                    }}
                  >
                    {art.title}
                  </h3>

                  <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                    {art.summary}
                  </p>
                </div>

                <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{art.date}</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--accent-glow)", fontWeight: 600, cursor: "pointer" }}>Read Article →</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="section" style={{ background: "var(--bg-surface)", textAlign: "center" }}>
          <div style={{ maxWidth: "650px", margin: "0 auto" }}>
            <span className="badge" style={{ marginBottom: "1rem" }}>Stay Ahead</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
              Subscribe to Axtrait Engineering Digest
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              Get our monthly breakdown of tech architecture, AI innovations, and B2B growth benchmarks delivered directly to your inbox.
            </p>
            {subscribed ? (
              <div style={{ padding: "1rem 1.5rem", background: "rgba(124, 58, 237, 0.15)", border: "1px solid rgba(124, 58, 237, 0.3)", borderRadius: "8px", color: "#c4b5fd" }}>
                ✓ You&apos;re subscribed! Welcome to Axtrait Engineering Digest.
              </div>
            ) : (
              <form style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="form-input"
                  style={{ flex: "1 1 280px", maxWidth: "380px" }}
                  required
                />
                <button type="submit" className="btn-primary">
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
