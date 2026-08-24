"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";

const services = [
  "Web & App Development",
  "AI Automation & Assistants",
  "UI/UX Design",
  "Custom IT Solutions",
  "Cloud & Infrastructure",
  "Other / Not Sure",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden"
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left — Info */}
        <div className="reveal">
          <span className="badge mb-6">
            Let&apos;s Build Together
          </span>
          <h2 id="contact-heading" className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to Plug Into the{" "}
            <span className="text-gradient">Future?</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
            Tell us about your project and we&apos;ll respond within one
            business day with a tailored proposal — no fluff, no pushy sales
            tactics. Just real expertise.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: "📧",
                label: "Email Us",
                value: "contact@axtrait.com",
              },
              {
                icon: "📞",
                label: "Call / WhatsApp",
                value: "+1 (555) 019-2831",
              },
              {
                icon: "🕐",
                label: "Response Time",
                value: "Within 24 business hours",
              },
            ].map((ch) => (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4" key={ch.label}>
                <div className="w-10 h-10 rounded-xl bg-[#0acd00]/10 border border-[#0acd00]/25 flex items-center justify-center text-lg flex-shrink-0" aria-hidden="true">
                  {ch.icon}
                </div>
                <div>
                  <strong className="block text-sm font-bold text-white">{ch.label}</strong>
                  <span className="text-xs text-gray-400">{ch.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          {submitted ? (
            <div
              className="bg-white/5 border border-[#0acd00]/40 rounded-3xl p-10 text-center shadow-xl"
              role="status"
              aria-live="polite"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                ✅
              </div>
              <h3 className="font-['Syne'] text-2xl font-bold text-white mb-2">
                Message Received!
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Thanks for reaching out. Our team will review your project and
                get back to you within one business day.
              </p>
            </div>
          ) : (
            <form
              className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2" htmlFor="contact-fname">
                    First Name *
                  </label>
                  <input
                    id="contact-fname"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white outline-none focus:border-[#0acd00] transition-colors"
                    type="text"
                    placeholder="John"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2" htmlFor="contact-lname">
                    Last Name *
                  </label>
                  <input
                    id="contact-lname"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white outline-none focus:border-[#0acd00] transition-colors"
                    type="text"
                    placeholder="Doe"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2" htmlFor="contact-email">
                  Work Email *
                </label>
                <input
                  id="contact-email"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white outline-none focus:border-[#0acd00] transition-colors"
                  type="email"
                  placeholder="john@company.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2" htmlFor="contact-service">
                  Service Needed *
                </label>
                <select
                  id="contact-service"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white outline-none focus:border-[#0acd00] transition-colors"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="bg-black text-gray-400">
                    Select a service…
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-black text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2" htmlFor="contact-message">
                  Project Brief *
                </label>
                <textarea
                  id="contact-message"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white outline-none focus:border-[#0acd00] transition-colors resize-none"
                  placeholder="Tell us about your project goals, timeline, and any specific requirements…"
                  required
                  rows={4}
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="w-full bg-[#0acd00] text-black font-bold text-sm sm:text-base py-4 rounded-full hover:brightness-110 shadow-lg shadow-[#0acd00]/25 transition-all"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? "Sending…" : "Send Your Brief →"}
              </button>

              <p className="text-[11px] text-gray-500 text-center pt-2">
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
