import React from "react";

const projects = [
  {
    id: "cattle-marketplace",
    title: "Cattle Marketplace",
    desc:
      "Full‑stack cattle marketplace (Flutter + MERN) with auth, listings, chat and AI weight estimation.",
    github: "https://github.com/qurban-12/cattle-marketplace-fyp",
    live: "#"
  },
  {
    id: "absa",
    title: "Aspect‑Based Sentiment Analysis",
    desc:
      "NLP pipeline for extracting product aspects and sentiment from reviews.",
    github: "https://github.com/qurban-12/absa-streamlit-app",
    live: "#"
  },
  {
    id: "ai-cv",
    title: "AI & Computer Vision Projects",
    desc:
      "Collection of ML and CV experiments, demos, and utility scripts used in research and prototypes.",
    github: "https://github.com/qurban-12",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <div className="project-links">
              <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline">
                GitHub
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
