import React from "react";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="shell about-grid">
        <Reveal>
          <p className="eyebrow">03 / SOBRE MÍ</p>
          <h2 id="about-title">
            Aprender haciendo.
            <br />
            <em>Y comprobando.</em>
          </h2>
          <p className="personal-note">
            Fuera del código: el gimnasio y el verde.
            <br />
            La programación y las ciencias de la computación son mi pasión.
          </p>
        </Reveal>
        <Reveal className="about-copy">
          <p className="lead">
            Al probar mi clasificador con distintas imágenes, vi que el modelo
            podía equivocarse. Añadí la confianza de las predicciones a la
            interfaz para ayudar a interpretar sus respuestas.
          </p>
          <p>
            Me interesa esa conexión entre lo que hace una aplicación y lo que
            entiende quien la usa. Estudio desarrollo web en Barcelona y
            practico con proyectos de frontend, IA y seguridad.
          </p>
          <p>
            En Datathon FME y Swiss AI Weeks trabajé con equipos para convertir
            una propuesta en un prototipo y explicar sus posibilidades y
            limitaciones.
          </p>
          <a className="text-link" href={profile.github}>
            Ver mi perfil en GitHub <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
