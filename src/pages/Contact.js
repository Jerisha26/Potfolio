import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.includes("@")) e.email = "Valid email is required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
    if (errors[ev.target.name]) setErrors({ ...errors, [ev.target.name]: null });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSent(true);
  };

  const inputStyle = (field) => ({
    background: "var(--surface2)", border: `1px solid ${errors[field] ? "var(--accent2)" : "var(--border)"}`,
    color: "var(--text)", fontFamily: "var(--font-body)", fontSize: "0.9rem",
    padding: "0.85rem 1rem", width: "100%", borderRadius: 0, outline: "none",
    transition: "border-color 0.2s",
  });

  const labelStyle = {
    fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em",
    textTransform: "uppercase", color: "var(--text-muted)",
    display: "block", marginBottom: "0.5rem",
  };

  if (sent) {
    return (
      <section className="section-wrap d-flex align-items-center justify-content-center">
        <div className="text-center anim-1">
          <div style={{
            width: "80px", height: "80px", background: "var(--accent-glow)",
            borderRadius: "50%", display: "flex", alignItems: "center",
            justifyContent: "center", margin: "0 auto 1.5rem",
            fontSize: "2rem", color: "var(--accent)",
          }}>
            <i className="bi bi-check-lg"></i>
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginBottom: "0.75rem" }}>
            Message Sent!
          </h3>
          <p style={{ color: "var(--text-muted)", maxWidth: "400px", margin: "0 auto 2rem" }}>
            Thanks for reaching out. I'll get back to you as soon as possible.
          </p>
          <button className="btn-jy-outline" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
            Send Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-wrap">
      <div className="container-lg">
        {/* Header */}
        <div className="anim-1 mb-5">
          <span className="eyebrow">Let's connect</span>
          <span className="accent-bar"></span>
          <h2 className="section-title">Get In <span>Touch</span></h2>
        </div>

        <div className="row g-5">
          {/* Left – Info */}
          <div className="col-lg-5 anim-2">
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              I'm open to new opportunities, collaborations, and interesting projects.
              Whether you have a question or just want to say hi — my inbox is open!
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "2.5rem" }}>
              {[
                { icon: "bi-envelope-fill", label: "Email", val: "jerisha.y26@gmail.com", href: "mailto:jerisha.y26@gmail.com" },
                { icon: "bi-telephone-fill", label: "Phone", val: "+91 9345830402", href: "tel:+919345830402" },
                { icon: "bi-geo-alt-fill", label: "Location", val: "Kanniyakumari – 629 704, Tamil Nadu", href: null },
              ].map((c) => (
                <div key={c.label} className="glass-card p-3 d-flex align-items-center gap-3">
                  <div style={{
                    width: "42px", height: "42px", flexShrink: 0,
                    background: "var(--accent-glow)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1rem", color: "var(--accent)",
                  }}>
                    <i className={`bi ${c.icon}`}></i>
                  </div>
                  <div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.label}</div>
                    {c.href
                      ? <a href={c.href} style={{ color: "var(--text)", fontSize: "0.88rem", textDecoration: "none" }}
                          onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                          onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
                        >{c.val}</a>
                      : <div style={{ fontSize: "0.88rem" }}>{c.val}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <span style={{ ...labelStyle, marginBottom: "1rem" }}>Find me online</span>
              <div className="d-flex gap-3">
                {[
                  { icon: "bi-github", href: "https://github.com", label: "GitHub" },
                  { icon: "bi-linkedin", href: "https://linkedin.com", label: "LinkedIn" },
                ].map((s) => (
                  <a key={s.icon} href={s.href} className="glass-card d-flex align-items-center gap-2 p-3"
                    style={{ textDecoration: "none", color: "var(--text-muted)", fontSize: "0.85rem", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--border-accent)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                  >
                    <i className={`bi ${s.icon}`} style={{ fontSize: "1.1rem" }}></i>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className="col-lg-7 anim-3">
            <div className="glass-card p-4 p-lg-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label style={labelStyle}>Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange}
                      placeholder="Your name" style={inputStyle("name")}
                      onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={e => (e.target.style.borderColor = errors.name ? "var(--accent2)" : "var(--border)")}
                    />
                    {errors.name && <span style={{ color: "var(--accent2)", fontSize: "0.75rem" }}>{errors.name}</span>}
                  </div>
                  <div className="col-md-6">
                    <label style={labelStyle}>Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com" style={inputStyle("email")}
                      onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={e => (e.target.style.borderColor = errors.email ? "var(--accent2)" : "var(--border)")}
                    />
                    {errors.email && <span style={{ color: "var(--accent2)", fontSize: "0.75rem" }}>{errors.email}</span>}
                  </div>
                </div>

                <div className="mb-3">
                  <label style={labelStyle}>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange}
                    placeholder="What's this about?" style={inputStyle("subject")}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = errors.subject ? "var(--accent2)" : "var(--border)")}
                  />
                  {errors.subject && <span style={{ color: "var(--accent2)", fontSize: "0.75rem" }}>{errors.subject}</span>}
                </div>

                <div className="mb-4">
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me more..." rows={6}
                    style={{ ...inputStyle("message"), resize: "vertical" }}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = errors.message ? "var(--accent2)" : "var(--border)")}
                  />
                  {errors.message && <span style={{ color: "var(--accent2)", fontSize: "0.75rem" }}>{errors.message}</span>}
                </div>

                <button type="submit" className="btn-jy w-100" style={{ justifyContent: "center" }}>
                  <i className="bi bi-send-fill"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
