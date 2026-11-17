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
          Desarrollo frontend.
          <br />
          <em>Ideas que funcionan.</em>
        </h1>
        <p className="hero-intro">
          Soy estudiante de desarrollo web en Barcelona. Creo interfaces con
          JavaScript y React y exploro la IA con prototipos.
        </p>
        <div className="actions">
          <a href="#projects" className="button primary">
            Ver proyectos y código <span aria-hidden="true">↗</span>
          </a>
          <a href={`mailto:${profile.email}`} className="text-link">
            Contactar por email <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-proof" aria-label="Experiencia de proyectos">
          <span>React & JavaScript</span>
          <span>Prototipos en equipo</span>
          <span>Laboratorios de seguridad</span>
        </div>
      </div>
    </section>
  );
}
