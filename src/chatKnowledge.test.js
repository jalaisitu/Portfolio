import test from "node:test";
import assert from "node:assert/strict";
import { findAnswer } from "./chatKnowledge.js";

test("distinguishes professional experience from age", () => {
  const answer = findAnswer("How many years of experience do you have?").answer;
  assert.match(answer, /professional experience/);
  assert.doesNotMatch(answer, /19 years old/);
});

test("answers direct questions about age", () => {
  assert.match(findAnswer("How old are you?").answer, /19 years old/);
});

test("SQL assessment takes priority over general security", () => {
  const answer = findAnswer("What did you do in the SQL security lab?").answer;
  assert.match(answer, /SQL injection/);
  assert.doesNotMatch(answer, /FTP/);
});

test("normalises case, accents and decomposed Unicode", () => {
  assert.match(
    findAnswer("¿QUÉ TECNOLOGÍAS UTILIZAS?".normalize("NFD")).answer,
    /JavaScript/,
  );
  assert.match(findAnswer("What is your passion?").answer, /my passion/);
});

test("avoids matches inside unrelated words", () => {
  assert.match(
    findAnswer("Do you play chess?").answer,
    /do not have a prepared answer/,
  );
});

test("does not invent availability or internship details", () => {
  assert.match(
    findAnswer("Are you available for an internship?").answer,
    /not currently published/,
  );
});

test("contact includes the email and a valid section link", () => {
  const answer = findAnswer("How can I contact you?");
  assert.match(answer.answer, /jalailsahakter@gmail.com/);
  assert.equal(answer.link[1], "#contact");
});

test("Cangur offers the presentation without inventing a technical role", () => {
  assert.match(findAnswer("Tell me about Cangur").answer, /team presentation/);
});

test("unknown, empty or invalid input does not cause errors", () => {
  assert.match(
    findAnswer("Can you cook?").answer,
    /do not have a prepared answer/,
  );
  assert.match(findAnswer("   ").answer, /Type a question/);
  assert.match(findAnswer(null).answer, /Type a question/);
});
