const techItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "OpenAI",
  "LangChain",
  "AWS",
  "GCP",
  "Figma",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "Tailwind CSS",
  "Stripe",
  "Vercel",
];

// Duplicate for seamless loop
const track = [...techItems, ...techItems];

export default function MarqueeBanner() {
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {track.map((item, i) => (
          <div className="marquee-item" key={`${item}-${i}`}>
            <span className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
