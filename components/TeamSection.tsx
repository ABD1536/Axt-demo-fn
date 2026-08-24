"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jenny Wilson",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jenny Wilson",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kristin Watson",
    role: "Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bessie Cooper",
    role: "Developer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-white text-zinc-900 py-20 px-6 lg:px-12 overflow-hidden" aria-label="Our Team">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ff4d00] mb-3">
          <span>✦</span>
          <span>OUR TEAM</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 text-center max-w-2xl leading-tight mb-14 font-sans tracking-tight">
          Meet Our Experienced Team People
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {teamMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="relative h-[420px] rounded-[32px] overflow-hidden group shadow-lg cursor-pointer bg-zinc-900"
            >
              {/* Full Cover Image */}
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Info Overlay (Bottom-left) */}
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <h3 className="text-xl font-bold leading-tight">
                  {member.name}
                </h3>
                <p className="text-zinc-300 text-sm font-medium mt-0.5">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
