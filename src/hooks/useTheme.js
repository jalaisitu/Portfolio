import { useEffect, useLayoutEffect, useRef, useState } from "react";

function readPreference() {
  try {
    const value = localStorage.getItem("portfolio-theme");
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export default function useTheme() {
  const preference = useRef(readPreference());
  const [theme, setTheme] = useState(
    () =>
      preference.current ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  );

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#14241e" : "#f5f3eb";
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      if (!preference.current) setTheme(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    preference.current = next;
    setTheme(next);
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      /* La preferencia en memoria sigue funcionando. */
    }
  }

  return { theme, toggleTheme };
}
