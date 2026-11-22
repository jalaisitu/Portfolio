import React from "react";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";
import { useI18n } from "../i18n";

export default function Contact() {
  const { t } = useI18n();
  return (
    <section
      id="contact"
      className="shell contact-section"
      aria-label={t("Professional contact")}
    >
      <Reveal className="contact-inner">
        <div>
          <p className="eyebrow">05 / {t("PROFESSIONAL CONTACT")}</p>
          <p>
            {t("Get in touch to discuss my projects,")}
            <br />
            {t("my studies or a professional opportunity.")}
          </p>
          <div className="actions">
            <a href={`mailto:${profile.email}`} className="button light">
              {t("Contact me by email")} <span aria-hidden="true">↗</span>
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
