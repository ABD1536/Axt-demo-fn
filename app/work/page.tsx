import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Axtrait Digital & IT Solutions",
  description:
    "Explore case studies and success stories from Axtrait. See how we've helped B2B clients transform web apps, AI automation, and cloud infrastructure.",
};

const caseStudies = [
  {
    title: "Nexora Global Logistics Platform",
    client: "Nexora Enterprise Solutions",
    category: "Web & Mobile Engineering",
    metric: "+240% Speed & 99.99% Uptime",
    summary:
      "Engineered a real-time global freight tracking dashboard processing over 500,000 telemetry updates daily, replacing legacy monolithic tools.",
    challenge:
      "Legacy system experienced severe DB lockups and latency spikes during peak supply chain windows, resulting in missed delivery SLA tracking.",
    solution:
      "Rebuilt the core UI in Next.js App Router with micro-frontends, backed by Node.js microservices and Redis caching layer on AWS ECS.",
    results: [
      "240% increase in dashboard load performance",
      "Zero unhandled outages across 12 consecutive months",
      "Automated automated reporting saving 25+ staff hours weekly",
    ],
    tags: ["Next.js", "Node.js", "Redis", "AWS ECS", "Tailwind CSS"],
  },
  {
    title: "FinEdge AI Investment Assistant",
    client: "FinEdge Capital Management",
    category: "AI Integration & Automation",
    metric: "65% Cost Reduction & 4x Capacity",
    summary:
      "Deployed an enterprise RAG assistant that parses financial prospectuses, SEC filings, and quarterly reports in seconds for analyst teams.",
    challenge:
      "Investment analysts spent over 30 hours per week manually extracting balance sheet metrics from unstructured PDF financial filings.",
    solution:
      "Developed a custom vector search pipeline using Anthropic Claude & Llama 3, connected to an internal secure document repository with role-based access control.",
    results: [
      "Analyst document review time reduced from 4 hours to 15 minutes",
      "96.4% extraction precision verified by independent audit",
      "Saved $420k annually in manual data entry overhead",
    ],
    tags: ["Python", "Claude API", "Vector DB", "FastAPI", "React"],
  },
  {
    title: "HealthCore HIPAA Cloud Migration",
    client: "HealthCore Telehealth",
    category: "Custom IT Solutions & Infrastructure",
    metric: "SOC2 & HIPAA Compliant",
    summary:
      "Migrated legacy patient portals to a zero-trust multi-region AWS cloud setup with automated vulnerability patching and real-time monitoring.",
    challenge:
      "Compliance audit flagged multiple infrastructure risks on legacy VM infrastructure, hindering enterprise B2B partner acquisition.",
    solution:
      "Architected Terraform-managed Kubernetes clusters on AWS EKS with encrypted data vaults, automated audit logging, and automated failover.",
    results: [
      "Achieved 100% compliance pass on SOC2 Type II and HIPAA audits",
      "Infrastructure deployment times reduced from days to 8 minutes",
      "45% reduction in monthly cloud hosting costs",
    ],
    tags: ["Terraform", "AWS EKS", "Kubernetes", "Datadog", "Docker"],
  },
  {
    title: "Stacklabs Enterprise SaaS Redesign",
    client: "Stacklabs Software",
    category: "UI/UX & Product Design",
    metric: "+180% User Activation Rate",
    summary:
      "Complete end-to-end design system overhaul and UX redesign for a complex developer tooling and workflow orchestration platform.",
    challenge:
      "Outdated UI resulted in steep user onboarding dropoff, causing a 40% trial-to-paid conversion bottleneck.",
    solution:
      "Conducted extensive user testing, simplified multi-step workflow configurations into guided wizards, and created a unified dark-mode design system.",
    results: [
      "Trial-to-paid conversion increased by 180%",
      "System design component adoption reached 100% across dev team",
      "User satisfaction NPS rose from +22 to +68",
    ],
    tags: ["Figma", "Design System", "User Research", "Prototyping", "CRO"],
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "72px" }}>
        {/* Hero */}
        <section className="section" style={{ background: "var(--gradient-hero)", textAlign: "center", position: "relative" }}>
          <div className="glow-orb glow-orb--violet" style={{ width: 500, height: 500, top: "-10%", left: "15%" }} aria-hidden="true" />
          <div style={{ maxWidth: "850px", margin: "0 auto" }}>
            <span className="badge">Proven Results</span>
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
              Case Studies &amp; <span className="text-gradient">Client Showcase</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "660px", margin: "0 auto" }}>
              Explore how we help high-growth startups and enterprise clients solve complex engineering challenges and achieve market dominance.
            </p>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div style={{ maxWidth: "1150px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
            {caseStudies.map((cs) => (
              <article key={cs.title} className="card-dark" style={{ padding: "3rem clamp(1.5rem, 4vw, 3rem)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div>
                    <span className="badge" style={{ marginBottom: "0.5rem" }}>
                      {cs.category}
                    </span>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.25rem" }}>
                      {cs.title}
                    </h2>
                    <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>Client: {cs.client}</span>
                  </div>
                  <div
                    style={{
                      padding: "0.4rem 1rem",
                      background: "rgba(124, 58, 237, 0.15)",
                      border: "1px solid rgba(124, 58, 237, 0.3)",
                      borderRadius: "8px",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#c4b5fd",
                    }}
                  >
                    {cs.metric}
                  </div>
                </div>

                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  {cs.summary}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.5rem",
                    background: "var(--bg-elevated)",
                    padding: "1.75rem",
                    borderRadius: "12px",
                    border: "1px solid var(--border-subtle)",
                    marginBottom: "1.75rem",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--accent-glow)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                      The Challenge
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--accent-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                      The Solution
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{cs.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                    Verified Outcomes
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    {cs.results.map((res) => (
                      <li key={res} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--accent-glow)", fontWeight: 700 }}>⚡</span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                  {cs.tags.map((tag) => (
                    <span key={tag} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: "var(--bg-surface)", textAlign: "center" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
              Have a Similar Project in Mind?
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              Let&apos;s discuss how we can build a scalable engineering solution for your business.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your Project Case Review →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
