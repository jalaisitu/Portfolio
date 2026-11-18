import React from "react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="shell hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Jalal Hazi Miah · Barcelona
        </p>
        <h1 id="hero-title">
          Frontend development.
          <br />
          <em>Ideas that work.</em>
        </h1>
        <p className="hero-intro">
          I am a web development student based in Barcelona. I build interfaces
          with JavaScript and React and explore AI through prototypes.
        </p>
        <div className="actions">
          <a href="#projects" className="button primary">
            View projects and code <span aria-hidden="true">↗</span>
          </a>
          <a href={`mailto:${profile.email}`} className="text-link">
            Contact me by email <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-proof" aria-label="Project experience">
          <span>React & JavaScript</span>
          <span>Team prototypes</span>
          <span>Security labs</span>
        </div>
      </div>
    </section>
  );
}
