import React, { useState } from "react";

const skillGroups = [
  {
    category: "Programming Languages",
    icon: "bi-code-slash",
    skills: [
      { name: "Java", level: 90 },
      { name: "TypeScript", level: 78 },
      { name: "Python (Basic)", level: 55 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "bi-layers-fill",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "Angular", level: 80 },
      { name: "Bootstrap", level: 88 },
      { name: "RESTful APIs", level: 85 },
    ],
  },
  {
    category: "Web Technologies",
    icon: "bi-globe",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 78 },
    ],
  },
  {
    category: "Database & DevOps",
    icon: "bi-database-fill",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "GitLab / GitHub", level: 80 },
      { name: "Jenkins (Basic)", level: 55 },
      { name: "Apache Tomcat", level: 72 },
    ],
  },
];

const tools = [
  { name: "VS Code", icon: "bi-code-square" },
  { name: "IntelliJ IDEA", icon: "bi-braces" },
  { name: "Figma", icon: "bi-vector-pen" },
  { name: "Postman", icon: "bi-send-fill" },
  { name: "Swagger", icon: "bi-file-earmark-code" },
  { name: "MySQL Workbench", icon: "bi-table" },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-wrap">
      <div className="container-lg">
        {/* Header */}
        <div className="anim-1 mb-5">
          <span className="eyebrow">What I know</span>
          <span className="accent-bar"></span>
          <h2 className="section-title">Technical <span>Skills</span></h2>
        </div>

        <div className="row g-5">
          {/* Category tabs */}
          <div className="col-lg-4 anim-2">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {skillGroups.map((g, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  background: active === i ? "var(--accent-glow)" : "var(--surface)",
                  border: `1px solid ${active === i ? "var(--border-accent)" : "var(--border)"}`,
                  color: active === i ? "var(--accent)" : "var(--text-muted)",
                  padding: "1rem 1.5rem", cursor: "pointer", textAlign: "left",
                  display: "flex", alignItems: "center", gap: "0.85rem",
                  transition: "all 0.25s ease", borderRadius: "0",
                  borderLeft: active === i ? "3px solid var(--accent)" : "3px solid transparent",
                }}>
                  <i className={`bi ${g.icon}`} style={{ fontSize: "1.1rem" }}></i>
                  <span style={{ fontWeight: 500, fontSize: "0.88rem" }}>{g.category}</span>
                </button>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="glass-card p-4 mt-4">
              <h6 style={{ color: "var(--accent)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Soft Skills
              </h6>
              {["Problem Solving", "Team Collaboration", "Quick Learner", "Agile / SDLC", "Attention to Detail"].map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <i className="bi bi-check-circle-fill" style={{ color: "var(--accent)", fontSize: "0.75rem" }}></i>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill bars */}
          <div className="col-lg-8 anim-3">
            <div className="glass-card p-4 p-lg-5 mb-4">
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "2rem" }}>
                <div style={{
                  width: "44px", height: "44px",
                  background: "var(--accent-glow)", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem", color: "var(--accent)",
                }}>
                  <i className={`bi ${skillGroups[active].icon}`}></i>
                </div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", marginBottom: 0 }}>
                  {skillGroups[active].category}
                </h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
                {skillGroups[active].skills.map((sk) => (
                  <div key={sk.name}>
                    <div className="d-flex justify-content-between mb-2">
                      <span style={{ fontWeight: 500, fontSize: "0.9rem" }}>{sk.name}</span>
                      <span style={{ color: "var(--accent)", fontSize: "0.82rem", fontWeight: 600 }}>{sk.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${sk.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <span className="eyebrow">Development Tools</span>
              <div className="row g-3 mt-1">
                {tools.map((t) => (
                  <div key={t.name} className="col-6 col-md-4">
                    <div className="glass-card p-3 d-flex align-items-center gap-3">
                      <i className={`bi ${t.icon}`} style={{ color: "var(--accent)", fontSize: "1.2rem" }}></i>
                      <span style={{ fontSize: "0.88rem", fontWeight: 500 }}>{t.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
