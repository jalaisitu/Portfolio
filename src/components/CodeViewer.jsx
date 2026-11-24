import React, { useEffect, useState } from "react";
import { useI18n } from "../i18n";

const tokenPattern =
  /(\/\/.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:const|let|function|return|await|async|import|from|try|catch|new)\b|\b\d+\b)/g;

function highlight(line) {
  return line
    .split(tokenPattern)
    .filter(Boolean)
    .map((part, index) => {
      let kind = "";
      if (part.startsWith("//")) kind = "comment";
      else if (/^["']/.test(part)) kind = "string";
      else if (/^\d+$/.test(part)) kind = "number";
      else if (
        /^(const|let|function|return|await|async|import|from|try|catch|new)$/.test(
          part,
        )
      )
        kind = "keyword";
      return kind ? (
        <span className={`code-${kind}`} key={index}>
          {part}
        </span>
      ) : (
        part
      );
    });
}

export default function CodeViewer({ snippet }) {
  const { t } = useI18n();
  const [copyState, setCopyState] = useState("idle");

  useEffect(() => {
    if (copyState === "idle") return;
    const timeout = window.setTimeout(() => setCopyState("idle"), 2200);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <div className="code-viewer">
      <div className="code-viewer-head">
        <div>
          <span className="code-filename">{snippet.filename}</span>
          <span className="code-language">{snippet.language}</span>
        </div>
        <button type="button" onClick={copy} className="copy-snippet">
          {t(
            copyState === "copied"
              ? "Copied!"
              : copyState === "failed"
                ? "Copy failed"
                : "Copy snippet",
          )}
        </button>
      </div>
      <p className="code-status">{t(snippet.status)}</p>
      <div
        className="code-scroll"
        tabIndex={0}
        aria-label={t("Scrollable source code")}
        data-lenis-prevent
      >
        <pre>
          <code>
            {snippet.code.split("\n").map((line, index) => (
              <span className="code-line" key={index}>
                <span className="code-line-number" aria-hidden="true">
                  {index + 1}
                </span>
                <span>{highlight(line)}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
      {snippet.url && (
        <a
          className="code-source-link"
          href={snippet.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Open full source")} ↗
        </a>
      )}
      <span className="sr-only" role="status" aria-live="polite">
        {copyState === "copied"
          ? t("Snippet copied to clipboard")
          : copyState === "failed"
            ? t("Could not copy snippet")
            : ""}
      </span>
    </div>
  );
}
