"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What services does your agency offer?",
    answer:
      "We cover the full digital stack — brand identity, conversion-optimized web engineering, growth marketing, and data analytics. Each engagement is scoped to the exact unfair advantage your brand needs.",
  },
  {
    id: 2,
    question: "What is your pricing architecture?",
    answer:
      "We offer both project-based fixed pricing and dedicated monthly retainers. Every proposal is custom-built with transparent milestones and zero hidden fees.",
  },
  {
    id: 3,
    question: "Do you handle e-commerce migrations?",
    answer:
      "Yes, we specialize in high-stakes e-commerce migrations across Shopify Plus, Next.js Commerce, and headless architectures with zero downtime and SEO preservation.",
  },
  {
    id: 4,
    question: "How fast until we see ROI?",
    answer:
      "Most clients observe measurable conversion lift and lead volume acceleration within 30 to 60 days following full deployment and optimization.",
  },
  {
    id: 5,
    question: "Who actually builds the projects?",
    answer:
      "Our in-house team of senior engineers, product designers, and AI architects handles 100% of the build. No white-labeling or unvetted outsourcing.",
  },
  {
    id: 6,
    question: "How long does a typical project take?",
    answer:
      "Custom web applications and brand platforms typically ship in 4 to 8 weeks depending on scope, API integrations, and feature complexity.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default like reference image

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-white-section" aria-label="Frequently Asked Questions">
      <div className="faq-white-container">
        {/* Left Column: Title & CTA Card */}
        <div className="faq-left-col">
          <div className="faq-badge-pill">
            <span className="badge-text">[ READ FAQS ]</span>
          </div>

          <h2 className="faq-main-title">
            Quick Answers For Your Important Questions
          </h2>

          <Link href="/contact" className="faq-contact-btn">
            <span>Contact Us</span>
            <span className="btn-arrow-circle" aria-hidden="true">
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

        {/* Right Column: 6 FAQ Accordion Items */}
        <div className="faq-right-col">
          <div className="faq-accordion-list">
            {faqData.map((item, idx) => {
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
