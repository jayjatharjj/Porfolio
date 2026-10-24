"use client";

import { useEffect } from "react";

/** Reading progress, copy buttons on code blocks, and the active TOC entry for a post. */
export default function PostEnhancer() {
  useEffect(() => {
    const article = document.querySelector<HTMLElement>(".prose");
    const bar = document.querySelector<HTMLElement>(".progress i");
    if (!article) return;

    // TOC is a sidebar on desktop (always open) and a collapsed "On this page" on mobile.
    const toc = document.querySelector<HTMLDetailsElement>(".toc details");
    if (toc && window.matchMedia("(min-width: 901px)").matches) toc.open = true;

    const onScroll = () => {
      const r = article.getBoundingClientRect();
      const done = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight)));
      if (bar) bar.style.transform = `scaleX(${done})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const buttons = [...article.querySelectorAll<HTMLElement>(".code")].map((frame) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "copy";
      btn.textContent = "Copy";
      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(frame.querySelector("pre")?.innerText ?? "");
          btn.textContent = "Copied";
        } catch {
          btn.textContent = "Failed";
        }
        setTimeout(() => (btn.textContent = "Copy"), 1500);
      });
      frame.append(btn);
      return btn;
    });

    const tocLinks = new Map(
      [...document.querySelectorAll<HTMLAnchorElement>(".toc a")].map((a) => [a.hash.slice(1), a]),
    );
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (!hit) return;
        tocLinks.forEach((a) => a.classList.remove("on"));
        tocLinks.get(hit.target.id)?.classList.add("on");
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    article.querySelectorAll("h2[id]").forEach((h) => io.observe(h));

    return () => {
      window.removeEventListener("scroll", onScroll);
      buttons.forEach((b) => b.remove());
      io.disconnect();
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <i />
    </div>
  );
}
