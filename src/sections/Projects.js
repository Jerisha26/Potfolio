import React from "react";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <div className="container-lg">

        <Reveal variant="up">
          <span className="eyebrow">What I've built</span>
          <span className="accent-bar"></span>
          <h2 className="section-title">My <span>Projects</span></h2>
        </Reveal>

        <div className="row g-5 mt-2">

          {/* Main project card */}
          <div className="col-lg-7">
            <Reveal variant="left" delay={1}>
              <div className="glass-card p-4 p-lg-5 h-100" style={{ borderTop: "3px solid var(--accent)" }}>
                <div className="d-flex align-items-start gap-4 mb-4">
                  <div style={{
                    width: "60px", height: "60px", flexShrink: 0,
                    background: "var(--accent-glow)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.6rem", color: "var(--accent)",
                  }}>
                    <i className="bi bi-bank2"></i>
                  </div>
                  <div>
                    <div className="mb-2">
                      <span className="tech-tag highlight">Academic Project</span>
                      <span className="tech-tag ms-1">Agile · SDLC</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, lineHeight: 1.2 }}>
                      Off-site Transaction Management System
                    </h3>
                  </div>
                </div>

                <p style={{ color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "1.5rem", fontSize: "0.93rem" }}>
                  A secure, role-based internal banking application designed to verify online transactions
                  and support malicious activity prevention by ensuring identity document compliance.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem" }}>
                  {[
                    "Designed a user-friendly web interface with role-based access control for superusers, admins, and regular users.",
                    "Implemented automated identity verification by checking for required documents and triggering alerts for missing proofs.",
                    "Enhanced malicious activity prevention by notifying bank managers and sending automated email requests to account holders.",
                  ].map((h, j) => (
                    <div key={j} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                      <i className="bi bi-arrow-right-circle-fill" style={{ color: "var(--accent)", fontSize: "0.9rem", marginTop: "0.2rem", flexShrink: 0 }}></i>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.7 }}>{h}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>Stack</span>
                  {["Java", "RESTful API", "Bootstrap", "Angular", "MySQL", "TypeScript"].map((t) => (
                    <span key={t} className="tech-tag highlight">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Meta sidebar */}
          <div className="col-lg-5">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Architecture", value: "Monolithic",         icon: "bi-diagram-3-fill" },
                { label: "Methodology", value: "Agile (SDLC)",        icon: "bi-kanban-fill" },
                { label: "Role",        value: "Full Stack Developer", icon: "bi-person-fill" },
                { label: "Database",    value: "MySQL",                icon: "bi-database-fill" },
                { label: "Web Server",  value: "Apache Tomcat",        icon: "bi-server" },
              ].map((m, i) => (
                <Reveal key={m.label} variant="right" delay={i + 1}>
                  <div className="glass-card p-3 d-flex align-items-center gap-3">
                    <div style={{
                      width: "38px", height: "38px", flexShrink: 0,
                      background: "var(--accent-glow)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.9rem", color: "var(--accent)",
                    }}>
                      <i className={`bi ${m.icon}`}></i>
                    </div>
                    <div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.label}</div>
                      <div style={{ fontWeight: 500, fontSize: "0.88rem" }}>{m.value}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="up" delay={6}>
              <div className="glass-card p-4 mt-3" style={{ borderLeft: "3px solid var(--accent2)" }}>
                <h6 style={{ color: "var(--accent2)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  Security Features
                </h6>
                {["Role-Based Access Control", "Identity Document Verification", "Automated Alert System", "Regulatory Compliance"].map((f) => (
                  <div key={f} style={{ display: "flex", gap: "0.6rem", alignItems: "center", marginBottom: "0.55rem" }}>
                    <i className="bi bi-shield-check-fill" style={{ color: "var(--accent2)", fontSize: "0.75rem" }}></i>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>{f}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Coming soon */}
        <Reveal variant="up" delay={2}>
          <div className="glass-card p-4 text-center mt-5" style={{ borderStyle: "dashed", borderColor: "var(--border)" }}>
            <i className="bi bi-plus-circle" style={{ fontSize: "2rem", color: "var(--text-muted)", display: "block", marginBottom: "0.75rem" }}></i>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: 0 }}>
              More projects coming soon · MCA coursework projects in progress
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
