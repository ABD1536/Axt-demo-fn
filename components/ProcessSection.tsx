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
      className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto"
      id="process"
      ref={sectionRef}
      aria-labelledby="process-heading"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 reveal">
        <span className="badge mb-4">Our Process</span>
        <h2 id="process-heading" className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
          How We Turn Vision Into{" "}
          <span className="text-gradient">Reality</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          A proven four-phase engagement model that minimises risk and
          maximises delivery velocity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="card-dark p-8 text-center reveal"
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className="font-['Syne'] text-4xl font-extrabold text-[#0acd00] mb-4" aria-hidden="true">
              {step.number}
            </div>
            <h3 className="font-['Syne'] font-bold text-lg text-white mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
