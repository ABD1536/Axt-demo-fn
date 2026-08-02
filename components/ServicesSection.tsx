"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🌐",
    iconVariant: "violet",
    title: "Web & App Development",
    description:
      "We engineer high-performance web and mobile applications using modern stacks — React, Next.js, Node.js, and beyond. From MVPs to enterprise platforms, we build software that scales.",
    tags: ["Next.js", "React", "Node.js", "TypeScript", "REST / GraphQL"],
  },
  {
    icon: "🤖",
    iconVariant: "cyan",
    title: "AI Automation & Assistants",
    description:
      "Supercharge your operations with custom AI pipelines, LLM-powered assistants, process automation bots, and predictive analytics tailored to your business logic.",
    tags: ["LLM Integration", "OpenAI / Claude", "RAG", "Workflow Automation"],
  },
  {
    icon: "✦",
    iconVariant: "amber",
    title: "UI/UX Design",
    description:
      "Pixel-perfect interfaces that convert. We craft immersive design systems, interactive prototypes, and conversion-optimized experiences that users love and businesses trust.",
    tags: ["Figma", "Design Systems", "Prototyping", "Conversion CRO"],
  },
  {
    icon: "⚙️",
    iconVariant: "emerald",
    title: "Custom IT Solutions",
    description:
      "Bespoke infrastructure, cloud architecture, DevOps pipelines, and IT consulting — we architect the digital backbone that powers your growth at enterprise scale.",
    tags: ["AWS / GCP / Azure", "DevOps", "Kubernetes", "Security Audits"],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="services-section section"
      id="services"
      ref={sectionRef}
      aria-labelledby="services-heading"
    >
      {/* Section header */}
      <div className="section-header reveal">
        <span className="badge">What We Build</span>
        <h2 id="services-heading">
          Solutions Built for{" "}
          <span className="text-gradient">Modern Business</span>
        </h2>
        <p>
          From idea to deployment — we combine engineering precision with
          creative excellence to deliver products that move the needle.
        </p>
      </div>

      {/* Cards grid */}
      <div className="services-grid">
        {services.map((service, i) => (
          <article
            key={service.title}
            className={`card-dark service-card reveal`}
            style={{ transitionDelay: `${i * 0.1}s` }}
            aria-label={service.title}
          >
            <div
              className={`service-icon-wrap service-icon-wrap--${service.iconVariant}`}
              aria-hidden="true"
            >
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-tags" aria-label="Tech stack">
              {service.tags.map((tag) => (
                <span key={tag} className="service-tag">
                  {tag}
                </span>
              ))}
            </div>
            <button className="service-arrow" aria-label={`Learn more about ${service.title}`}>
              Learn more
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
