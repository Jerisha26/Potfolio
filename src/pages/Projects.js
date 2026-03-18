import React from "react";

const projects = [
  {
    id: 1,
    title: "Off-site Transaction Management System",
    role: "Full Stack Developer",
    type: "Academic Project",
    description:
      "A secure, role-based internal banking application designed to verify online transactions and support malicious activity prevention by ensuring identity document compliance.",
    highlights: [
      "Designed a user-friendly web interface with role-based access control for superusers, admins, and regular users.",
      "Implemented automated identity verification by checking for required documents and triggering alerts for missing proofs.",
      "Enhanced malicious activity prevention by notifying bank managers and sending automated email requests to account holders.",
    ],
    stack: ["Java", "RESTful API", "Bootstrap", "Angular", "MySQL", "TypeScript"],
    arch: "Monolithic",
    methodology: "Agile (SDLC)",
    icon: "bi-bank2",
    accent: "var(--accent)",
  },
];

export default function Projects() {
  return (
    <section className="section-wrap">
      <div className="container-lg">
        {/* Header */}
        <div className="anim-1 mb-5">
          <span className="eyebrow">What I've built</span>
          <span className="accent-bar"></span>
          <h2 className="section-title">My <span>Projects</span></h2>
        </div>

        {projects.map((p, i) => (
          <div key={p.id} className="row g-5 align-items-start mb-5 anim-2">
            {/* Left – Project Card */}
            <div className="col-lg-7">
              <div className="glass-card p-4 p-lg-5" style={{ borderTop: `3px solid ${p.accent}` }}>
                {/* Title row */}
                <div className="d-flex align-items-start gap-4 mb-4">
                  <div style={{
                    width: "56px", height: "56px", flexShrink: 0,
                    background: "var(--accent-glow)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem", color: "var(--accent)",
                  }}>
                    <i className={`bi ${p.icon}`}></i>
                  </div>
                  <div>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
                      <span className="tech-tag highlight">{p.type}</span>
                      <span className="tech-tag">{p.methodology}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, lineHeight: 1.2 }}>
                      {p.title}
                    </h3>
                  </div>
                </div>

                <p style={{ color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  {p.description}
                </p>

                {/* Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                  {p.highlights.map((h, j) => (
                    <div key={j} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                      <i className="bi bi-arrow-right-circle-fill" style={{
                        color: "var(--accent)", fontSize: "0.9rem", marginTop: "0.2rem", flexShrink: 0,
                      }}></i>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div>
                  <span style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>
                    Tech Stack
                  </span>
                  <div>
                    {p.stack.map((t) => (
                      <span key={t} className="tech-tag highlight">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right – Meta */}
            <div className="col-lg-5">
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "Architecture", value: p.arch, icon: "bi-diagram-3-fill" },
                  { label: "Methodology", value: p.methodology, icon: "bi-kanban-fill" },
                  { label: "Role", value: p.role, icon: "bi-person-fill" },
                  { label: "Database", value: "MySQL", icon: "bi-database-fill" },
                  { label: "Web Server", value: "Apache Tomcat", icon: "bi-server" },
                ].map((m) => (
                  <div key={m.label} className="glass-card p-3 d-flex align-items-center gap-3">
                    <div style={{
                      width: "36px", height: "36px", flexShrink: 0,
                      background: "var(--accent-glow)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.9rem", color: "var(--accent)",
                    }}>
                      <i className={`bi ${m.icon}`}></i>
                    </div>
                    <div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        {m.label}
                      </div>
                      <div style={{ fontWeight: 500, fontSize: "0.9rem" }}>{m.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security features callout */}
              <div className="glass-card p-4 mt-4" style={{ borderLeft: "3px solid var(--accent2)" }}>
                <h6 style={{ color: "var(--accent2)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  Security Features
                </h6>
                {["Role-Based Access Control", "Identity Document Verification", "Automated Alert System", "Regulatory Compliance"].map((f) => (
                  <div key={f} style={{ display: "flex", gap: "0.6rem", alignItems: "center", marginBottom: "0.5rem" }}>
                    <i className="bi bi-shield-check-fill" style={{ color: "var(--accent2)", fontSize: "0.75rem" }}></i>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.83rem" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* More coming soon */}
        <div className="anim-4 mt-4">
          <div className="glass-card p-4 text-center" style={{ borderStyle: "dashed" }}>
            <i className="bi bi-plus-circle" style={{ fontSize: "2rem", color: "var(--text-muted)", display: "block", marginBottom: "0.75rem" }}></i>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 0 }}>
              More projects coming soon · Currently working on MCA coursework projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
