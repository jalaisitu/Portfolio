import React from "react";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="shell contact-section"
      aria-label="Contacto profesional"
    >
      <Reveal className="contact-inner">
        <div>
          <p className="eyebrow">05 / CONTACTO PROFESIONAL</p>
          <p>
            Puedes escribirme para hablar de mis proyectos,
            <br />
            mi formación o una oportunidad profesional.
          </p>
          <div className="actions">
            <a href={`mailto:${profile.email}`} className="button light">
              Contactar por email <span aria-hidden="true">↗</span>
            </a>
            <a href={profile.linkedin} className="text-link">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href={profile.github} className="text-link">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a className="email-note" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
