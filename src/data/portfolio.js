// Verifiable content. Add personal technical contributions only after they are confirmed.
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
    kind: "Team project · Swiss AI Weeks 2026",
    description:
      "A copilot that classifies support tickets and helps teams review suggested answers using reference documentation.",
    tags: ["React", "TypeScript", "Python", "FastAPI", "RAG"],
    problem:
      "Support teams need to classify requests and find relevant information before proposing a solution.",
    solution:
      "The prototype combines ticket triage, retrieval of previous cases and AI-assisted answers. Analysts can review and edit every suggestion.",
    role: "I took part in a three-person team for the Swiss Life challenge. The architecture described here belongs to the team project.",
    decisions:
      "According to the team README, the frontend uses React and TypeScript, while the backend uses FastAPI. Suggestions are generated with Azure OpenAI.",
    result:
      "A hackathon prototype with public source code and setup instructions. It is not presented as a production service.",
    limitation:
      "Running the full project requires configuring the services listed in the repository. No public live demo is currently available.",
    evidence: {
      label: "Code and documentation",
      url: "https://github.com/sOdreams/swiss-AI-Support-forOperational-Service-Desk",
    },
  },
  {
    id: "cangur",
    name: "Cangur",
    kind: "Team project · FME Datathon 2026",
    description:
      "An offline, locally powered AI maths tutor designed to guide students through problems step by step.",
    tags: ["Arduino UNO Q", "Local AI", "Prototyping"],
    problem:
      "Provide guidance for solving maths problems without relying on an internet connection.",
    solution:
      "A tutor prototype built on Arduino UNO Q that provides hints to support students as they work through exercises.",
    role: "I collaborated with Team Resolva on the prototype and helped prepare the presentation for the jury.",
    decisions:
      "The project explores running AI locally on physical hardware. The presentation documents the team's proposal.",
    result:
      "The prototype was presented to the FME Datathon 2026 jury. The team presentation is available below.",
    limitation:
      "There is no web demo. The repository link previously provided is no longer accessible, so the presentation remains the available evidence.",
    evidence: {
      label: "View presentation (PDF)",
      url: "/cangur-presentation.pdf",
    },
  },
  {
    id: "classifier",
    name: "Image Classifier",
    kind: "Individual project · Research 2024–2025",
    description:
      "In-browser image classification with confidence scores that make the model's predictions easier to interpret.",
    tags: ["JavaScript", "TensorFlow.js", "MobileNet"],
    problem:
      "Show what a model predicts from an image and help users understand how confident it is in that answer.",
    solution:
      "A browser application that classifies images and displays a confidence score for each prediction.",
    role: "I built the application, tested it with different images and documented its limitations.",
    decisions:
      "I used TensorFlow.js and MobileNet to run classification in the browser, then added prediction confidence to the interface.",
    result:
      "Testing exposed model failures and made its uncertainty visible to the user.",
    limitation:
      "I do not publish accuracy figures without a reproducible evaluation. The source code and demo are not yet linked from this portfolio.",
  },
  {
    id: "portfolio",
    name: "This portfolio",
    kind: "Frontend · React",
    description:
      "The site you are exploring: reusable components, persistent themes, accessible navigation and a local chatbot with no external API.",
    tags: ["React", "Responsive CSS", "Accessibility", "Node test"],
    problem:
      "Present projects and evidence clearly, quickly and accessibly across mobile and desktop devices.",
    solution:
      "A React application with expandable technical case studies, direct contact links, light and dark themes, and local answers about my profile.",
    role: "This portfolio brings together my work and projects. The current interface is an interactive example of the behaviours described here.",
    decisions:
      "Content is separated from components. Animations respect reduced-motion preferences, while the chatbot works without external requests and includes tests for its rules.",
    result:
      "You can test the theme, suggested questions, Escape-key behaviour and keyboard navigation directly on this page.",
    limitation:
      "The chatbot uses prepared answers rather than generative AI. I do not claim performance metrics without measuring them.",
    live: true,
  },
];

export const labs = [
  {
    id: "ftp",
    name: "FTP service security with Metasploit Framework",
    problem: "Assess the security of FTP services in a lab environment.",
    work: "I used msfconsole, the Metasploit Framework console, to analyse the FTP service and study potential vulnerabilities.",
    result:
      "I documented recommendations for securing the service. The report is not published in this portfolio.",
    tags: ["FTP", "Metasploit Framework", "msfconsole"],
  },
  {
    id: "sql",
    name: "SQL injection vulnerability analysis",
    problem:
      "Study the risks of SQL injection in a purpose-built training application.",
    work: "I analysed SQL injection vulnerabilities and their potential impact on database access in a training application.",
    result:
      "I documented the lab findings and studied input validation as a protective measure.",
    tags: ["SQL injection", "Input validation", "Data security"],
  },
];

export const skills = [
  {
    number: "01",
    name: "Frontend development",
    text: "Interfaces and web application logic. React is used in the support project and throughout this portfolio.",
    tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"],
  },
  {
    number: "02",
    name: "Data and tools",
    text: "Tools used across AI prototypes, academic research and collaborative software projects.",
    tags: ["Git", "Python", "SQL", "TensorFlow", "pandas", "NumPy"],
  },
  {
    number: "03",
    name: "Teamwork",
    text: "Experience in FME Datathon and Swiss AI Weeks, including prototype testing and jury presentations.",
    tags: ["Collaboration", "Hackathons", "Documentation", "Presentations"],
  },
];
