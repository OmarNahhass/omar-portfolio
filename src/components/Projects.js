const projects = [
  {
    name: "FightLedger",
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
    live: "https://fightledger.vercel.app",
    github: "https://github.com/OmarNahhass/fightledger",
  },
  {
    name: "Silo",
    desc: "Full-stack forecasting platform that runs 10 statistical and machine-learning models in parallel using a 4-worker thread pool, then combines their outputs into a single prediction using inverse-variance ensemble weighting, so models with lower historical error are weighted more heavily. Every prediction is saved to SQLite and resolved against the next trading day's actual closing price automatically, with no scheduled jobs — resolution happens as a side effect of the next forecast request, and drives a rolling 30-day bias correction per model once at least 10 resolved predictions exist. Includes a Track Record page that runs a paired t-test (SciPy) comparing the ensemble's accuracy to a naive no-change baseline, live intraday forecasting, two-ticker comparison against Yahoo Finance analyst consensus data, and KaTeX-rendered formulas for all 10 models. Deployed on Fly.io and Cloudflare Pages with GitHub Actions deploying both services automatically on every push to main.",
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
