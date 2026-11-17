// Contenido verificable. Añade las contribuciones técnicas personales cuando estén confirmadas.
export const profile = {
  name: "Jalal Hazi Miah",
  email: "jalailsahakter@gmail.com",
  github: "https://github.com/jalaisitu",
  linkedin: "https://www.linkedin.com/in/jalal-hazi-miah-619590335/",
};

export const projects = [
  {
    id: "support",
    name: "AI Support Agent",
    kind: "Proyecto en equipo · Swiss AI Weeks 2026",
    description:
      "Un copiloto para clasificar tickets de soporte y ayudar al equipo a revisar respuestas con documentación de referencia.",
    tags: ["React", "TypeScript", "Python", "FastAPI", "RAG"],
    problem:
      "Los equipos de soporte necesitan clasificar solicitudes y encontrar información relevante antes de proponer una solución.",
    solution:
      "El prototipo combina triaje, recuperación de casos anteriores y respuestas asistidas. El analista puede revisar y modificar las sugerencias.",
    role: "Participé en un equipo de tres personas en el reto de Swiss Life. La arquitectura descrita aquí corresponde al proyecto del equipo.",
    decisions:
      "Según el README del equipo, el frontend utiliza React y TypeScript; el backend, FastAPI. La generación de sugerencias utiliza Azure OpenAI.",
    result:
      "Prototipo de hackathon con código público e instrucciones de ejecución. No se presenta como un servicio en producción.",
    limitation:
      "La ejecución completa requiere configurar los servicios indicados en el repositorio. No hay una demo pública enlazada.",
    evidence: {
      label: "Código y documentación",
      url: "https://github.com/sOdreams/swiss-AI-Support-forOperational-Service-Desk",
    },
  },
  {
    id: "cangur",
    name: "Cangur",
    kind: "Proyecto en equipo · Datathon FME 2026",
    description:
      "Un tutor de matemáticas con IA local para acompañar el aprendizaje paso a paso, incluso sin conexión.",
    tags: ["Arduino UNO Q", "IA local", "Prototipado"],
    problem:
      "Ofrecer orientación para resolver problemas de matemáticas sin depender de una conexión a internet.",
    solution:
      "Un prototipo de tutor sobre Arduino UNO Q que propone pistas para acompañar la resolución de ejercicios.",
    role: "Colaboré con Team Resolva en el prototipo y ayudé a preparar la presentación para el jurado.",
    decisions:
      "El proyecto explora la ejecución local de IA en una plataforma física. La presentación documenta la propuesta del equipo.",
    result:
      "Prototipo presentado al jurado de Datathon FME 2026. La presentación se puede consultar a continuación.",
    limitation:
      "No hay demo web. El enlace al repositorio proporcionado anteriormente no está accesible; se mantiene la presentación como evidencia disponible.",
    evidence: {
      label: "Ver presentación (PDF)",
      url: "/cangur-presentation.pdf",
    },
  },
  {
    id: "classifier",
    name: "Image Classifier",
    kind: "Proyecto individual · Investigación 2024–2025",
    description:
      "Clasificación de imágenes en el navegador, con puntuaciones de confianza para interpretar las predicciones del modelo.",
    tags: ["JavaScript", "TensorFlow.js", "MobileNet"],
    problem:
      "Mostrar qué predice un modelo sobre una imagen y permitir interpretar cuánta confianza tiene en su respuesta.",
    solution:
      "Una aplicación de navegador que clasifica imágenes y muestra la confianza de cada predicción.",
    role: "Construí la aplicación, la probé con distintas imágenes y documenté sus limitaciones.",
    decisions:
      "Utilicé TensorFlow.js y MobileNet para ejecutar la clasificación en el navegador. Añadí la confianza de las predicciones a la interfaz.",
    result:
      "La experimentación permitió identificar fallos del modelo y hacer visible su incertidumbre al usuario.",
    limitation:
      "No se publican cifras de precisión sin una evaluación reproducible. El código y la demo de este proyecto todavía no están disponibles en el portfolio.",
  },
  {
    id: "portfolio",
    name: "Este portfolio",
    kind: "Frontend · React",
    description:
      "La web que estás explorando: componentes reutilizables, temas persistentes, navegación accesible y un chat local sin API.",
    tags: ["React", "CSS responsive", "Accesibilidad", "Node test"],
    problem:
      "Presentar proyectos y evidencias de trabajo de forma legible, rápida y accesible desde móvil y escritorio.",
    solution:
      "Una aplicación React con casos técnicos desplegables, contacto directo, tema claro/oscuro y respuestas locales sobre mi perfil.",
    role: "Este portfolio reúne mi contenido y mis proyectos. La interfaz actual sirve como ejemplo interactivo de los comportamientos descritos.",
    decisions:
      "Los datos están separados de los componentes. Las animaciones respetan movimiento reducido; el chat funciona sin llamadas externas y tiene pruebas de sus reglas.",
    result:
      "Puedes comprobar el tema, las preguntas sugeridas, el cierre con Escape y la navegación por teclado directamente en esta página.",
    limitation:
      "El chat es una guía de respuestas preparadas, no una IA generativa. No se atribuyen métricas de rendimiento sin una medición.",
    live: true,
  },
];

export const labs = [
  {
    id: "ftp",
    name: "Seguridad de servicios FTP con Metasploit Framework",
    problem:
      "Evaluar la seguridad de servicios FTP en un entorno de laboratorio.",
    work: "Utilicé msfconsole, la consola de Metasploit Framework, para analizar la seguridad del servicio FTP y estudiar sus posibles vulnerabilidades.",
    result:
      "Documenté recomendaciones para asegurar el servicio. El informe no está publicado en este portfolio.",
    tags: ["FTP", "Metasploit Framework", "msfconsole"],
  },
  {
    id: "sql",
    name: "Análisis de vulnerabilidades de inyección SQL",
    problem:
      "Estudiar los riesgos de inyección SQL en una aplicación de entrenamiento.",
    work: "Analicé vulnerabilidades de inyección SQL y sus posibles efectos sobre el acceso a la base de datos en una aplicación de entrenamiento.",
    result:
      "Documenté los hallazgos del laboratorio y estudié la validación de entradas como medida de protección.",
    tags: ["Inyección SQL", "Validación de entradas", "Seguridad de datos"],
  },
];

export const skills = [
  {
    number: "01",
    name: "Desarrollo frontend",
    text: "Interfaz y lógica de aplicaciones web. React aparece en el proyecto de soporte y en este portfolio.",
    tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"],
  },
  {
    number: "02",
    name: "Datos y herramientas",
    text: "Herramientas utilizadas en prototipos de IA, investigación académica y colaboración con código.",
    tags: ["Git", "Python", "SQL", "TensorFlow", "pandas", "NumPy"],
  },
  {
    number: "03",
    name: "Trabajo en equipo",
    text: "Participación en Datathon FME y Swiss AI Weeks, pruebas de prototipos y presentaciones al jurado.",
    tags: ["Colaboración", "Hackathons", "Documentación", "Presentaciones"],
  },
];
