"use client";

import Link from "next/link";

interface BlogPost {
  id: number;
  tag: string;
  author: string;
  title: string;
  image: string;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    tag: "Business",
    author: "By Ellinien Loma",
    title: "How data-driven decisions drive better business outcomes",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    href: "/blog/data-driven-decisions",
  },
  {
    id: 2,
    tag: "Business",
    author: "By Ellinien Loma",
    title: "How to build a future-ready company culture",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    href: "/blog/future-ready-culture",
  },
  {
    id: 3,
    tag: "Business",
    author: "By Ellinien Loma",
    title: "Top trends shaping business strategy in 2025",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    href: "/blog/business-strategy-trends",
  },
  {
    id: 4,
    tag: "Business",
    author: "By Ellinien Loma",
    title: "How data-driven decisions drive better business outcomes",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    href: "/blog/scaling-enterprise-workflows",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* ─── Header ─── */}
        <div className="blog-header">
          <div className="blog-header-left">
            <div className="blog-tag">
              <span className="blog-tag-icon">⊕</span>
              <span className="blog-tag-text">Our press</span>
            </div>
            <h2 className="blog-title">
              <em>Highlights</em> From News
            </h2>
          </div>
          <div className="blog-header-right">
            <p className="blog-subtitle">
              See what media outlets are saying about our work and impact
              platforms that featured us.
            </p>
          </div>
        </div>

        {/* ─── Cards Grid ─── */}
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              {/* Image */}
              <div className="blog-card-image-wrap">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-image"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="blog-card-body">
                {/* Meta row */}
                <div className="blog-card-meta">
                  <span className="blog-card-badge">{post.tag}</span>
                  <span className="blog-card-author">{post.author}</span>
                </div>

                {/* Title */}
                <h3 className="blog-card-title">
                  <Link href={post.href}>{post.title}</Link>
                </h3>

                {/* Read More */}
                <div className="blog-card-footer">
                  <Link href={post.href} className="blog-card-link">
                    <span>Read More</span>
                    <span className="blog-card-arrow" aria-hidden="true">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
