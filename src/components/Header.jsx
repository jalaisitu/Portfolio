import React from "react";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="shell topbar">
      <nav aria-label="Main navigation">
        <a href="#projects">Projects</a>
        <a href="#about">About me</a>
        <a href="#contact" className="nav-contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </nav>
    </header>
  );
}
