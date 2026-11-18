import React from "react";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="shell contact-section"
      aria-label="Professional contact"
    >
      <Reveal className="contact-inner">
        <div>
          <p className="eyebrow">05 / PROFESSIONAL CONTACT</p>
          <p>
            Get in touch to discuss my projects,
            <br />
            my studies or a professional opportunity.
          </p>
          <div className="actions">
            <a href={`mailto:${profile.email}`} className="button light">
              Contact me by email <span aria-hidden="true">↗</span>
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
