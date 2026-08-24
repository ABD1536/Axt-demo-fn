"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    icon: "🌐",
    title: "Web & App Development",
    description:
      "We engineer high-performance web and mobile applications using modern stacks — React, Next.js, Node.js, and beyond. From MVPs to enterprise platforms, we build software that scales.",
    tags: ["Next.js", "React", "Node.js", "TypeScript", "REST / GraphQL"],
  },
  {
    icon: "🤖",
    title: "AI Automation & Assistants",
    description:
      "Supercharge your operations with custom AI pipelines, LLM-powered assistants, process automation bots, and predictive analytics tailored to your business logic.",
    tags: ["LLM Integration", "OpenAI / Claude", "RAG", "Workflow Automation"],
  },
  {
    icon: "✦",
    title: "UI/UX Design",
    description:
      "Pixel-perfect interfaces that convert. We craft immersive design systems, interactive prototypes, and conversion-optimized experiences that users love and businesses trust.",
    tags: ["Figma", "Design Systems", "Prototyping", "Conversion CRO"],
  },
  {
    icon: "⚙️",
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
      className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto"
      id="services"
      ref={sectionRef}
      aria-labelledby="services-heading"
    >
      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto mb-16 reveal">
        <span className="badge mb-4">What We Build</span>
        <h2 id="services-heading" className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
          Solutions Built for{" "}
          <span className="text-gradient">Modern Business</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          From idea to deployment — we combine engineering precision with
          creative excellence to deliver products that move the needle.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <article
            key={service.title}
            className="card-dark p-7 flex flex-col justify-between reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
            aria-label={service.title}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0acd00]/10 border border-[#0acd00]/25 flex items-center justify-center text-xl mb-5 text-[#0acd00]" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="font-['Syne'] font-bold text-xl text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-6" aria-label="Tech stack">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[11px] text-gray-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold text-[#0acd00] hover:translate-x-1 transition-transform" aria-label={`Learn more about ${service.title}`}>
                <span>Learn more</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
