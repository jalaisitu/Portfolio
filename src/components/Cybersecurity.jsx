import React from "react";
import { labs } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import CardViews from "./CardViews";
import { useI18n } from "../i18n";

export default function Cybersecurity() {
  const { t } = useI18n();
  return (
    <section
      id="cybersecurity"
      className="shell section cyber-section"
      aria-labelledby="cyber-title"
    >
      <SectionHeading
        id="cyber-title"
        number="03"
        label={t("CYBERSECURITY")}
        title={
          <>
            {t("Understand the risks.")}
            <br />
            <em>{t("Build with awareness.")}</em>
          </>
        }
        aside={t(
          "Academic labs completed in training environments as a complement to my web development studies.",
        )}
      />
      <div className="cyber-grid">
        {labs.map((lab, index) => (
          <Reveal className="cyber-card" key={lab.id} delay={index * 70}>
            <article>
              <CardViews
                conceptId={lab.id}
                name={t(lab.name)}
                heading={
                  <>
                    <p className="eyebrow">{t("Academic lab")} · 2026</p>
                    <h3>{t(lab.name)}</h3>
                  </>
                }
              >
                <dl className="lab-details">
                  <div>
                    <dt>{t("Objective")}</dt>
                    <dd>{t(lab.problem)}</dd>
                  </div>
                  <div>
                    <dt>{t("My work")}</dt>
                    <dd>{t(lab.work)}</dd>
                  </div>
                  <div>
                    <dt>{t("Result and scope")}</dt>
                    <dd>{t(lab.result)}</dd>
                  </div>
                </dl>
                <ul className="tags" aria-label={t("Areas of work")}>
                  {lab.tags.map((tag) => (
                    <li key={tag}>{t(tag)}</li>
                  ))}
                </ul>
              </CardViews>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
