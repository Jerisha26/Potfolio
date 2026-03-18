import React, { useEffect, useState } from "react";
import Reveal from "../components/Reveal";

const NAME = "Jerisha Y";
const ROLES = ["Software Developer", "Full Stack Enthusiast", "Java & Spring Boot Dev", "Angular & React Builder"];

export default function Hero() {
  const [lettersShown, setLettersShown] = useState(0);
  const [roleIdx, setRoleIdx]           = useState(0);
  const [roleVisible, setRoleVisible]   = useState(true);

  /* Letter-by-letter name reveal */
  useEffect(() => {
    if (lettersShown < NAME.length) {
      const t = setTimeout(() => setLettersShown((p) => p + 1), 80);
      return () => clearTimeout(t);
    }
  }, [lettersShown]);

  /* Rotating roles */
  useEffect(() => {
    const cycle = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setRoleVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(cycle);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      background: "var(--bg)", position: "relative", overflow: "hidden",
      paddingTop: "var(--nav-h)",
    }}>
      {/* ── Animated background orbs ── */}
      <div style={{
        position: "absolute", top: "10%", right: "8%",
        width: "520px", height: "520px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,192,64,0.07) 0%, transparent 70%)",
        animation: "float1 8s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", left: "-5%",
        width: "380px", height: "380px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)",
        animation: "float2 11s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      <div className="container-lg" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center gy-5">

          {/* ── Left ── */}
          <div className="col-lg-7">
            {/* Role badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              marginBottom: "1.5rem",
            }}>
              <span className="glow-dot"></span>
              <span style={{
                fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.25em",
                textTransform: "uppercase", color: "var(--accent)",
                minWidth: "220px",
                opacity: roleVisible ? 1 : 0,
                transform: roleVisible ? "translateY(0)" : "translateY(-8px)",
                transition: "all 0.35s ease",
                display: "inline-block",
              }}>
                {ROLES[roleIdx]}
              </span>
            </div>

            {/* Animated name */}
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(3.5rem, 9vw, 7.5rem)", lineHeight: 0.92,
              marginBottom: "1.5rem", letterSpacing: "-0.02em",
            }}>
              {NAME.split("").map((ch, i) => (
                <span
                  key={i}
                  className={`hero-name-letter ${i < lettersShown ? "show" : ""}`}
                  style={{
                    transitionDelay: `${i * 0.06}s`,
                    color: ch === "Y" ? "var(--accent)" : "var(--text)",
                  }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </h1>

            <Reveal variant="up" delay={3}>
              <p style={{
                color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.85,
                maxWidth: "520px", marginBottom: "2rem",
              }}>
                Motivated developer with hands-on experience in{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>Java</strong>,{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>Spring Boot</strong>,{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>Angular</strong> &{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>MySQL</strong>.
                Building secure, scalable, and reliable web solutions.
              </p>
            </Reveal>

            <Reveal variant="up" delay={4}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", marginBottom: "2.5rem" }}>
                {["Java", "Spring Boot", "Angular", "MySQL", "REST APIs", "Bootstrap", "TypeScript"].map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </Reveal>

            <Reveal variant="up" delay={5}>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn-jy" onClick={() => scrollTo("projects")}>
                  <i className="bi bi-grid-3x3-gap-fill"></i> View Projects
                </button>
                <button className="btn-jy-outline" onClick={() => scrollTo("contact")}>
                  <i className="bi bi-send"></i> Get In Touch
                </button>
              </div>
            </Reveal>
          </div>

          {/* ── Right – Stats card ── */}
          <div className="col-lg-5">
            <Reveal variant="right" delay={3}>
              <div className="row g-3">
                {[
                  { val: "80%", label: "B.Sc Grade", icon: "bi-mortarboard-fill" },
                  { val: "4",   label: "Certifications", icon: "bi-patch-check-fill" },
                  { val: "MCA", label: "Current Degree", icon: "bi-book-fill" },
                  { val: "Java",label: "Core Language",  icon: "bi-code-slash" },
                ].map((s) => (
                  <div key={s.label} className="col-6">
                    <div className="glass-card p-4 text-center">
                      <i className={`bi ${s.icon}`} style={{ color: "var(--accent)", fontSize: "1.3rem", display: "block", marginBottom: "0.6rem" }}></i>
                      <div style={{
                        fontFamily: "var(--font-display)", fontSize: "2rem",
                        fontWeight: 900, color: "var(--accent)", lineHeight: 1,
                      }}>{s.val}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", letterSpacing: "0.06em", marginTop: "0.35rem", textTransform: "uppercase" }}>
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact mini-card */}
              <div className="glass-card mt-3 p-3">
                {[
                  { icon: "bi-envelope-fill",   val: "jerisha.y26@gmail.com" },
                  { icon: "bi-telephone-fill",   val: "+91 9345830402" },
                  { icon: "bi-geo-alt-fill",     val: "Kanniyakumari – 629 704, TN" },
                ].map((c) => (
                  <div key={c.val} style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.6rem" }}>
                    <i className={`bi ${c.icon}`} style={{ color: "var(--accent)", fontSize: "0.8rem", width: "14px" }}></i>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>{c.val}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          marginTop: "4rem", display: "flex", alignItems: "center", gap: "1rem",
          color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.2em",
          textTransform: "uppercase", cursor: "pointer",
          animation: "float1 3s ease-in-out infinite",
        }} onClick={() => scrollTo("about")}>
          <div style={{ width: "24px", height: "38px", border: "1px solid var(--border)", borderRadius: "12px", display: "flex", justifyContent: "center", paddingTop: "6px" }}>
            <div style={{ width: "4px", height: "8px", borderRadius: "2px", background: "var(--accent)", animation: "float2 1.8s ease-in-out infinite" }} />
          </div>
          Scroll Down
        </div>
      </div>
    </section>
  );
}
