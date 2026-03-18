import React, { useState } from "react";
import Reveal from "../components/Reveal";
import { useInView } from "../hooks/useInView";

const groups = [
  {
    label: "Languages", icon: "bi-code-slash",
    skills: [
      { name: "Java",       pct: 90 },
      { name: "TypeScript", pct: 78 },
      { name: "SQL",        pct: 84 },
      { name: "Python",     pct: 55 },
    ],
  },
  {
    label: "Frameworks", icon: "bi-layers-fill",
    skills: [
      { name: "Spring Boot", pct: 85 },
      { name: "Angular",     pct: 80 },
      { name: "Bootstrap",   pct: 88 },
      { name: "REST APIs",   pct: 86 },
    ],
  },
  {
    label: "Web Tech", icon: "bi-globe",
    skills: [
      { name: "HTML5",       pct: 92 },
      { name: "CSS3",        pct: 88 },
      { name: "JavaScript",  pct: 80 },
      { name: "TypeScript",  pct: 78 },
    ],
  },
  {
    label: "DB & DevOps", icon: "bi-database-fill",
    skills: [
      { name: "MySQL",    pct: 85 },
      { name: "GitLab",   pct: 80 },
      { name: "Jenkins",  pct: 55 },
      { name: "Tomcat",   pct: 72 },
    ],
  },
];

const tools = [
  { name: "VS Code",         icon: "bi-code-square" },
  { name: "IntelliJ IDEA",   icon: "bi-braces" },
  { name: "Figma",           icon: "bi-vector-pen" },
  { name: "Postman",         icon: "bi-send-fill" },
  { name: "Swagger",         icon: "bi-file-earmark-code" },
  { name: "MySQL Workbench", icon: "bi-table" },
];

function SkillBar({ name, pct }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ marginBottom: "1.4rem" }}>
      <div className="d-flex justify-content-between mb-2">
        <span style={{ fontWeight: 500, fontSize: "0.88rem" }}>{name}</span>
        <span style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: 600 }}>{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: inView ? `${pct}%` : "0%" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section-wrap">
      <div className="container-lg">

        <Reveal variant="up">
          <span className="eyebrow">What I know</span>
          <span className="accent-bar"></span>
          <h2 className="section-title">Technical <span>Skills</span></h2>
        </Reveal>

        <div className="row g-5 mt-2">

          {/* Category tabs */}
          <div className="col-lg-4">
            <Reveal variant="left" delay={1}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {groups.map((g, i) => (
                  <button key={i} onClick={() => setActive(i)} style={{
                    background: active === i ? "var(--accent-glow)" : "var(--surface2)",
                    border: `1px solid ${active === i ? "var(--border-accent)" : "var(--border)"}`,
                    borderLeft: `3px solid ${active === i ? "var(--accent)" : "transparent"}`,
                    color: active === i ? "var(--accent)" : "var(--text-muted)",
                    padding: "0.9rem 1.4rem", cursor: "pointer", textAlign: "left",
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.86rem",
                    transition: "all 0.25s ease",
                  }}>
                    <i className={`bi ${g.icon}`} style={{ fontSize: "1rem" }}></i>
                    {g.label}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal variant="left" delay={2}>
              <div className="glass-card p-4">
                <h6 style={{ color: "var(--accent)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  Soft Skills
                </h6>
                {["Problem Solving", "Teamwork", "Quick Learner", "Agile / SDLC", "Attention to Detail"].map((s) => (
                  <div key={s} style={{ display: "flex", gap: "0.6rem", alignItems: "center", marginBottom: "0.55rem" }}>
                    <i className="bi bi-check-circle-fill" style={{ color: "var(--accent)", fontSize: "0.75rem" }}></i>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.84rem" }}>{s}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Bars + Tools */}
          <div className="col-lg-8">
            <Reveal variant="right" delay={1}>
              <div className="glass-card p-4 p-lg-5 mb-4">
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                  <div style={{
                    width: "44px", height: "44px", background: "var(--accent-glow)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem", color: "var(--accent)",
                  }}>
                    <i className={`bi ${groups[active].icon}`}></i>
                  </div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: 0 }}>
                    {groups[active].label}
                  </h4>
                </div>
                {groups[active].skills.map((sk) => (
                  <SkillBar key={sk.name + active} name={sk.name} pct={sk.pct} />
                ))}
              </div>
            </Reveal>

            {/* Tools grid */}
            <Reveal variant="up" delay={2}>
              <span className="eyebrow mb-2">Dev Tools</span>
              <div className="row g-3">
                {tools.map((t, i) => (
                  <Reveal key={t.name} variant="scale" delay={i + 1} className="col-6 col-md-4">
                    <div className="glass-card p-3 d-flex align-items-center gap-3 h-100">
                      <i className={`bi ${t.icon}`} style={{ color: "var(--accent)", fontSize: "1.15rem" }}></i>
                      <span style={{ fontSize: "0.86rem", fontWeight: 500 }}>{t.name}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
