const projects = [
  {
    name: "distsys-go",
    desc: "Dynamo-design-inspired distributed key-value store. Built on an RPC layer over raw TCP, it uses consistent hashing to route keys to nodes, quorum replication to balance consistency with availability, and vector clocks to detect conflicts between replicas.",
    tags: [
      "Go",
      "Distributed Systems",
      "TCP",
      "Consistent Hashing",
      "Vector Clocks",
      "Gossip Protocol",
    ],
    live: null,
    github: "https://github.com/OmarNahhass/distsys-go",
  },
  {
    name: "FightLedger",
    desc: "Full-stack social betting tracker for MMA. Bets settle automatically on login, with a public leaderboard, a follow system with a live activity feed, and detailed ROI analytics.",
    tags: [
      "React",
      "PostgreSQL",
      "Supabase",
      "Vercel",
      "Row-Level Security",
      "REST API",
      "JWT",
    ],
    live: "https://fightledger.vercel.app",
    github: "https://github.com/OmarNahhass/fightledger",
  },
  {
    name: "Silo",
    desc: "Full-stack forecasting platform that uses 10 prediction models on stock and cryptocurrency price history to predict future prices. Uses inverse-variance ensemble to maximize accuracy. Tracks every prediction against real outcomes, and includes live intraday forecasting and tools to compare stocks against Yahoo Finance analyst targets.",
    tags: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "scikit-learn",
      "XGBoost",
      "Fly.io",
    ],
    live: "https://cryptocast.pages.dev/",
    github: "https://github.com/OmarNahhass/silo",
  },
  {
    name: "Prochain Passage",
    desc: "Full-stack transit visualization tool intended for metro station screens that shows live positions of every active metro train in Montreal. Features a custom-built schematic map covering evey station, with live service status gathered directly from the public transit authority.",
    tags: [
      "Python",
      "FastAPI",
      "pandas",
      "JavaScript",
      "SVG",
      "GTFS",
      "REST API",
    ],
    live: "https://mtl-metro.onrender.com",
    github: "https://github.com/OmarNahhass/prochain-passage",
  },
  {
    name: "Tower Defense",
    desc: "A collaboratively built tower defense game using object-oriented architecture.",
    tags: ["C++", "OOP", "Design Patterns", "Game Development"],
    live: null,
    github: "https://github.com/OmarNahhass/tower-defense",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.name}>
            <div className="project-name">{p.name}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
