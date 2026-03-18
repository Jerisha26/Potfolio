import React from "react";
import { useInView } from "../hooks/useInView";

/**
 * Wraps children in a scroll-triggered reveal animation.
 * @param {"up"|"down"|"left"|"right"|"scale"|"rotate"} variant
 * @param {number} delay - stagger delay index (1-8)
 */
export default function Reveal({ children, variant = "up", delay = 0, className = "", style = {} }) {
  const [ref, inView] = useInView();
  const delayClass = delay ? `delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? "is-visible" : ""} ${delayClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
