"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your goals, market, and technical requirements to architect a tailored roadmap for success.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Our designers craft pixel-perfect wireframes and interactive prototypes that align with your brand and user journey.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "Our engineering team implements with precision — clean code, robust architecture, and seamless third-party integrations.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "We deploy, monitor, and continuously iterate — ensuring your product performs flawlessly and scales with your growth.",
  },
];

export default function ProcessSection() {
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
      className="process-section section"
      id="process"
      ref={sectionRef}
      aria-labelledby="process-heading"
    >
      <div className="section-header reveal">
        <span className="badge">Our Process</span>
        <h2 id="process-heading">
          How We Turn Vision Into{" "}
          <span className="text-gradient">Reality</span>
        </h2>
        <p>
          A proven four-phase engagement model that minimises risk and
          maximises delivery velocity.
        </p>
      </div>

      <div className="process-grid">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="card-dark process-step reveal"
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className="step-number" aria-hidden="true">
              {step.number}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
