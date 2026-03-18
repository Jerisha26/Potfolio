import React from "react";

const certs = [
  {
    title: "Basics of Python",
    issuer: "Cambridge International Qualifications",
    icon: "bi-filetype-py",
    color: "#3776ab",
    tags: ["Python", "Programming"],
    desc: "Certified with foundational knowledge in Python programming language covering syntax, data structures, functions, and basic scripting concepts.",
  },
  {
    title: "Oracle Cloud Infrastructure (OCI)",
    issuer: "Oracle",
    icon: "bi-cloud-fill",
    color: "#f80000",
    tags: ["Cloud Computing", "Oracle", "Infrastructure"],
    desc: "Certified with foundational cloud computing knowledge covering OCI services, identity and access management, networking, storage, and compute resources.",
  },
  {
    title: "Automotive Service Technician",
    issuer: "Automotive Skill Development Council",
    icon: "bi-gear-wide-connected",
    color: "#e8c547",
    tags: ["Technical Certification", "ASDC"],
    desc: "Certified by the Automotive Skill Development Council demonstrating technical skills and knowledge in automotive servicing and maintenance standards.",
  },
  {
    title: "Frontend Web Development using React",
    issuer: "EFURM Solution",
    icon: "bi-filetype-jsx",
    color: "#61dafb",
    tags: ["React", "Frontend", "HTML", "CSS", "JavaScript"],
    desc: "Completed 30-hour internship training in frontend web development using React. Covered HTML, CSS, JavaScript, React components, hooks, and React Router.",
    date: "Jan 14, 2026",
  },
];

export default function Certifications() {
  return (
    <section className="section-wrap">
      <div className="container-lg">
        {/* Header */}
        <div className="anim-1 mb-5">
          <span className="eyebrow">My credentials</span>
          <span className="accent-bar"></span>
          <h2 className="section-title">Certifi<span>cations</span></h2>
        </div>

        <div className="row g-4">
          {certs.map((c, i) => (
            <div key={i} className={`col-md-6 anim-${Math.min(i + 2, 5)}`}>
              <div className="glass-card p-4 h-100" style={{
                borderTop: `3px solid ${c.color}`,
              }}>
                {/* Icon + Title */}
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div style={{
                    width: "50px", height: "50px", flexShrink: 0,
                    background: `${c.color}18`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.4rem", color: c.color,
                  }}>
                    <i className={`bi ${c.icon}`}></i>
                  </div>
                  <div>
                    <h5 style={{
                      fontFamily: "var(--font-display)", fontSize: "1.05rem",
                      fontWeight: 700, lineHeight: 1.25, marginBottom: "0.3rem",
                    }}>
                      {c.title}
                    </h5>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: 0 }}>
                      <i className="bi bi-building me-1"></i>{c.issuer}
                    </p>
                    {c.date && (
                      <p style={{ color: c.color, fontSize: "0.75rem", marginTop: "0.2rem" }}>
                        <i className="bi bi-calendar3 me-1"></i>{c.date}
                      </p>
                    )}
                  </div>
                </div>

                <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.75, marginBottom: "1.2rem" }}>
                  {c.desc}
                </p>

                <div>
                  {c.tags.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary row */}
        <div className="row g-4 mt-3 anim-5">
          {[
            { val: "4", label: "Certifications Earned", icon: "bi-patch-check-fill" },
            { val: "3", label: "Professional Bodies", icon: "bi-building-fill" },
            { val: "Cloud", label: "Oracle OCI Certified", icon: "bi-cloud-fill" },
          ].map((s) => (
            <div key={s.label} className="col-md-4">
              <div className="glass-card p-4 d-flex gap-3 align-items-center">
                <i className={`bi ${s.icon}`} style={{ color: "var(--accent)", fontSize: "1.5rem", flexShrink: 0 }}></i>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 900, color: "var(--accent)", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.25rem" }}>{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
