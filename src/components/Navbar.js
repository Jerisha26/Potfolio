import React, { useState, useEffect } from "react";
import { useActiveSection } from "../hooks/useInView";

const NAV_LINKS = [
  { id: "home",           label: "Home" },
  { id: "about",          label: "About" },
  { id: "skills",         label: "Skills" },
  { id: "projects",       label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "contact",        label: "Contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const active   = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      height: "var(--nav-h)",
      background: scrolled ? "rgba(9,9,11,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.4s ease",
      display: "flex", alignItems: "center",
    }}>
      <div className="container-lg d-flex justify-content-between align-items-center w-100">

        {/* Logo */}
        <button onClick={() => scrollTo("home")} style={{
          background: "none", border: "none", cursor: "pointer", padding: 0,
        }}>
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "1.5rem", color: "var(--text)", letterSpacing: "-0.03em",
          }}>
            JY<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="d-none d-md-flex list-unstyled mb-0 gap-4 align-items-center">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <button onClick={() => scrollTo(l.id)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "4px 0", position: "relative",
                  fontSize: "0.74rem", fontWeight: 500,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: isActive ? "var(--accent)" : "var(--text-muted)",
                  transition: "color 0.25s",
                  fontFamily: "var(--font-body)",
                }}>
                  {l.label}
                  {/* Active underline */}
                  <span style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "1px",
                    background: "var(--accent)",
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease",
                  }} />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Progress bar */}
        <ScrollProgress />

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{
          background: "none", border: "none", color: "var(--text)",
          fontSize: "1.4rem", cursor: "pointer",
        }} className="d-md-none">
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        position: "absolute", top: "var(--nav-h)", left: 0, right: 0,
        background: "rgba(9,9,11,0.98)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        maxHeight: open ? "400px" : "0",
        overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        {NAV_LINKS.map((l) => (
          <button key={l.id} onClick={() => scrollTo(l.id)} style={{
            display: "block", width: "100%", textAlign: "left",
            background: "none", border: "none",
            padding: "1rem 1.5rem",
            fontSize: "0.9rem", fontFamily: "var(--font-body)",
            color: active === l.id ? "var(--accent)" : "var(--text)",
            borderBottom: "1px solid var(--border)", cursor: "pointer",
            transition: "color 0.2s",
          }}>
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      height: "2px", background: "var(--border)",
    }}>
      <div style={{
        height: "100%", width: `${pct}%`,
        background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        transition: "width 0.1s",
      }} />
    </div>
  );
}
