"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  href: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Production-Grade RAG Pipelines with Claude 3.5 & Next.js 15",
    category: "AI Engineering",
    readTime: "7 min read",
    date: "Aug 1, 2026",
    author: "Alex Rivera",
    summary:
      "A technical walkthrough on constructing low-latency retrieval systems for enterprise vector search, caching strategies, and context window optimization.",
    href: "/blog",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Why Modern B2B SaaS Platforms Are Moving Away from Monolithic Frameworks",
    category: "Web Architecture",
    readTime: "5 min read",
    date: "Jul 24, 2026",
    author: "David Chen",
    summary:
      "How modular micro-frontends and edge-rendered Next.js applications enable 4x faster feature iteration for high-scale enterprise engineering teams.",
    href: "/blog",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Zero-Downtime Infrastructure Migrations: Lessons from 50+ Kubernetes Projects",
    category: "Cloud & DevOps",
    readTime: "9 min read",
    date: "Jul 15, 2026",
    author: "Marcus Vance",
    summary:
      "Essential patterns for blue-green deployments, database schema migrations without downtime, and proactive monitoring with Prometheus.",
    href: "/blog",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
  },
];

export default function BlogSection() {
  return (
    <section
      className="w-full bg-[#ffffff] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-200"
      aria-label="Insights and Blog"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white border border-[#0acd00]/40 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm font-['Montserrat']">
              <span className="text-[#0acd00]">✦</span>
              <span>LATEST INSIGHTS</span>
            </div>

            <h2 className="font-['Syne'] font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-950 tracking-tight leading-tight">
              Fresh Perspectives On Tech & Engineering.
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-[#0acd00] transition-colors font-['Montserrat'] group"
          >
            <span>View All Publications</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#0acd00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, idx) => (
            <Link
              key={idx}
              href={post.href}
              className="group flex flex-col justify-between bg-zinc-50 hover:bg-white border border-zinc-200/80 hover:border-[#0acd00]/40 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl p-6"
            >
              <div>
                {/* Image Wrap */}
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-6 bg-zinc-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-[#0acd00] border border-[#0acd00]/30 font-['Montserrat']">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-zinc-500 font-medium font-['Montserrat'] mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-['Syne'] font-bold text-lg sm:text-xl text-zinc-950 group-hover:text-[#0acd00] transition-colors leading-snug mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="font-['Montserrat'] text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3 mb-6">
                  {post.summary}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-zinc-200/80 flex items-center justify-between font-['Montserrat']">
                <span className="text-xs font-semibold text-zinc-700">By {post.author}</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0acd00] group-hover:underline">
                  Read Article
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
