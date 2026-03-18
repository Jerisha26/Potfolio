import React from "react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Women's Christian College, Nagercoil",
    period: "2022 – 2025",
    grade: "80%",
    highlight: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "S.L.B. Govt Hr Sec School, Nagercoil",
    period: "2020 – 2022",
    grade: "69%",
    highlight: false,
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "S.L.B. Govt Hr Sec School, Nagercoil",
    period: "2019 – 2020",
    grade: "75%",
    highlight: false,
  },
];

export default function About() {
  return (
    <section className="section-wrap">
      <div className="container-lg">
        {/* Header */}
        <div className="anim-1 mb-5">
          <span className="eyebrow">Who I am</span>
          <span className="accent-bar"></span>
          <h2 className="section-title">About <span>Me</span></h2>
        </div>

        <div className="row g-5">
          {/* Left – Identity */}
          <div className="col-lg-5 anim-2">
            {/* Avatar */}
            <div style={{
              width: "140px", height: "140px", marginBottom: "2rem",
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontSize: "3rem",
              fontWeight: 900, color: "#000",
            }}>
              JY
            </div>

            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: "2rem",
              fontWeight: 700, marginBottom: "0.3rem",
            }}>Jerisha Y</h3>
            <p style={{ color: "var(--accent)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Software Developer
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.2rem", fontSize: "0.95rem" }}>
              Motivated and detail-oriented developer with hands-on experience in Java, Spring Boot,
              AngularJS, and MySQL. Skilled in developing responsive web applications and RESTful
              services with strong problem-solving abilities.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "2rem" }}>
              Quick learner, eager to contribute to dynamic teams and focused on building secure,
              scalable, and reliable software solutions.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                { icon: "bi-geo-alt-fill", text: "3/171 Karumpattoor, Swamythoppu Post, Kanniyakumari – 629 704" },
                { icon: "bi-envelope-fill", text: "jerisha.y26@gmail.com" },
                { icon: "bi-telephone-fill", text: "+91 9345830402" },
              ].map((c) => (
                <div key={c.text} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <i className={`bi ${c.icon}`} style={{ color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.2rem", flexShrink: 0 }}></i>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.6 }}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Education */}
          <div className="col-lg-7 anim-3">
            <span className="eyebrow">Academic Journey</span>
            <span className="accent-bar"></span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, marginBottom: "2.5rem" }}>
              Education
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {education.map((edu, i) => (
                <div key={i} className="timeline-item" style={{ paddingBottom: "2.5rem" }}>
                  <div className="glass-card p-4" style={{
                    borderLeft: edu.highlight ? "3px solid var(--accent)" : "3px solid var(--border)",
                  }}>
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <div style={{ flex: 1 }}>
                        <h5 style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.4rem",
                        }}>
                          {edu.degree}
                        </h5>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                          <i className="bi bi-building me-2" style={{ color: "var(--accent)" }}></i>
                          {edu.institution}
                        </p>
                        <span style={{ color: "var(--text-muted)", fontSize: "0.75rem", letterSpacing: "0.05em" }}>
                          <i className="bi bi-calendar3 me-1"></i>{edu.period}
                        </span>
                      </div>
                      <div style={{
                        background: edu.highlight ? "var(--accent-glow)" : "transparent",
                        border: `1px solid ${edu.highlight ? "var(--accent)" : "var(--border)"}`,
                        padding: "0.4rem 0.9rem",
                        color: edu.highlight ? "var(--accent)" : "var(--text-muted)",
                        fontSize: "0.88rem", fontWeight: 600, whiteSpace: "nowrap",
                      }}>
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Current status */}
            <div className="glass-card p-4 anim-4" style={{ borderLeft: "3px solid var(--accent2)" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{
                  width: "40px", height: "40px", background: "rgba(255,107,53,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.1rem", color: "var(--accent2)", flexShrink: 0,
                }}>
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
                <div>
                  <div style={{ fontWeight: 500, fontSize: "0.9rem" }}>Currently pursuing</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                    Master of Computer Applications (MCA) · C.S.I. Institute of Technology, Thovalai
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
