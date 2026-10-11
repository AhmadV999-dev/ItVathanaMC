// Made by VATHANA
import { useEffect } from "react";

export function extractBody(html: string): string {
  const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const body = match ? match[1] : html;
  return body.replace(/<script\b[\s\S]*?<\/script>/gi, "");
}

function bootScript() {
  const w = window as Window & { vathanaBoot?: () => void };
  const existing = document.getElementById("vathana-script") as HTMLScriptElement | null;
  if (existing) {
    w.vathanaBoot?.();
    return;
  }
  const script = document.createElement("script");
  script.id = "vathana-script";
  script.src = "/script.js";
  script.onload = () => w.vathanaBoot?.();
  document.body.appendChild(script);
}

export function SitePage({ html }: { html: string }) {
  useEffect(() => {
    bootScript();
  }, [html]);

  return (
    <div
      className="vathana-root"
      dangerouslySetInnerHTML={{ __html: extractBody(html) }}
    />
  );
}
