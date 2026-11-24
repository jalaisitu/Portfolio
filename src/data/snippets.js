// Only the portfolio excerpt is copied from this repository. The classifier
// example illustrates the documented approach until its original code is shared.
export const snippets = {
  portfolio: {
    filename: "src/hooks/useTheme.js",
    language: "JavaScript · React",
    status: "Excerpt from this portfolio",
    url: "https://github.com/jalaisitu/Portfolio/blob/main/src/hooks/useTheme.js",
    code: `function toggleTheme() {
  const next = theme === "dark" ? "light" : "dark";
  preference.current = next;
  setTheme(next);

  try {
    localStorage.setItem("portfolio-theme", next);
  } catch {
    /* La preferencia en memoria sigue funcionando. */
  }
}`,
  },
  classifier: {
    filename: "image-classifier.js",
    language: "JavaScript · TensorFlow.js",
    status: "Illustrative example · original source not linked",
    code: `import * as mobilenet from "@tensorflow-models/mobilenet";

async function classifyImage(imageElement) {
  const model = await mobilenet.load();
  const predictions = await model.classify(imageElement);

  return predictions.map((prediction) => ({
    label: prediction.className,
    confidence: Math.round(prediction.probability * 100),
  }));
}`,
  },
};
