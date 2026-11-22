export const concepts = {
  support: {
    label: "Sample ticket",
    prompt: "“I can’t sign in to my account.”",
    steps: [
      {
        control: "Triage",
        result: "Account access",
        detail: "The agent assigns the ticket to the right category.",
      },
      {
        control: "Find a match",
        result: "Related case found",
        detail: "A previous sign-in case gives the analyst a starting point.",
      },
      {
        control: "Review reply",
        result: "Draft ready for review",
        detail:
          "The analyst checks and edits the suggested reply before sending it.",
      },
    ],
  },
  cangur: {
    label: "Offline maths exercise",
    prompt: "What is x if 2x + 3 = 11?",
    steps: [
      {
        control: "Start",
        result: "2x + 3 = 11",
        detail: "The tutor breaks the problem down one step at a time.",
      },
      {
        control: "Hint 1",
        result: "2x = 8",
        detail: "Subtract 3 from both sides.",
      },
      {
        control: "Hint 2",
        result: "x = 4",
        detail: "Divide both sides by 2. The tutor can guide this offline.",
      },
    ],
  },
  classifier: {
    label: "Illustrative confidence scores",
    prompt: "How confident is the prediction?",
    steps: [
      {
        control: "Clear photo",
        result: "Cat",
        detail: "The model assigns a high score to one label.",
        scores: [
          { label: "Cat", value: 91 },
          { label: "Dog", value: 6 },
        ],
      },
      {
        control: "Blurry photo",
        result: "Cat (uncertain)",
        detail: "Similar scores show why the top prediction needs checking.",
        scores: [
          { label: "Cat", value: 48 },
          { label: "Dog", value: 43 },
        ],
      },
    ],
  },
  portfolio: {
    label: "Theme preview",
    prompt: "One interface, two colour themes.",
    steps: [
      {
        control: "Light",
        result: "Light theme",
        detail: "Dark green text on an ivory surface.",
        palette: "light",
      },
      {
        control: "Dark",
        result: "Dark theme",
        detail: "Ivory text on a deep green surface.",
        palette: "dark",
      },
    ],
  },
  ftp: {
    label: "Transport security comparison",
    prompt: "What does a file transfer expose?",
    steps: [
      {
        control: "Plain FTP",
        result: "Unencrypted",
        lanes: ["Readable credentials", "Readable file"],
        detail:
          "Someone who can observe the connection could read credentials and files.",
      },
      {
        control: "SFTP",
        result: "Encrypted in transit",
        lanes: ["Encrypted network traffic"],
        detail:
          "SFTP uses SSH to protect credentials and file contents in transit.",
      },
    ],
  },
  sql: {
    label: "Defensive comparison",
    prompt: "A search box sends a value to the database.",
    steps: [
      {
        control: "Concatenated query",
        result: "Query and input mixed",
        lanes: ["Query instructions + search value"],
        detail:
          "Building query text from user input can change how the database interprets it.",
      },
      {
        control: "Parameterised query",
        result: "Query and data separated",
        lanes: ["Query instructions", "Search value"],
        detail:
          "Bound parameters keep the search value separate from the query instructions.",
      },
    ],
  },
};
