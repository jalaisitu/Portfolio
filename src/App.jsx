import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Cybersecurity from "./components/Cybersecurity";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <Cybersecurity />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="shell footer">
        <p>
          © {new Date().getFullYear()} Jalal Hazi Miah
          <br />
          Frontend development · Barcelona
        </p>
        <a href="#main">Back to top ↑</a>
      </footer>
      <Chatbot />
    </>
  );
}
