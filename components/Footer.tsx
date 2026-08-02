import Link from "next/link";

const footerLinks = {
  Navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  Services: [
    { name: "Web & App Development", href: "/services#web-app" },
    { name: "AI Automation", href: "/services#ai" },
    { name: "UI/UX Design", href: "/services#design" },
    { name: "Custom IT Solutions", href: "/services#infrastructure" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security Statement", href: "#" },
  ],
};

const socials = [
  { label: "LinkedIn", icon: "in", href: "https://linkedin.com" },
  { label: "Twitter / X", icon: "𝕏", href: "https://twitter.com" },
  { label: "GitHub", icon: "⌥", href: "https://github.com" },
  { label: "Dribbble", icon: "◉", href: "https://dribbble.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <Link href="/" className="nav-logo" aria-label="Axtrait home">
            Ax<span style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>trait</span>
          </Link>
          <p>
            Plug into the future of digital &amp; IT solutions. We help
            B2B businesses, startups, and enterprises build, scale, and
            innovate with confidence.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([col, links]) => (
          <div className="footer-col" key={col}>
            <h4>{col}</h4>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} aria-label={link.name}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} Axtrait Digital &amp; IT Solutions. All rights reserved.
        </p>

        {/* Socials */}
        <div className="footer-socials" aria-label="Social media links">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="social-btn"
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
