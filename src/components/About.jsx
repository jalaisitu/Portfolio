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
            {t("Curious by nature.")}
            <br />
            <em>{t("Always figuring things out.")}</em>
          </h2>
          <p className="personal-note">
            {t("Away from the screen: gym, running and hiking.")}
            <br />
            {t("And yes, I am a Death Note fan.")}
          </p>
        </Reveal>
        <Reveal className="about-copy">
          <p className="lead">
            {t(
              "I got into programming out of curiosity. I wanted to understand how the games I played were made. I already liked maths and building things, so code felt like a place where both could meet.",
            )}
          </p>
          <p>
            {t(
              "What interests me most now is artificial intelligence and understanding difficult problems: breaking them down, experimenting and finding an answer that makes sense.",
            )}
          </p>
          <p>
            {t(
              "I see myself as curious and self-taught. Training has taught me to keep showing up even when results take time. Doing difficult things today makes me feel better and gives me hope that the effort will be worth it.",
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
