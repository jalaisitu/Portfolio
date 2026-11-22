import React from "react";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";
import { useI18n } from "../i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="shell about-grid">
        <Reveal>
          <p className="eyebrow">01 / {t("ABOUT ME")}</p>
          <h2 id="about-title">
            {t("Learning by building.")}
            <br />
            <em>{t("And testing.")}</em>
          </h2>
          <p className="personal-note">
            {t("Beyond code: the gym and the colour green.")}
            <br />
            {t("Programming and computer science are my passion.")}
          </p>
        </Reveal>
        <Reveal className="about-copy">
          <p className="lead">
            {t(
              "While testing my classifier with different images, I saw that the model could be wrong. I added prediction confidence to the interface to make its answers easier to interpret.",
            )}
          </p>
          <p>
            {t(
              "I am interested in the connection between what an application does and what its users understand. I study web development in Barcelona and practise through frontend, AI and security projects.",
            )}
          </p>
          <p>
            {t(
              "At FME Datathon and Swiss AI Weeks, I worked with teams to turn an idea into a prototype and communicate its possibilities and limitations.",
            )}
          </p>
          <a className="text-link" href={profile.github}>
            {t("View my GitHub profile")} <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
