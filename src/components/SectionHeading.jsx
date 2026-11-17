import React from "react";
import Reveal from "./Reveal";

export default function SectionHeading({ id, number, label, title, aside }) {
  return (
    <Reveal className="section-head">
      <div>
        <p className="eyebrow">
          {number} / {label}
        </p>
        <h2 id={id}>{title}</h2>
      </div>
      {aside && <p className="section-aside">{aside}</p>}
    </Reveal>
  );
}
