"use client";

interface StatItem {
  title: string;
  value: string;
}

const statsData: StatItem[] = [
  {
    title: "Complete Projects",
    value: "1.5k+",
  },
  {
    title: "Total Team Members",
    value: "300+",
  },
  {
    title: "Success Ratio",
    value: "99%",
  },
  {
    title: "Awards Winning",
    value: "29+",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
