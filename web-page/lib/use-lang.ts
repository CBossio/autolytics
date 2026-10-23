"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window { __GLOBAL_LANG__?: string }
}

export type Lang = "es" | "en" | "pt";

export function useLang() {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const handler = () => setLang((window.__GLOBAL_LANG__ as Lang) || "es");
    handler();
    window.addEventListener("languageChange", handler);
    return () => window.removeEventListener("languageChange", handler);
  }, []);

  const tl = (es: string, en: string, pt: string) =>
    lang === "en" ? en : lang === "pt" ? pt : es;

  return { lang, tl };
}
