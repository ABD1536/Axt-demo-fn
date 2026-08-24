"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    id: "data-security",
    title: "Data Security\nTechnology",
    intro: null,
    description:
      "Our Data Security Technology service provides robust protection against threats, breaches, and vulnerabilities.",
    bgClass: "bg-[#0a0a0c] text-white",
    titleClass: "text-white",
    descClass: "text-[#a1a1aa]",
    imageSrc: "/images/card_3d_sphere.jpg",
    imageAlt: "3D Metallic Cyber Sphere",
    link: "/services",
  },
  {
    id: "digital-marketing",
    title: "Digital\nMarketing\nCampaigns",
    intro: null,
    description:
      "You need campaigns that capture attention, spark action, and convert. Our campaigns are engineered for ROI.",
    bgClass: "bg-[#FCEEE9] text-[#111111]",
    titleClass: "text-[#111111]",
    descClass: "text-[#52525b]",
    imageSrc: "/images/card_3d_gem.jpg",
    imageAlt: "3D Pink Faceted Crystal Gem",
    link: "/services",
  },
  {
    id: "ai-implementation",
    title: "AI Technology\nImplementation",
    intro:
      "AI has the power to transform your business when implemented with precision. Our AI solutions scale operations.",
    description: null,
    bgClass: "bg-[#bef264] text-[#111111]",
    titleClass: "text-[#111111]",
    descClass: "text-[#27272a]",
    imageSrc: "/images/card_3d_robot.jpg",
    imageAlt: "3D White Futuristic Cyborg Robot Head",
    link: "/services",
  },
];

export default function AboutCardsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12" aria-label="Core Capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className={`rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden min-h-[560px] sm:min-h-[620px] group ${card.bgClass}`}
            >
              {/* Top Header: Title + Circular Arrow Link */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className={`font-['Syne'] font-extrabold text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.12] tracking-tight whitespace-pre-line ${card.titleClass}`}>
                    {card.title}
                  </h3>

                  <Link
                    href={card.link}
                    aria-label={`Explore ${card.title.replace(/\n/g, ' ')}`}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0acd00"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>

                {/* Optional Intro Subtitle for AI Card */}
                {card.intro && (
                  <p className="text-[13.5px] sm:text-[14px] text-[#27272a] leading-relaxed mt-2 font-medium">
                    {card.intro}
                  </p>
                )}
              </div>

              {/* Center 3D Visual Graphic */}
              <div className="my-auto py-6 flex items-center justify-center">
                <div className="relative w-[210px] h-[210px] sm:w-[240px] sm:h-[240px] rounded-2xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 70vw, 240px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom Description */}
              {card.description && (
                <div className="pt-2">
                  <p className={`text-[13.5px] sm:text-[14.5px] leading-[1.6] font-medium ${card.descClass}`}>
                    {card.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
