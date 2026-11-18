import { profile } from "./data/portfolio.js";

const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const contactLink = ["Contact me", "#contact"];

// Specific questions are evaluated before broader topics.
const topics = [
  {
    pattern: /\b(experience|seniority|senior|junior|experiencia)\b/,
    answer:
      "I am a web development student. The experience shown in my portfolio comes from academic projects and team prototypes. I do not claim a specific number of years of professional experience.",
    link: ["View my projects", "#projects"],
  },
  {
    pattern:
      /\b(availability|available|salary|remote|full.?time|part.?time|resume|cv|internship|disponibilidad|practicas)\b/,
    answer:
      "Those professional details are not currently published in my portfolio. You can contact me to ask about my availability, CV or internship project.",
    link: contactLink,
  },
  {
    pattern: /\b(ftp|audit|metasploit|msfconsole|auditoria)\b/,
    answer:
      "I studied FTP service security using msfconsole, the Metasploit Framework console. I analysed potential vulnerabilities in a lab environment and documented recommendations for securing the service.",
    link: ["View the FTP lab", "#cybersecurity"],
  },
  {
    pattern: /\b(sql|injection|inyeccion|web security assessment)\b/,
    answer:
      "I analysed SQL injection vulnerabilities in a training application and their potential impact on database access. I documented the findings and studied input validation as a protective measure.",
    link: ["View the web security lab", "#cybersecurity"],
  },
  {
    pattern: /\b(cangur|arduino|math|maths|matematicas)\b/,
    answer:
      "I collaborated with Team Resolva on Cangur, a locally powered AI maths tutor prototype built on Arduino UNO Q, and helped prepare the jury presentation. The team presentation is available, but there is no web demo.",
    link: ["View Cangur", "#projects"],
  },
  {
    pattern: /\b(support|swiss|agent|copilot|soporte|agente)\b/,
    answer:
      "I took part in a three-person team that built AI Support Agent. The prototype helps classify support requests and review answers using documentation. The team repository describes a React and TypeScript frontend with a FastAPI backend. My detailed technical contribution is not yet published.",
    link: ["View the technical case", "#projects"],
  },
  {
    pattern: /\b(image|images|classifier|mobilenet|imagen|clasificador)\b/,
    answer:
      "I built an in-browser image classifier with JavaScript, TensorFlow.js and MobileNet. I tested different images and added prediction confidence to make the results easier to interpret. Its demo and source code are not yet linked here.",
    link: ["View Image Classifier", "#projects"],
  },
  {
    pattern:
      /\b(security|cybersecurity|cyber|seguridad|ciberseguridad|ciber)\b/,
    answer:
      "My cybersecurity labs include SQL injection vulnerability analysis and FTP service security using Metasploit Framework and msfconsole.",
    link: ["View my security labs", "#cybersecurity"],
  },
  {
    pattern: /\b(age|old|born|birthday|2007|edad|anos|nacimiento)\b/,
    answer: "I am 19 years old and was born in 2007.",
  },
  {
    pattern: /\b(colou?r|green|verde)\b/,
    answer:
      "My favourite colour is green, which is why it plays such a prominent role in my portfolio.",
  },
  {
    pattern: /\b(gym|fitness|hobby|hobbies|free time|gimnasio|aficion)\b/,
    answer:
      "I enjoy going to the gym. I also love programming and exploring computer science—it is my passion.",
  },
  {
    pattern:
      /\b(passion|programming|computer science|computing|motivation|pasion|programacion|computacion|informatica)\b/,
    answer:
      "Programming and computer science are my passion. I enjoy experimenting and finding out how my projects behave through real examples.",
  },
  {
    pattern:
      /\b(contact|email|linkedin|github|hire|reach|write|contacto|correo|contratar)\b/,
    answer: `You can email me at ${profile.email}, connect with me on LinkedIn or explore my work on GitHub.`,
    link: contactLink,
  },
  {
    pattern:
      /\b(project|projects|work|portfolio|demo|proyecto|proyectos|trabajo)\b/,
    answer:
      "My projects include AI Support Agent, Cangur, Image Classifier and this React portfolio. I also have academic cybersecurity labs. Each case clearly states the available evidence and its limitations.",
    link: ["Explore projects and evidence", "#projects"],
  },
  {
    pattern:
      /\b(skill|skills|technology|technologies|tools|react|javascript|python|css|html|typescript|habilidad|tecnologia|tecnologias|herramientas)\b/,
    answer:
      "I use HTML, CSS, JavaScript, TypeScript, React, Git, Python, SQL and AI tools. The portfolio shows which technologies belong to each project; not all of them represent professional experience.",
    link: ["View skills in context", "#skills"],
  },
  {
    pattern:
      /\b(who|about|jalal|study|studying|biography|barcelona|introduce|quien|sobre|estudias|biografia|presentate)\b/,
    answer:
      "I am Jalal Hazi Miah, a web development student based in Barcelona. I am interested in frontend development and AI prototypes. Through my projects, I test ideas, observe their limitations and find clearer ways to explain them in the interface.",
    link: ["Read about me", "#about"],
  },
  {
    pattern: /\b(hello|hi|hey|hola|buenas)\b/,
    answer:
      "Hello! Ask me about my projects, skills, education or contact details. This chatbot uses prepared answers rather than generative AI.",
  },
  {
    pattern: /\b(thanks|thank you|gracias)\b/,
    answer:
      "Thanks for visiting my portfolio! Feel free to contact me if you would like to learn more about my work.",
    link: contactLink,
  },
];

export function findAnswer(question) {
  if (typeof question !== "string" || !question.trim()) {
    return { answer: "Type a question or choose one of the suggestions." };
  }

  const text = normalize(question);
  return (
    topics.find((topic) => topic.pattern.test(text)) ?? {
      answer:
        "I do not have a prepared answer for that question. I can talk about my projects, skills and education. For anything else, you can contact me directly.",
      link: contactLink,
    }
  );
}
