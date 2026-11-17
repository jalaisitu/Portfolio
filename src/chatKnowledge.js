import { profile } from "./data/portfolio.js";

const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const contactLink = ["Contactar conmigo", "#contact"];

// Las preguntas específicas se evalúan antes que los temas generales.
const topics = [
  {
    pattern: /\b(experiencia|seniority|senior|junior)\b/,
    answer:
      "Soy estudiante de desarrollo web. Mi experiencia descrita en el portfolio incluye proyectos académicos y prototipos en equipo. No tengo publicada una cifra de años de experiencia profesional.",
    link: ["Ver mis proyectos", "#projects"],
  },
  {
    pattern:
      /\b(disponibilidad|disponible|incorporacion|salario|remoto|jornada|curriculum|cv|practicas)\b/,
    answer:
      "Esos detalles profesionales todavía no están publicados en el portfolio. Puedes escribirme para consultar mi disponibilidad, mi CV o mi proyecto de prácticas.",
    link: contactLink,
  },
  {
    pattern: /\b(ftp|auditoria|metasploit|msfconsole)\b/,
    answer:
      "Estudié la seguridad de servicios FTP con msfconsole, la consola de Metasploit Framework. Analicé posibles vulnerabilidades en un laboratorio y documenté recomendaciones para asegurar el servicio.",
    link: ["Ver el laboratorio FTP", "#cybersecurity"],
  },
  {
    pattern: /\b(sql|inyeccion|evaluacion de seguridad)\b/,
    answer:
      "Analicé vulnerabilidades de inyección SQL en una aplicación de entrenamiento y sus posibles efectos sobre el acceso a la base de datos. Documenté los hallazgos y estudié la validación de entradas como medida de protección.",
    link: ["Ver el laboratorio de seguridad web", "#cybersecurity"],
  },
  {
    pattern: /\b(cangur|arduino|matematicas)\b/,
    answer:
      "Colaboré con Team Resolva en Cangur, un prototipo de tutor de matemáticas con IA local sobre Arduino UNO Q, y ayudé con la presentación al jurado. Puedes consultar la presentación del equipo; no hay demo web disponible.",
    link: ["Ver Cangur", "#projects"],
  },
  {
    pattern: /\b(support|soporte|swiss|agente|copilot)\b/,
    answer:
      "Participé en un equipo de tres personas en AI Support Agent. El prototipo ayuda a clasificar solicitudes de soporte y revisar respuestas con documentación. El repositorio del equipo describe un frontend React/TypeScript y un backend FastAPI. Mi contribución técnica detallada aún no está publicada.",
    link: ["Ver el caso técnico", "#projects"],
  },
  {
    pattern: /\b(imagen|imagenes|image|classifier|clasificador|mobilenet)\b/,
    answer:
      "Construí un clasificador de imágenes en el navegador con JavaScript, TensorFlow.js y MobileNet. Probé distintas imágenes y añadí la confianza de las predicciones para ayudar a interpretar las respuestas. Su demo y su código todavía no están enlazados.",
    link: ["Ver Image Classifier", "#projects"],
  },
  {
    pattern: /\b(seguridad|ciberseguridad|security|ciber)\b/,
    answer:
      "Mis laboratorios de ciberseguridad incluyen el análisis de vulnerabilidades de inyección SQL y la seguridad de servicios FTP con Metasploit Framework y msfconsole.",
    link: ["Ver mis laboratorios", "#cybersecurity"],
  },
  {
    pattern: /\b(edad|anos|naciste|nacimiento|2007|cumpleanos)\b/,
    answer: "Tengo 19 años y nací en 2007.",
  },
  {
    pattern: /\b(color|verde)\b/,
    answer:
      "Mi color favorito es el verde; por eso tiene protagonismo en mi portfolio.",
  },
  {
    pattern: /\b(gym|gimnasio|aficion|aficiones|hobby|hobbies|tiempo libre)\b/,
    answer:
      "Me gusta ir al gimnasio. También disfruto programando y explorando las ciencias de la computación: es mi pasión.",
  },
  {
    pattern:
      /\b(pasion|programacion|computacion|informatica|motiva|apasiona)\b/,
    answer:
      "La programación y las ciencias de la computación son mi pasión. Me gusta experimentar y comprobar cómo funcionan mis proyectos con ejemplos reales.",
  },
  {
    pattern:
      /\b(contacto|contactar|contactarte|correo|email|linkedin|github|contratar|escribirte)\b/,
    answer: `Puedes escribirme a ${profile.email}, contactar conmigo por LinkedIn o ver mi trabajo en GitHub.`,
    link: contactLink,
  },
  {
    pattern: /\b(proyecto|proyectos|trabajo|portfolio|demo|demos)\b/,
    answer:
      "Mis proyectos incluyen AI Support Agent, Cangur, Image Classifier y este portfolio React. También tengo laboratorios académicos de ciberseguridad. En cada caso indico la evidencia disponible y sus limitaciones.",
    link: ["Explorar proyectos y evidencias", "#projects"],
  },
  {
    pattern:
      /\b(habilidad|habilidades|tecnologia|tecnologias|skill|skills|herramientas|react|javascript|python|css|html|typescript)\b/,
    answer:
      "Utilizo HTML, CSS, JavaScript, TypeScript, React, Git, Python, SQL y herramientas de IA. En el portfolio puedes ver qué tecnologías corresponden a cada proyecto; no todas implican experiencia profesional.",
    link: ["Ver habilidades con contexto", "#skills"],
  },
  {
    pattern:
      /\b(quien|sobre|jalal|estudias|estudia|biografia|barcelona|presentate)\b/,
    answer:
      "Soy Jalal Hazi Miah, estudiante de desarrollo web en Barcelona. Me interesan el frontend y los prototipos de IA. En mis proyectos pruebo ideas, observo sus limitaciones y busco cómo explicarlas mejor en la interfaz.",
    link: ["Leer sobre mí", "#about"],
  },
  {
    pattern: /\b(hola|buenas|hello)\b/,
    answer:
      "¡Hola! Puedes preguntarme por mis proyectos, habilidades, formación o contacto. Este chat responde a temas preparados, sin IA generativa.",
  },
  {
    pattern: /\b(gracias)\b/,
    answer:
      "¡Gracias por visitar mi portfolio! Puedes escribirme si quieres conocer más detalles de mi trabajo.",
    link: contactLink,
  },
];

export function findAnswer(question) {
  if (typeof question !== "string" || !question.trim()) {
    return { answer: "Escribe una pregunta o elige una de las sugerencias." };
  }
  const text = normalize(question);
  return (
    topics.find((topic) => topic.pattern.test(text)) ?? {
      answer:
        "No tengo una respuesta preparada para esa pregunta. Puedo hablar de mis proyectos, habilidades y formación. Para otros detalles, puedes escribirme directamente.",
      link: contactLink,
    }
  );
}
