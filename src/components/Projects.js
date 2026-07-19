const projects = [
  {
    name: "MMA Betting Tracker",
    desc: "Full-stack betting platform built on a normalized 8-table PostgreSQL schema with row-level security policies enforced at the database layer, ensuring zero cross-user data leakage across all queries. Architected a serverless API layer on Vercel to interface with a third-party MMA data provider, enabling automated fight-card ingestion and result-based bet settlement. Implements JWT-based auth via Supabase, a social graph (follow system) with a materialized activity feed, and a public leaderboard with ROI ranking — all served through a security_invoker view to scope reads per authenticated user.",
    tags: [
      "React",
      "PostgreSQL",
      "Supabase",
      "Vercel",
      "Row-Level Security",
      "REST API",
      "JWT",
    ],
    live: "https://mma-tracker-theta.vercel.app",
    github: "https://github.com/OmarNahhass/mma-tracker",
  },
  {
    name: "Stock Analyzer",
    desc: "An advanced stock forecasting tool built in Python that predicts future stock price trends using multiple machine learning algorithms and technical indicators.",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    live: null,
    github: "https://github.com/OmarNahhass",
  },
  {
    name: "Population Predictor",
    desc: "A data-driven population forecasting tool that models demographic trends and projects future estimates using statistical regression and time-series analysis.",
    tags: ["Python", "Data Analysis", "NumPy", "Matplotlib"],
    live: null,
    github: "https://github.com/OmarNahhass",
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
