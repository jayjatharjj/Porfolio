"use client";

import type { PointerEvent } from "react";
import type { Work } from "@/data/profile";
import Reveal from "./Reveal";

export default function WorkCard({ item }: { item: Work }) {
  const spotlight = (e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Reveal as="article" className="card" onPointerMove={spotlight}>
      <span className="num">
        {item.num} — {item.tag}
      </span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <div className="metric">
        {item.metrics.map(([value, label]) => (
          <div key={label}>
            <b>{value}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
