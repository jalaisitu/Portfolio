import test from "node:test";
import assert from "node:assert/strict";
import { findAnswer } from "./chatKnowledge.js";

test("distingue experiencia profesional de edad aunque la pregunta contenga años", () => {
  const answer = findAnswer("¿Cuántos años de experiencia tienes?").answer;
  assert.match(answer, /experiencia profesional/);
  assert.doesNotMatch(answer, /Tengo 19/);
});

test("mantiene la edad para preguntas sobre edad", () => {
  assert.match(findAnswer("¿Cuántos años tienes?").answer, /19 años/);
});

test("la evaluación SQL tiene prioridad sobre seguridad general", () => {
  const answer = findAnswer(
    "¿Qué hiciste en la evaluación de seguridad SQL?",
  ).answer;
  assert.match(answer, /inyección SQL/);
  assert.doesNotMatch(answer, /FTP/);
});

test("normaliza tildes, mayúsculas y Unicode descompuesto", () => {
  assert.match(
    findAnswer("¿QUÉ TECNOLOGÍAS UTILIZAS?".normalize("NFD")).answer,
    /JavaScript/,
  );
  assert.match(findAnswer("¿Cuál es tu pasión?").answer, /mi pasión/);
});

test("evita coincidencias dentro de otras palabras", () => {
  assert.match(
    findAnswer("¿Qué opinas de los humanos?").answer,
    /No tengo una respuesta/,
  );
});

test("no inventa información de disponibilidad ni del proyecto de prácticas", () => {
  assert.match(
    findAnswer("¿Tienes disponibilidad para prácticas?").answer,
    /todavía no están publicados/,
  );
});

test("el contacto incluye el email y un enlace válido a la sección", () => {
  const answer = findAnswer("¿Cómo puedo contactar contigo?");
  assert.match(answer.answer, /jalailsahakter@gmail.com/);
  assert.equal(answer.link[1], "#contact");
});

test("Cangur ofrece la presentación, sin atribuir un rol técnico desconocido", () => {
  assert.match(
    findAnswer("Cuéntame sobre Cangur").answer,
    /presentación del equipo/,
  );
});

test("entrada desconocida, vacía o inválida no produce errores", () => {
  assert.match(findAnswer("¿Sabes cocinar?").answer, /No tengo una respuesta/);
  assert.match(findAnswer("   ").answer, /Escribe una pregunta/);
  assert.match(findAnswer(null).answer, /Escribe una pregunta/);
});
