"use client";

import Link from "next/link";

const featuredProjects = [
  {
    title: "Fintech Platform Modernisation",
    category: "Web & App Development",
    metric: "+240% Speed Improvement",
    description: "Re-engineered a legacy banking interface into a high-throughput microservices architecture with real-time analytics.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "AI Support Operations Bot",
    category: "AI Automation & Assistants",
    metric: "65% Support Cost Reduction",
    description: "Deployed an enterprise RAG assistant handling over 40,000 monthly customer inquiries with 94% accuracy.",
    tags: ["OpenAI LLM", "Python", "Vector DB", "FastAPI"],
  },
  {
    title: "Enterprise Cloud & DevOps Pipeline",
    category: "Custom IT Solutions",
    metric: "99.99% Uptime SLA",
    description: "Architected multi-region Kubernetes clusters with zero-downtime automated deployment pipelines for global enterprise.",
    tags: ["Kubernetes", "Docker", "Terraform", "CI/CD"],
  },
];

export default function WorkHighlightSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto" style={{ background: "var(--bg-base)" }}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="badge mb-4">Featured Cases</span>
        <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
          Engineered for <span className="text-gradient">Impact</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Discover how Axtrait empowers B2B leaders and high-growth scaleups to achieve breakthrough technological advantages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {featuredProjects.map((project) => (
          <div key={project.title} className="card-dark p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0acd00] mb-2">
                {project.category}
              </div>
              <h3 className="font-['Syne'] font-bold text-xl sm:text-2xl text-white mb-3">
                {project.title}
              </h3>
              <div className="inline-block px-3 py-1 bg-[#0acd00]/10 border border-[#0acd00]/25 rounded-lg text-xs font-bold text-[#0acd00] mb-4">
                {project.metric}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/work" className="btn-ghost">
          View All Work &amp; Case Studies →
        </Link>
      </div>
    </section>
  );
}
