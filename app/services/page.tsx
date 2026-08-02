import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Axtrait Digital & IT Solutions",
  description:
    "Explore Axtrait's core B2B services: Web & App Development, AI Integration & Automation, UI/UX Design, and Custom IT Infrastructure.",
};

const detailedServices = [
  {
    id: "web-app",
    badge: "Engineering & Cloud",
    title: "Web & Mobile App Development",
    subtitle: "High-throughput, scalable web applications and enterprise platforms built with React, Next.js, and modern APIs.",
    description:
      "We design and build resilient digital products from the ground up. Whether you need a customer-facing SaaS portal, an internal B2B dashboard, or cross-platform mobile apps, our solutions are engineered for performance, security, and developer productivity.",
    features: [
      "Custom SaaS & B2B Web Platform Engineering",
      "Headless CMS & E-commerce Integrations",
      "High-Performance Next.js & React Architectures",
      "RESTful & GraphQL API Design & Microservices",
      "Automated Testing, CI/CD, & Code Quality Assurance",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Docker"],
  },
  {
    id: "ai",
    badge: "Automation & Intelligence",
    title: "AI Integration & Automation Assistants",
    subtitle: "Turn enterprise data into actionable intelligence with LLMs, RAG pipelines, and automated business workflows.",
    description:
      "Unlock new efficiencies across your organization. We embed advanced AI models (OpenAI, Claude, Llama) directly into your software ecosystem to handle support tickets, generate complex reports, parse documents, and streamline repetitive operations.",
    features: [
      "Retrieval-Augmented Generation (RAG) Systems",
      "Autonomous AI Agents & Internal Knowledge Bots",
      "Workflow Automation & Intelligent Document Processing",
      "Custom Model Fine-tuning & Prompt Optimization",
      "Strict AI Data Governance & Privacy Compliance",
    ],
    techStack: ["OpenAI API", "Anthropic Claude", "Python", "LangChain", "Vector Databases", "Pinecone"],
  },
  {
    id: "infrastructure",
    badge: "Cloud & DevOps",
    title: "Custom IT Solutions & Cloud Infrastructure",
    subtitle: "Secure, scalable cloud architecture, DevOps automation, and round-the-clock IT infrastructure consulting.",
    description:
      "Modernize your technology foundation. We assist organizations in migrating from legacy on-prem systems to multi-cloud environments, optimizing cloud spend, enforcing cybersecurity best practices, and ensuring maximum platform availability.",
    features: [
      "AWS / GCP / Azure Infrastructure Design",
      "Kubernetes Orchestration & Containerization",
      "Zero-Downtime Infrastructure as Code (Terraform)",
      "Cybersecurity Audits & SOC2 / HIPAA Compliance Prep",
      "24/7 Server Monitoring & Disaster Recovery Planning",
    ],
    techStack: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "Docker", "Prometheus", "Nginx"],
  },
  {
    id: "design",
    badge: "User Experience",
    title: "UI/UX Design & Digital Product Strategy",
    subtitle: "User-centered design systems and conversion-focused interfaces built for enterprise platforms and SaaS.",
    description:
      "A great technical solution requires an intuitive, elegant user experience. Our UX strategists and UI designers create human-centric interfaces, rapid interactive prototypes, and comprehensive design systems that accelerate adoption and engagement.",
    features: [
      "Enterprise SaaS Dashboard & Workflow Design",
      "Comprehensive UI Design Systems & Component Libraries",
      "Interactive Wireframing & High-Fidelity Prototypes",
      "User Research, Usability Testing, & Journey Mapping",
      "Conversion Rate Optimization (CRO) & Accessibility (WCAG)",
    ],
    techStack: ["Figma", "Design Systems", "Storybook", "Tailwind CSS", "Framer Motion"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "72px" }}>
        {/* Header */}
        <section className="section" style={{ background: "var(--gradient-hero)", textAlign: "center", position: "relative" }}>
          <div className="glow-orb glow-orb--cyan" style={{ width: 500, height: 500, top: "-10%", right: "10%" }} aria-hidden="true" />
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span className="badge">Specialised Capabilities</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                marginTop: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              Tailored Technology Solutions for <span className="text-gradient">Complex Challenges</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto" }}>
              Explore our full suite of digital engineering, AI automation, product design, and IT infrastructure services.
            </p>
          </div>
        </section>

        {/* Detailed Service Cards */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div style={{ maxWidth: "1150px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {detailedServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="card-dark"
                style={{
                  padding: "3rem clamp(1.5rem, 4vw, 3.5rem)",
                  display: "grid",
                  gridTemplateColumns: index % 2 === 0 ? "1.2fr 0.8fr" : "0.8fr 1.2fr",
                  gap: "3rem",
                  alignItems: "center",
                }}
              >
                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <span className="badge" style={{ marginBottom: "1rem" }}>
                    {service.badge}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {service.title}
                  </h2>
                  <p style={{ fontSize: "1rem", color: "var(--accent-glow)", fontWeight: 500, marginBottom: "1.25rem" }}>
                    {service.subtitle}
                  </p>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {service.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {service.techStack.map((tech) => (
                      <span key={tech} className="service-tag" style={{ background: "rgba(124, 58, 237, 0.1)", borderColor: "rgba(124, 58, 237, 0.2)" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    order: index % 2 === 0 ? 2 : 1,
                    background: "var(--bg-elevated)",
                    padding: "2rem",
                    borderRadius: "12px",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Key Deliverables &amp; Capabilities
                  </h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                    {service.features.map((feature) => (
                      <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--accent-secondary)", fontWeight: 700, marginTop: "2px" }}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "2rem" }}>
                    <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      Inquire About This Service →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: "var(--bg-surface)", textAlign: "center" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
              Need a Custom Solution Engineered?
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              Our senior tech leads are ready to review your requirements and build a detailed scope.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Free Strategy Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
