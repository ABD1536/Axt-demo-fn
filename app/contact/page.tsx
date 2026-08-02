import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Book Consultation | Axtrait Digital & IT Solutions",
  description:
    "Get in touch with Axtrait Digital & IT Solutions. Submit a project brief, schedule a technical consultation, or visit our office headquarters.",
};

const locations = [
  {
    city: "Global Headquarters",
    address: "100 Tech Plaza, Suite 800",
    region: "Innovation District, CA 94105",
    email: "contact@axtrait.com",
    phone: "+1 (555) 019-2831",
  },
  {
    city: "EMEA Regional Hub",
    address: "25 Financial Tower, Level 14",
    region: "Tech Square, London EC2A 1NT",
    email: "emea@axtrait.com",
    phone: "+44 20 7946 0912",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "72px" }}>
        {/* Hero Banner */}
        <section className="section" style={{ background: "var(--gradient-hero)", textAlign: "center", position: "relative" }}>
          <div className="glow-orb glow-orb--violet" style={{ width: 500, height: 500, top: "-10%", left: "30%" }} aria-hidden="true" />
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span className="badge">Direct Communication</span>
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
              Let&apos;s Build Something <span className="text-gradient">Extraordinary</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto" }}>
              Whether you have a fully scoped project or need technical guidance, our engineers and product leads are here to help.
            </p>
          </div>
        </section>

        {/* Embedded Contact Form Component */}
        <ContactSection />

        {/* Office Locations */}
        <section className="section" style={{ background: "var(--bg-surface)" }}>
          <div className="section-header">
            <span className="badge">Global Presence</span>
            <h2>
              Our Office <span className="text-gradient">Headquarters</span>
            </h2>
            <p>Connect directly with our regional business and engineering leads.</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {locations.map((loc) => (
              <div key={loc.city} className="card-dark" style={{ padding: "2.5rem" }}>
                <span className="service-tag" style={{ marginBottom: "1rem", display: "inline-block", background: "rgba(6, 182, 212, 0.12)", color: "#67e8f9" }}>
                  📍 {loc.city}
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  {loc.address}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>{loc.region}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.25rem", fontSize: "0.9rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)" }}>
                    <span>✉️</span> <span>{loc.email}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)" }}>
                    <span>📞</span> <span>{loc.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
