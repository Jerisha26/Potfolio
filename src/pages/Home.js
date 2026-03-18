import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { val: "80%", label: "B.Sc Grade" },
  { val: "3+", label: "Certifications" },
  { val: "Java", label: "Core Language" },
  { val: "MCA", label: "Current Degree" },
];

const stack = [
  "Java", "Spring Boot", "Angular", "MySQL",
  "REST APIs", "TypeScript", "Bootstrap", "HTML/CSS",
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        background: "var(--bg)", position: "relative", overflow: "hidden",
        paddingTop: "5rem",
      }}>
        {/* Glow orbs */}
        <div style={{
          position: "absolute", top: "15%", right: "5%", width: "600px", height: "600px",
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(240,192,64,0.05) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "-10%", width: "400px", height: "400px",
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 65%)",
        }} />

        <div className="container-lg">
          <div className="row align-items-center gy-5">
            {/* Left */}
            <div className="col-lg-7">
              <span className="eyebrow anim-1">Software Developer</span>
              <h1 className="anim-2" style={{
                fontFamily: "var(--font-display)", fontWeight: 900, lineHeight: 0.95,
                fontSize: "clamp(3.5rem, 9vw, 7rem)", marginBottom: "1.5rem",
              }}>
                Jerisha<br />
                <span style={{ color: "var(--accent)" }}>Y</span>
                <span style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "0.55em", fontWeight: 400 }}>.</span>
              </h1>
              <p className="anim-3" style={{
                color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.85,
                maxWidth: "500px", marginBottom: "2.5rem",
              }}>
                Building responsive web applications & RESTful services with{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>Java</strong>,{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>Spring Boot</strong>,{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>Angular</strong> &{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>MySQL</strong>.
                Focused on efficiency, security, and clean architecture.
              </p>

              {/* Stack pills */}
              <div className="anim-3 mb-4">
                {stack.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="anim-4 d-flex flex-wrap gap-3">
                <Link to="/projects" className="btn-jy">
                  <i className="bi bi-grid-3x3-gap-fill"></i> View Projects
                </Link>
                <Link to="/contact" className="btn-jy-outline">
                  <i className="bi bi-send"></i> Get In Touch
                </Link>
              </div>
            </div>

            {/* Right – Stats */}
            <div className="col-lg-5">
              <div className="anim-3 row g-3">
                {stats.map((s) => (
                  <div key={s.label} className="col-6">
                    <div className="glass-card p-4">
                      <div style={{
                        fontFamily: "var(--font-display)", fontSize: "2.4rem",
                        fontWeight: 900, color: "var(--accent)", lineHeight: 1,
                      }}>
                        {s.val}
                      </div>
                      <div style={{
                        color: "var(--text-muted)", fontSize: "0.78rem",
                        letterSpacing: "0.06em", marginTop: "0.4rem", textTransform: "uppercase",
                      }}>
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact strip */}
              <div className="glass-card mt-3 p-3 anim-4">
                <div className="d-flex flex-column gap-2">
                  {[
                    { icon: "bi-envelope-fill", text: "jerisha.y26@gmail.com" },
                    { icon: "bi-telephone-fill", text: "+91 9345830402" },
                    { icon: "bi-geo-alt-fill", text: "Kanniyakumari – 629 704, TN" },
                  ].map((c) => (
                    <div key={c.text} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                      <i className={`bi ${c.icon}`} style={{ color: "var(--accent)", fontSize: "0.8rem", width: "14px" }}></i>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="anim-5 mt-5" style={{
            color: "var(--text-muted)", fontSize: "0.7rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
          }}>
            Scroll to explore <i className="bi bi-arrow-down ms-2"></i>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES STRIP ── */}
      <section style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "4rem 0",
      }}>
        <div className="container-lg">
          <div className="row g-4">
            {[
              { icon: "bi-cpu-fill", title: "Backend Development", desc: "Java · Spring Boot · RESTful APIs · Apache Tomcat" },
              { icon: "bi-layout-text-window-reverse", title: "Frontend Development", desc: "Angular · TypeScript · HTML5 · CSS3 · Bootstrap" },
              { icon: "bi-database-fill", title: "Database Management", desc: "MySQL · SQL · MySQL Workbench" },
              { icon: "bi-shield-lock-fill", title: "Security & Auth", desc: "Role-based Access Control · Identity Verification" },
            ].map((cap) => (
              <div key={cap.title} className="col-md-6 col-lg-3">
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{
                    width: "44px", height: "44px", flexShrink: 0,
                    background: "var(--accent-glow)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.1rem", color: "var(--accent)",
                  }}>
                    <i className={`bi ${cap.icon}`}></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: "0.92rem", marginBottom: "0.25rem" }}>{cap.title}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.6 }}>{cap.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
