import React from "react";
import Reveal from "../components/Reveal";

const certs = [
  {
    title: "Basics of Python",
    issuer: "Cambridge International Qualifications",
    icon: "bi-filetype-py", color: "#3776ab",
    tags: ["Python", "Programming"],
    desc: "Certified with foundational Python knowledge covering syntax, data structures, functions, and basic scripting.",
  },
  {
    title: "Oracle Cloud Infrastructure (OCI)",
    issuer: "Oracle",
    icon: "bi-cloud-fill", color: "#f80000",
    tags: ["Cloud Computing", "Oracle", "Infrastructure"],
    desc: "Certified with foundational OCI knowledge: identity management, networking, storage, and compute resources.",
  },
  {
    title: "Automotive Service Technician",
    issuer: "Automotive Skill Development Council",
    icon: "bi-gear-wide-connected", color: "#f0c040",
    tags: ["Technical Certification", "ASDC"],
    desc: "Certified by ASDC demonstrating technical knowledge in automotive servicing and maintenance standards.",
  },
  {
    title: "Frontend Web Development using React",
    issuer: "EFURM Solution",
    date: "Jan 14, 2026",
    icon: "bi-filetype-jsx", color: "#61dafb",
    tags: ["React", "Frontend", "HTML", "CSS", "JavaScript"],
    desc: "30-hour internship training covering HTML, CSS, JavaScript, React components, hooks, and React Router.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrap">
      <div className="container-lg">

        <Reveal variant="up">
          <span className="eyebrow">My credentials</span>
          <span className="accent-bar"></span>
          <h2 className="section-title">Certifi<span>cations</span></h2>
        </Reveal>

        <div className="row g-4 mt-2">
          {certs.map((c, i) => (
            <div key={i} className="col-md-6">
              <Reveal variant={i % 2 === 0 ? "left" : "right"} delay={i + 1}>
                <div className="glass-card p-4 h-100" style={{ borderTop: `3px solid ${c.color}` }}>
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div style={{
                      width: "52px", height: "52px", flexShrink: 0,
                      background: `${c.color}18`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.4rem", color: c.color,
                    }}>
                      <i className={`bi ${c.icon}`}></i>
                    </div>
                    <div>
                      <h5 style={{ fontFamily: "var(--font-display)", fontSize: "1.02rem", fontWeight: 700, lineHeight: 1.25, marginBottom: "0.25rem" }}>
                        {c.title}
                      </h5>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginBottom: 0 }}>
                        <i className="bi bi-building me-1"></i>{c.issuer}
                      </p>
                      {c.date && (
                        <p style={{ color: c.color, fontSize: "0.73rem", marginTop: "0.18rem" }}>
                          <i className="bi bi-calendar3 me-1"></i>{c.date}
                        </p>
                      )}
                    </div>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.75, marginBottom: "1rem" }}>
                    {c.desc}
                  </p>
                  <div>{c.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}</div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Summary row */}
        <div className="row g-4 mt-2">
          {[
            { val: "4", label: "Certifications",    icon: "bi-patch-check-fill" },
            { val: "3", label: "Issuing Bodies",    icon: "bi-building-fill" },
            { val: "OCI", label: "Oracle Certified", icon: "bi-cloud-fill" },
          ].map((s, i) => (
            <div key={s.label} className="col-md-4">
              <Reveal variant="up" delay={i + 1}>
                <div className="glass-card p-4 d-flex gap-3 align-items-center">
                  <i className={`bi ${s.icon}`} style={{ color: "var(--accent)", fontSize: "1.5rem", flexShrink: 0 }}></i>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 900, color: "var(--accent)", lineHeight: 1 }}>{s.val}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.76rem", marginTop: "0.22rem" }}>{s.label}</div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
