import React, { useEffect, useRef, useState } from "react";
import { findAnswer } from "../chatKnowledge";

const questions = [
  "¿Quién eres?",
  "¿Qué proyectos tienes?",
  "¿Qué tecnologías utilizas?",
  "¿Cómo puedo contactar?",
];
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "¡Hola! Soy Jalal. Pregúntame sobre mis proyectos, mis habilidades o lo que me apasiona. Este chat usa respuestas preparadas y no envía tus preguntas a ningún servidor.",
    },
  ]);
  const field = useRef(null);
  const trigger = useRef(null);
  const log = useRef(null);
  useEffect(() => {
    if (open) field.current?.focus();
  }, [open]);
  useEffect(() => {
    if (open) log.current.scrollTop = log.current.scrollHeight;
  }, [messages, open]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  const ask = (question) => {
    const text = question.trim().slice(0, 300);
    if (!text) return;
    const response = findAnswer(text);
    setMessages((previous) =>
      [
        ...previous,
        { text, user: true },
        { text: response.answer, link: response.link },
      ].slice(-40),
    );
    setInput("");
    field.current?.focus();
  };
  return (
    <aside className="chat-widget" aria-label="Chat local del portfolio">
      {open && (
        <section
          className="chat-panel"
          id="portfolio-chat"
          aria-labelledby="chat-title"
          onKeyDown={(event) => {
            if (event.key === "Escape") close();
          }}
        >
          <header className="chat-header">
            <div>
              <h2 id="chat-title">Conóceme un poco.</h2>
              <p>Jalal · respuestas locales</p>
            </div>
            <button onClick={close} aria-label="Cerrar chat">
              ×
            </button>
          </header>
          <div
            className="chat-messages"
            ref={log}
            role="log"
            aria-label="Conversación"
            aria-live="polite"
            aria-relevant="additions"
            tabIndex="0"
          >
            {messages.map((message, index) => (
              <p
                key={index}
                className={`chat-message ${message.user ? "chat-user" : ""}`}
              >
                <strong>{message.user ? "Tú" : "Jalal · chat local"}</strong>
                {message.text}
                {message.link && (
                  <a
                    href={message.link[1]}
                    onClick={() => {
                      close();
                      const target = document.querySelector(message.link[1]);
                      target?.setAttribute("tabindex", "-1");
                      target?.focus();
                    }}
                  >
                    {message.link[0]} ↗
                  </a>
                )}
              </p>
            ))}
          </div>
          <div className="chat-suggestions">
            {questions.map((question, i) => (
              <button key={question} onClick={() => ask(question)}>
                {["Sobre mí", "Proyectos", "Habilidades", "Contacto"][i]}
              </button>
            ))}
          </div>
          <form
            className="chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              ask(input);
            }}
          >
            <label className="sr-only" htmlFor="chat-input">
              Tu pregunta
            </label>
            <input
              ref={field}
              id="chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="¿Qué te gustaría saber?"
              maxLength={300}
              required
              autoComplete="off"
            />
            <button type="submit" aria-label="Enviar pregunta">
              ↗
            </button>
          </form>
        </section>
      )}
      <button
        ref={trigger}
        className="chat-launcher"
        aria-expanded={open}
        aria-controls={open ? "portfolio-chat" : undefined}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">✳</span> Pregúntame sobre mí
      </button>
    </aside>
  );
}
