"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const servicesFaqData: FaqItem[] = [
  {
    id: 1,
    question: "How long does an end-to-end custom web or SaaS build take?",
    answer:
      "Timelines depend on project scope. High-impact websites and custom landing pages typically take 2–4 weeks, while full-scale web applications, custom SaaS platforms, and enterprise CRM solutions take 6–12 weeks from sprint planning to cloud deployment.",
  },
  {
    id: 2,
    question: "Do you handle both frontend UI/UX design and backend engineering?",
    answer:
      "Yes. We handle the entire engineering lifecycle—from interactive Figma UI/UX prototyping and frontends engineered in Next.js/TypeScript to secure database architecture, APIs, and cloud infrastructure deployment.",
  },
  {
    id: 3,
    question: "How do your B2B lead generation and automation funnels integrate with our sales stack?",
    answer:
      "We configure automated pipeline funnels that feed verified leads directly into your CRM (Zoho, HubSpot, Salesforce, or custom solutions) alongside automated webhook notifications to Slack and WhatsApp for instant sales follow-up.",
  },
  {
    id: 4,
    question: "What post-launch maintenance, security, and scaling support do you provide?",
    answer:
      "We offer active post-deployment retainers covering SLA uptime guarantees, cloud infrastructure scaling, performance monitoring, continuous feature rollouts, and regular security patch updates.",
  },
  {
    id: 5,
    question: "Can you integrate custom AI agents and workflow automation into our existing systems?",
    answer:
      "Absolutely. We build bespoke AI integrations, fine-tuned LLM agents, and automated data pipelines that plug directly into your current tech stack without disrupting ongoing operations.",
  },
];

export default function ServicesFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default like home page

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-white-section border-t border-zinc-200" aria-label="Frequently Asked Questions">
      <div className="faq-white-container">
        {/* Left Column: Title & CTA Card */}
        <div className="faq-left-col">
          <div className="faq-badge-pill">
            <span className="badge-text">[ READ FAQS ]</span>
          </div>

          <h2 className="faq-main-title">
            Quick Answers For Your Important Questions
          </h2>

          <Link
            href="/contact"
            className="inline-flex items-center gap-4 pl-7 pr-2 py-2 rounded-full bg-black text-white font-medium text-sm sm:text-[15px] hover:bg-[#0acd00] hover:text-black transition-all duration-300 shadow-xl font-['Montserrat'] group w-fit"
          >
            <span className="font-medium tracking-tight">Contact Us</span>
            <span className="w-10 h-10 rounded-full bg-[#0acd00] text-black group-hover:bg-black group-hover:text-white flex items-center justify-center font-extrabold text-lg group-hover:scale-105 transition-all">
              ↗
            </span>
          </Link>

          {/* Bottom Strategy Call Brief Box */}
          <div className="faq-brief-box">
            <p className="faq-brief-desc">
              Getting started is easy! Simply reach out through our contact form or
              send us a message and we&apos;ll schedule a strategy call.
            </p>

            <Link href="/contact" className="faq-brief-card">
              <div className="brief-card-left">
                <span className="brief-sub">START TODAY</span>
                <span className="brief-title">Send a Brief →</span>
              </div>
              <div className="brief-card-right">
                <div className="brief-avatar-wrapper">
                  <Image
                    src="/images/avatar_1.jpg"
                    alt="Strategy Consultant"
                    width={36}
                    height={36}
                    className="brief-avatar-img"
                  />
                  <div className="brief-phone-badge" aria-hidden="true">
                    📞
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column: 5 FAQ Accordion Items */}
        <div className="faq-right-col">
          <div className="faq-accordion-list">
            {servicesFaqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`faq-accordion-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    className="faq-question-button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-toggle-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-wrapper">
                      <p className="faq-answer-text">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
