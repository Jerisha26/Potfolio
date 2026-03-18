import React from "react";

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{
      background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "3.5rem 0 2rem",
    }}>
      <div className="container-lg">
        <div className="row align-items-center gy-3">
          <div className="col-md-4">
            <button onClick={() => scrollTo("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.8rem" }}>
                JY<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </button>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.4rem" }}>
              Software Developer · Nagercoil, TN
            </p>
          </div>
          <div className="col-md-4 text-md-center">
            <div className="d-flex justify-content-md-center gap-4">
              {[
                { href: "mailto:jerisha.y26@gmail.com", icon: "bi-envelope-fill" },
                { href: "tel:+919345830402",            icon: "bi-telephone-fill" },
                { href: "https://github.com",           icon: "bi-github" },
                { href: "https://www.linkedin.com/in/jelson-y-6314b227b"   ,      icon: "bi-linkedin" },
              ].map((s) => (
                <a key={s.icon} href={s.href} target="_blank"
                  style={{ color: "var(--text-muted)", fontSize: "1.15rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-4 text-md-end">
            <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", letterSpacing: "0.05em" }}>
              © 2025 Jerisha Y · All rights reserved
            </p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border)", marginTop: "2rem", paddingTop: "1.5rem" }}>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {[
              { id: "home",           label: "Home" },
              { id: "about",          label: "About" },
              { id: "skills",         label: "Skills" },
              { id: "projects",       label: "Projects" },
              { id: "certifications", label: "Certifications" },
              { id: "contact",        label: "Contact" },
            ].map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--text-muted)", fontSize: "0.72rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                fontFamily: "var(--font-body)", transition: "color 0.2s",
                padding: 0,
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
