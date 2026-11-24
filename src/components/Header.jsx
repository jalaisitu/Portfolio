import React from "react";
import { useI18n } from "../i18n";
import { changeWithTransition } from "../utils/viewTransition";

export default function Header({ theme, toggleTheme }) {
  const { language, changeLanguage, t } = useI18n();

  return (
    <header className="shell topbar">
      <a className="header-name" href="#main">
        Jalal Hazi Miah
      </a>
      <nav aria-label={t("Main navigation")}>
        <a href="#projects">{t("Projects")}</a>
        <a href="#about">{t("About me")}</a>
        <a href="#contact" className="nav-contact">
          {t("Contact")} <span aria-hidden="true">↗</span>
        </a>
        <div
          className="language-picker"
          role="group"
          aria-label={t("Language")}
        >
          {["en", "ca", "es"].map((code) => (
            <button
              key={code}
              type="button"
              lang={code}
              aria-label={{ en: "English", ca: "Català", es: "Español" }[code]}
              aria-pressed={language === code}
              onClick={(event) => {
                if (language !== code)
                  changeWithTransition(event, () => changeLanguage(code));
              }}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={(event) => changeWithTransition(event, toggleTheme)}
          aria-label={t(
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
          )}
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </nav>
    </header>
  );
}
