import React from "react";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="shell topbar">
      <nav aria-label="Navegación principal">
        <a href="#projects">Proyectos</a>
        <a href="#about">Sobre mí</a>
        <a href="#contact" className="nav-contact">
          Contacto <span aria-hidden="true">↗</span>
        </a>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Activar tema ${theme === "dark" ? "claro" : "oscuro"}`}
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </nav>
    </header>
  );
}
