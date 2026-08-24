"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import Footer from "@/components/Footer";

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

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your business challenges, technical landscape, and strategic goals.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "System design, UX wireframes, and technical architecture validated with your team.",
  },
  {
    step: "03",
    title: "Engineering & Build",
    description: "Agile sprint-based development with weekly demos, code reviews, and QA testing.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "Production deployment, performance monitoring, and continuous optimization.",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.08], [0.96, 1]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="relative w-full bg-[#000000]">
        {/* 1. FIXED HERO: Locked in background */}
        <div className="fixed top-0 left-0 w-full h-[55vh] min-h-[440px] max-h-[560px] z-0 overflow-hidden flex flex-col justify-center items-center">
          <HeroSection
            className="hero-v2-compact"
            badge="DIGITAL & IT AGENCY"
            titleLine1="SERVICES"
            titleLine2=""
            primaryCtaText=""
            secondaryCtaText=""
            showCards={false}
          />
        </div>

        {/* 2. SCROLL SPACER */}
        <div className="h-[55vh] min-h-[440px] max-h-[560px] w-full pointer-events-none" aria-hidden="true" />

        {/* 3. OVERLAPPING SHEET */}
        <motion.div
          style={{
            scale,
          }}
          className="relative z-10 min-h-screen bg-[#ffffff] shadow-[0_-30px_80px_rgba(0,0,0,0.95)] origin-top rounded-t-[40px] sm:rounded-t-[56px]"
        >
          {/* Partner Brands Marquee */}
          <MarqueeBanner />

          {/* Detailed Service Cards */}
          <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-bold uppercase tracking-wider text-[#0acd00] mb-4">
                ✦ Specialised Capabilities
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight mb-4">
                Tailored Solutions for <span className="text-[#0acd00]">Complex Challenges</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Explore our full suite of digital engineering, AI automation, product design, and IT infrastructure services.
              </p>
            </div>

            <div className="flex flex-col gap-12 sm:gap-16">
              {detailedServices.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-[#f7f7f7] border border-gray-200/80 rounded-3xl p-8 sm:p-12 hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  <div className={`lg:col-span-7 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0acd00]/10 text-[#0acd00] text-xs font-bold uppercase tracking-wider mb-4">
                      {service.badge}
                    </div>
                    <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#0acd00] mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 bg-black/5 border border-black/10 rounded-full text-xs font-semibold text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-5 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm ${
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <h4 className="font-['Syne'] font-bold text-base sm:text-lg text-black mb-5">
                      Key Deliverables &amp; Capabilities
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                          <span className="text-[#0acd00] font-bold text-base leading-none mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#000000] text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-[#0acd00] hover:text-black transition-all duration-300"
                    >
                      <span>Inquire About This Service</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4-Step Process Pipeline */}
          <section className="py-20 sm:py-28 px-4 sm:px-8 bg-[#fafafa] border-y border-gray-100">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-bold uppercase tracking-wider text-[#0acd00] mb-4">
                  ✦ Our Methodology
                </div>
                <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight mb-4">
                  How We <span className="text-[#0acd00]">Deliver Excellence</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  A proven 4-stage engineering lifecycle designed for velocity, security, and predictability.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((p) => (
                  <div
                    key={p.step}
                    className="bg-black text-white rounded-2xl p-8 border border-white/10 shadow-lg hover:border-[#0acd00]/50 transition-all duration-300"
                  >
                    <div className="font-['Syne'] text-4xl sm:text-5xl font-black text-[#0acd00] leading-none mb-4">
                      {p.step}
                    </div>
                    <h3 className="font-['Syne'] font-bold text-lg text-white mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="bg-[#000000] text-white rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
                  Need a Custom Solution Engineered?
                </h2>
                <p className="text-gray-400 text-base sm:text-lg mb-8">
                  Our senior tech leads are ready to review your requirements and build a detailed scope.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0acd00] text-black font-bold text-base px-8 py-4 rounded-full hover:brightness-110 shadow-lg shadow-[#0acd00]/25 transition-all duration-300"
                >
                  <span>Book a Free Strategy Call</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
