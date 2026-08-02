"use client";

import Link from "next/link";

const featuredProjects = [
  {
    title: "Fintech Platform Modernisation",
    category: "Web & App Development",
    metric: "+240% Speed Improvement",
    description: "Re-engineered a legacy banking interface into a high-throughput microservices architecture with real-time analytics.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "AI Support Operations Bot",
    category: "AI Automation & Assistants",
    metric: "65% Support Cost Reduction",
    description: "Deployed an enterprise RAG assistant handling over 40,000 monthly customer inquiries with 94% accuracy.",
    tags: ["OpenAI LLM", "Python", "Vector DB", "FastAPI"],
  },
  {
    title: "Enterprise Cloud & DevOps Pipeline",
    category: "Custom IT Solutions",
    metric: "99.99% Uptime SLA",
    description: "Architected multi-region Kubernetes clusters with zero-downtime automated deployment pipelines for global enterprise.",
    tags: ["Kubernetes", "Docker", "Terraform", "CI/CD"],
  },
];

export default function WorkHighlightSection() {
  return (
    <section className="section" style={{ background: "var(--bg-base)" }}>
      <div className="section-header">
        <span className="badge">Featured Cases</span>
        <h2>
          Engineered for <span className="text-gradient">Impact</span>
        </h2>
        <p>
          Discover how Axtrait empowers B2B leaders and high-growth scaleups to achieve breakthrough technological advantages.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {featuredProjects.map((project) => (
          <div key={project.title} className="card-dark" style={{ padding: "2.25rem" }}>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--accent-secondary)",
                marginBottom: "0.5rem",
              }}
            >
              {project.category}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              {project.title}
            </h3>
            <div
              style={{
                display: "inline-block",
                padding: "0.25rem 0.75rem",
                background: "rgba(124, 58, 237, 0.15)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                borderRadius: "6px",
                fontSize: "0.82rem",
                fontWeight: "700",
                color: "#c4b5fd",
                marginBottom: "1rem",
              }}
            >
              {project.metric}
            </div>
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                marginBottom: "1.5rem",
              }}
            >
              {project.description}
            </p>
            <div className="service-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="service-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link href="/work" className="btn-ghost">
          View All Work & Case Studies →
        </Link>
      </div>
    </section>
  );
}
