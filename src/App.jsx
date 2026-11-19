import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Cybersecurity from "./components/Cybersecurity";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import ScrollEffects from "./components/ScrollEffects";
import SmoothScroll from "./components/SmoothScroll";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ScrollEffects />
      <SmoothScroll />
      <div className="scroll-rail" aria-hidden="true">
        <span />
      </div>
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
          Jalal Hazi Miah
          <br />
          CS | Full-Stack Developer
        </p>
      </footer>
      <Chatbot />
    </>
  );
}
