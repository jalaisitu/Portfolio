import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const I18nContext = createContext(null);
const languages = ["en", "ca", "es"];

function savedLanguage() {
  try {
    const saved = localStorage.getItem("portfolio-language");
    return languages.includes(saved) ? saved : "en";
  } catch {
    return "en";
  }
}

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(savedLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "en"
        ? "Jalal Hazi Miah — Frontend development · React and JavaScript"
        : language === "ca"
          ? "Jalal Hazi Miah — Desenvolupament frontend · React i JavaScript"
          : "Jalal Hazi Miah — Desarrollo frontend · React y JavaScript";
  }, [language]);

  function changeLanguage(next) {
    if (!languages.includes(next)) return;
    setLanguage(next);
    try {
      localStorage.setItem("portfolio-language", next);
    } catch {
      // The selected language still works for this session.
    }
  }

  const t = (source) => translations[language]?.[source] ?? source;

  return (
    <I18nContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
