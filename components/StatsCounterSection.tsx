"use client";

interface StatItem {
  title: string;
  value: string;
  desc: string;
}

const statsData: StatItem[] = [
  {
    title: "Complete Projects",
    value: "1.5k+",
    desc: "We provide innovative and reliable solutions.",
  },
  {
    title: "Total Team Members",
    value: "300+",
    desc: "We provide innovative and reliable solutions.",
  },
  {
    title: "Success Ratio",
    value: "99%",
    desc: "We provide innovative and reliable solutions.",
  },
  {
    title: "Awards Winning",
    value: "29+",
    desc: "We provide innovative and reliable solutions.",
  },
];

export default function StatsCounterSection() {
  return (
    <section className="stats-counter-section" aria-label="Axtrait Company Statistics">
      <div className="stats-counter-container">
        <div className="stats-counter-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stats-card">
              <h3 className="stats-card-title">{stat.title}</h3>
              <div className="stats-card-value">{stat.value}</div>
              <p className="stats-card-desc">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
