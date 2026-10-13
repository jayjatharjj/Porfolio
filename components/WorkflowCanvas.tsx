"use client";

import { useCallback, useEffect, useRef } from "react";
import { flow } from "@/data/profile";

const SVG_NS = "http://www.w3.org/2000/svg";

/** n8n-style canvas: nodes joined by animated bezier wires, laid out as a snake. */
export default function WorkflowCanvas() {
  const flowRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const wire = useCallback(() => {
    const host = flowRef.current?.parentElement;
    const svg = svgRef.current;
    if (!host || !svg) return;
    const nodes = [...host.querySelectorAll<HTMLElement>(".node")];
    const h = host.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${h.width} ${h.height}`);

    const box = (n: HTMLElement) => {
      const r = n.getBoundingClientRect();
      return {
        l: r.left - h.left,
        r: r.right - h.left,
        t: r.top - h.top,
        b: r.bottom - h.top,
        cx: r.left + r.width / 2 - h.left,
        cy: r.top + r.height / 2 - h.top,
      };
    };

    const frag = document.createDocumentFragment();
    const add = (name: string, attrs: Record<string, string>) => {
      const el = document.createElementNS(SVG_NS, name);
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
      frag.appendChild(el);
    };
    const dots: [number, number][] = [];

    for (let i = 0; i < nodes.length - 1; i++) {
      const a = box(nodes[i]);
      const b = box(nodes[i + 1]);
      let x1: number, y1: number, x2: number, y2: number, d: string;
      if (Math.abs(a.cy - b.cy) < 4) {
        const fwd = b.cx > a.cx;
        x1 = fwd ? a.r : a.l;
        x2 = fwd ? b.l : b.r;
        y1 = a.cy;
        y2 = b.cy;
        const m = (x2 - x1) / 2;
        d = `M${x1},${y1} C${x1 + m},${y1} ${x2 - m},${y2} ${x2},${y2}`;
      } else {
        x1 = a.cx;
        y1 = a.b;
        x2 = b.cx;
        y2 = b.t;
        const m = (y2 - y1) / 2;
        d = `M${x1},${y1} C${x1},${y1 + m} ${x2},${y2 - m} ${x2},${y2}`;
      }
      add("path", { d });
      add("path", { d, class: "flowline" });
      dots.push([x1, y1], [x2, y2]);
    }
    for (const [cx, cy] of dots) add("circle", { cx: String(cx), cy: String(cy), r: "5" });

    svg.replaceChildren(frag);
  }, []);

  useEffect(() => {
    wire();
    const ro = new ResizeObserver(wire);
    if (flowRef.current?.parentElement) ro.observe(flowRef.current.parentElement);
    window.addEventListener("resize", wire);
    document.fonts?.ready.then(wire);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", wire);
    };
  }, [wire]);

  return (
    <div className="canvas" aria-label="Claim processing workflow built at Bajaj General Insurance">
      <div className="bar">
        <b />
        <b />
        <b />
        <em>claim-processing · workflow</em>
        <span className="run">● Active</span>
      </div>
      <svg id="wires" ref={svgRef} aria-hidden="true" />
      <div className="flow" ref={flowRef}>
        {flow.map((n, i) => (
          <div className="node" data-i={i} key={n.title}>
            <div className="ic" style={{ background: n.color }}>
              {n.icon}
            </div>
            <div>
              <h4>{n.title}</h4>
              <small>{n.sub}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
