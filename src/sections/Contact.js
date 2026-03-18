import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "../components/Reveal";

// ─────────────────────────────────────────────────────────────
//  EmailJS Configuration
//  STEP 1: Go to https://www.emailjs.com and sign up (free)
//  STEP 2: Add Email Service → connect your Gmail (jerisha.y26@gmail.com)
//  STEP 3: Create Email Template → note the Template ID
//  STEP 4: Go to Account → API Keys → copy your Public Key
//  STEP 5: Replace the three values below with your actual IDs
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_5p75av6";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_1a86m85";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY  = "_KwTUtCO-ShLDQYXL";   // e.g. "aBcDeFgHiJkLmNoPq"

// ─────────────────────────────────────────────────────────────
//  EmailJS Template variables to set up in your template:
//  {{from_name}}    → sender's name
//  {{from_email}}   → sender's email
//  {{subject}}      → email subject
//  {{message}}      → message body
//  {{to_name}}      → "Jerisha"  (set as default in template)
// ─────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef(null);
  const [form,    setForm]    = useState({ name: "", email: "", subject: "", message: "" });
  const [errors,  setErrors]  = useState({});
  const [status,  setStatus]  = useState("idle"); // "idle" | "sending" | "sent" | "error"
  const [errMsg,  setErrMsg]  = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim())         e.name    = "Name is required";
    if (!form.email.includes("@")) e.email   = "Valid email required";
    if (!form.subject.trim())      e.subject = "Subject is required";
    if (!form.message.trim())      e.message = "Message is required";
    return e;
  };

  const handleChange = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
    if (errors[ev.target.name]) setErrors({ ...errors, [ev.target.name]: null });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
          to_name:    "Jerisha",
          reply_to:   form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrMsg("Something went wrong. Please try emailing directly at jerisha.y26@gmail.com");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrMsg("");
  };

  const inputStyle = (field) => ({
    background: "var(--surface2)",
    border: `1px solid ${errors[field] ? "var(--accent2)" : "var(--border)"}`,
    color: "var(--text)", fontFamily: "var(--font-body)", fontSize: "0.9rem",
    padding: "0.85rem 1rem", width: "100%", outline: "none",
    transition: "border-color 0.25s",
  });

  const labelStyle = {
    fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em",
    textTransform: "uppercase", color: "var(--text-muted)",
    display: "block", marginBottom: "0.5rem",
  };

  // ── Success screen ──
  if (status === "sent") return (
    <section id="contact" className="section-wrap d-flex align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
      <Reveal variant="scale">
        <div className="text-center">
          <div style={{
            width: "90px", height: "90px", background: "var(--accent-glow)",
            borderRadius: "50%", display: "flex", alignItems: "center",
            justifyContent: "center", margin: "0 auto 1.5rem",
            fontSize: "2.2rem", color: "var(--accent)",
            border: "1px solid var(--border-accent)",
          }}>
            <i className="bi bi-check-lg"></i>
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", marginBottom: "0.75rem" }}>
            Message Sent!
          </h3>
          <p style={{ color: "var(--text-muted)", maxWidth: "400px", margin: "0 auto 0.5rem", lineHeight: 1.7 }}>
            Your message has been delivered to <strong style={{ color: "var(--text)" }}>jerisha.y26@gmail.com</strong>.
            I'll get back to you as soon as possible!
          </p>
          <button className="btn-jy-outline mt-4" onClick={reset}>
            <i className="bi bi-arrow-left me-2"></i> Send Another
          </button>
        </div>
      </Reveal>
    </section>
  );

  return (
    <section id="contact" className="section-wrap">
      <div className="container-lg">

        <Reveal variant="up">
          <span className="eyebrow">Let's connect</span>
          <span className="accent-bar"></span>
          <h2 className="section-title">Get In <span>Touch</span></h2>
        </Reveal>

        <div className="row g-5 mt-2">

          {/* ── Left – Contact Info ── */}
          <div className="col-lg-5">
            <Reveal variant="left" delay={1}>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.85, marginBottom: "2rem" }}>
                I'm open to new opportunities, collaborations, and interesting projects.
                Whether you have a question or just want to say hello — my inbox is open!
              </p>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { icon: "bi-envelope-fill",  label: "Email",    val: "jerisha.y26@gmail.com", href: "mailto:jerisha.y26@gmail.com" },
                { icon: "bi-telephone-fill", label: "Phone",    val: "+91 9345830402",         href: "tel:+919345830402" },
                { icon: "bi-geo-alt-fill",   label: "Location", val: "Kanniyakumari – 629 704, TN", href: null },
              ].map((c, i) => (
                <Reveal key={c.label} variant="left" delay={i + 2}>
                  <div className="glass-card p-3 d-flex align-items-center gap-3">
                    <div style={{
                      width: "40px", height: "40px", flexShrink: 0,
                      background: "var(--accent-glow)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1rem", color: "var(--accent)",
                    }}>
                      <i className={`bi ${c.icon}`}></i>
                    </div>
                    <div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.label}</div>
                      {c.href
                        ? <a href={c.href} style={{ color: "var(--text)", fontSize: "0.86rem", textDecoration: "none" }}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
                          >{c.val}</a>
                        : <div style={{ fontSize: "0.86rem" }}>{c.val}</div>
                      }
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="left" delay={5}>
              <div>
                <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "1rem" }}>
                  Find me online
                </span>
                <div className="d-flex gap-3">
                  {[
                    { icon: "bi-github",   href: "https://github.com",   label: "GitHub" },
                    { icon: "bi-linkedin", href: "https://www.linkedin.com/in/jerisha-y-6796b5342", label: "LinkedIn" },
                  ].map((s) => (
                    <a key={s.icon} href={s.href} target="_blank"
                      className="glass-card d-flex align-items-center gap-2 p-3"
                      style={{ textDecoration: "none", color: "var(--text-muted)", fontSize: "0.84rem", transition: "all 0.25s" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--border-accent)"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                    >
                      <i className={`bi ${s.icon}`} style={{ fontSize: "1.1rem" }}></i>
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right – Form ── */}
          <div className="col-lg-7">
            <Reveal variant="right" delay={1}>
              <div className="glass-card p-4 p-lg-5">

                {/* Error banner */}
                {status === "error" && (
                  <div style={{
                    background: "rgba(255,107,53,0.1)", border: "1px solid var(--accent2)",
                    padding: "0.9rem 1rem", marginBottom: "1.5rem",
                    display: "flex", alignItems: "center", gap: "0.75rem",
                  }}>
                    <i className="bi bi-exclamation-triangle-fill" style={{ color: "var(--accent2)", flexShrink: 0 }}></i>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.86rem" }}>{errMsg}</span>
                    <button onClick={reset} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", marginLeft: "auto", fontSize: "1rem" }}>
                      <i className="bi bi-x"></i>
                    </button>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label style={labelStyle}>Full Name</label>
                      <input name="name" value={form.name} onChange={handleChange}
                        placeholder="Your name" style={inputStyle("name")}
                        onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={e => (e.target.style.borderColor = errors.name ? "var(--accent2)" : "var(--border)")}
                      />
                      {errors.name && <span style={{ color: "var(--accent2)", fontSize: "0.73rem" }}>{errors.name}</span>}
                    </div>
                    <div className="col-md-6">
                      <label style={labelStyle}>Email</label>
                      <input name="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com" style={inputStyle("email")}
                        onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={e => (e.target.style.borderColor = errors.email ? "var(--accent2)" : "var(--border)")}
                      />
                      {errors.email && <span style={{ color: "var(--accent2)", fontSize: "0.73rem" }}>{errors.email}</span>}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label style={labelStyle}>Subject</label>
                    <input name="subject" value={form.subject} onChange={handleChange}
                      placeholder="What's this about?" style={inputStyle("subject")}
                      onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={e => (e.target.style.borderColor = errors.subject ? "var(--accent2)" : "var(--border)")}
                    />
                    {errors.subject && <span style={{ color: "var(--accent2)", fontSize: "0.73rem" }}>{errors.subject}</span>}
                  </div>

                  <div className="mb-4">
                    <label style={labelStyle}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell me more..." rows={6}
                      style={{ ...inputStyle("message"), resize: "vertical" }}
                      onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={e => (e.target.style.borderColor = errors.message ? "var(--accent2)" : "var(--border)")}
                    />
                    {errors.message && <span style={{ color: "var(--accent2)", fontSize: "0.73rem" }}>{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="btn-jy w-100"
                    style={{ justifyContent: "center", opacity: status === "sending" ? 0.7 : 1 }}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>
                        <span style={{
                          display: "inline-block", width: "16px", height: "16px",
                          border: "2px solid #000", borderTopColor: "transparent",
                          borderRadius: "50%", animation: "spin 0.7s linear infinite",
                        }} />
                        Sending…
                      </>
                    ) : (
                      <><i className="bi bi-send-fill"></i> Send Message</>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
