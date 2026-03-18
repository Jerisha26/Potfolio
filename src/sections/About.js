import React from "react";
import Reveal from "../components/Reveal";

const education = [
  { degree: "Bachelor of Science in Computer Science", institution: "Women's Christian College, Nagercoil", period: "2022–2025", grade: "80%", highlight: true },
  { degree: "Higher Secondary Certificate (HSC)",       institution: "S.L.B. Govt Hr Sec School, Nagercoil", period: "2020–2022", grade: "69%", highlight: false },
  { degree: "SSLC",                                     institution: "S.L.B. Govt Hr Sec School, Nagercoil", period: "2019–2020", grade: "75%", highlight: false },
];

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="container-lg">

        {/* Header */}
        <Reveal variant="up">
          <span className="eyebrow">Who I am</span>
          <span className="accent-bar"></span>
          <h2 className="section-title">About <span>Me</span></h2>
        </Reveal>

        <div className="row g-5 mt-2">

          {/* Left – Bio */}
          <div className="col-lg-5">
            <Reveal variant="left" delay={1}>
              {/* Avatar */}
              <div style={{
                width: "130px", height: "130px", marginBottom: "2rem",
                background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontSize: "2.8rem", fontWeight: 900, color: "#000",
                position: "relative",
              }}>
                <img src="\Images\Jerisha_Picture.jpeg" style={{width:"100%"}}></img>
                {/* Animated ring */}
                <div style={{
                  position: "absolute", inset: "-8px",
                  border: "1px solid var(--border-accent)",
                  animation: "pulse-ring 2.4s ease-out infinite",
                }} />
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                Jerisha Y
              </h3>
              <p style={{ color: "var(--accent)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Software Developer
              </p>
            </Reveal>

            <Reveal variant="left" delay={2}>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1rem" }}>
                Motivated and detail-oriented developer skilled in building responsive web applications and RESTful services with strong problem-solving abilities and a focus on efficiency and reliability.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "2rem" }}>
                Quick learner, eager to contribute to dynamic teams and dedicated to continuous improvement.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {[
                  { icon: "bi-geo-alt-fill",   text: "3/171 Karumpattoor, Swamythoppu, Kanniyakumari – 629 704" },
                  { icon: "bi-envelope-fill",  text: "jerisha.y26@gmail.com" },
                  { icon: "bi-telephone-fill", text: "+91 9345830402" },
                ].map((c) => (
                  <div key={c.text} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <i className={`bi ${c.icon}`} style={{ color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.18rem", flexShrink: 0 }}></i>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>{c.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right – Education */}
          <div className="col-lg-7">
            <Reveal variant="right" delay={1}>
              <span className="eyebrow">Academic Background</span>
              <span className="accent-bar"></span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 700, marginBottom: "2.5rem" }}>
                Education
              </h3>
            </Reveal>

            {education.map((edu, i) => (
              <Reveal key={i} variant="right" delay={i + 2}>
                <div style={{ position: "relative", paddingLeft: "2rem", paddingBottom: "2rem" }}>
                  <div className="timeline-dot" />
                  {i < education.length - 1 && <div className="timeline-line" />}
                  <div className="glass-card p-4" style={{ borderLeft: `3px solid ${edu.highlight ? "var(--accent)" : "var(--border)"}` }}>
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <div style={{ flex: 1 }}>
                        <h5 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                          {edu.degree}
                        </h5>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", marginBottom: "0.4rem" }}>
                          <i className="bi bi-building me-1" style={{ color: "var(--accent)" }}></i> {edu.institution}
                        </p>
                        <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
                          <i className="bi bi-calendar3 me-1"></i> {edu.period}
                        </span>
                      </div>
                      <div style={{
                        background: edu.highlight ? "var(--accent-glow)" : "transparent",
                        border: `1px solid ${edu.highlight ? "var(--accent)" : "var(--border)"}`,
                        padding: "0.35rem 0.85rem",
                        color: edu.highlight ? "var(--accent)" : "var(--text-muted)",
                        fontSize: "0.86rem", fontWeight: 600,
                      }}>
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal variant="up" delay={5}>
              <div className="glass-card p-4" style={{ borderLeft: "3px solid var(--accent2)" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{
                    width: "40px", height: "40px", flexShrink: 0,
                    background: "rgba(255,107,53,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1rem", color: "var(--accent2)",
                  }}>
                    <i className="bi bi-mortarboard-fill"></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: "0.88rem" }}>Currently pursuing</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                      MCA · C.S.I. Institute of Technology, Thovalai
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Ticker strip */}
      <div className="ticker-track mt-5">
        <div className="ticker-inner">
          {[...Array(2)].flatMap(() =>
            ["Java", "Spring Boot", "Angular", "MySQL", "TypeScript", "REST APIs", "Bootstrap", "HTML5", "CSS3", "JavaScript", "GitLab", "Postman", "IntelliJ", "Figma"].map((t) => (
              <span key={t + Math.random()} className="ticker-item">{t}</span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
