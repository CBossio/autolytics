"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion, useScroll, useSpring } from "framer-motion"

import { ClientOnly } from "./ClientOnly";

const DOC_META: Record<string, { title: string; description: string }> = {
  es: {
    title: "Autolytics | Automatización, Analítica, Agentes IA y Marketing para tu empresa",
    description: "En Autolytics potenciamos tu negocio con automatización de procesos, agentes de IA, analítica de datos y estrategias de marketing digital (SEO, campañas). Menos tareas manuales, más decisiones inteligentes.",
  },
  en: {
    title: "Autolytics | Automation, Analytics, AI Agents and Marketing for your business",
    description: "Autolytics grows your business with process automation, AI agents, data analytics, and digital marketing (SEO, campaigns). Less manual work, smarter decisions.",
  },
  pt: {
    title: "Autolytics | Automação, Análise, Agentes IA e Marketing para a sua empresa",
    description: "A Autolytics impulsiona o seu negócio com automação de processos, agentes de IA, análise de dados e marketing digital (SEO, campanhas). Menos tarefas manuais, decisões mais inteligentes.",
  },
};

function applyDocLang(code: string) {
  const meta = DOC_META[code] || DOC_META.es;
  document.documentElement.lang = code;
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
}

const LANGUAGES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState("es");
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("preferredLanguage");
      const initialLang = savedLang || "es";
      setLang(initialLang);
      (window as any).__GLOBAL_LANG__ = initialLang;
      applyDocLang(initialLang);
      window.dispatchEvent(new Event("languageChange"));
      if (!savedLang) {
        localStorage.setItem("preferredLanguage", initialLang);
      }
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme && savedTheme !== theme) {
        setTheme(savedTheme);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setIsMounted(true);
  }, []);

  const handleLangChange = (newLang: string) => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      (window as any).__GLOBAL_LANG__ = newLang;
      applyDocLang(newLang);
      window.dispatchEvent(new Event("languageChange"));
      localStorage.setItem("preferredLanguage", newLang);
    }
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  const goTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const tl = (es: string, en: string, pt: string) =>
    lang === "en" ? en : lang === "pt" ? pt : es;

  const t = {
    inicio: tl("Inicio", "Home", "Início"),
    servicios: tl("Servicios", "Services", "Serviços"),
    agentesIA: tl("Agentes IA", "AI Agents", "Agentes IA"),
    contacto: tl("Contacto", "Contact", "Contato"),
    faq: "FAQ",
    diagnostico: tl("Diagnóstico Gratuito", "Free Diagnosis", "Diagnóstico Gratuito"),
    newBadge: tl("NUEVO", "NEW", "NOVO"),
    main: tl("Principal", "Main", "Principal"),
  };

  const navLinks = [
    { label: t.inicio, section: "hero" },
    { label: t.agentesIA, section: "ai-agents" },
    { label: t.servicios, section: "services" },
    { label: t.faq, section: "faq" },
    { label: t.contacto, section: "contact" },
  ];

  const themeToggle = (large: boolean) => (
    <button
      aria-label="Toggle theme"
      className={`flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-100 dark:bg-[#461b6a] dark:border-[#d8c7fa] dark:hover:bg-[#231429] transition-colors duration-300 ${large ? "h-11 w-11" : "p-2"}`}
      onClick={handleThemeToggle}
    >
      {theme === "dark" ? (
        <Moon size={20} className="text-[#d8c7fa]" aria-hidden />
      ) : (
        <Sun size={20} className="text-[#461b6a]" aria-hidden />
      )}
    </button>
  );

  const langToggle = (large: boolean) => (
    <div className={`flex items-center transition-opacity duration-300 ${isMounted ? "opacity-100" : "opacity-0"}`}>
      {LANGUAGES.map(({ code, label }, i) => (
        <button
          key={code}
          className={`border border-gray-300 font-semibold transition-colors duration-200 text-[13px] leading-tight min-w-[30px]
            ${large ? "min-h-11 min-w-12 px-3" : "px-2.5 py-1"}
            ${i === 0 ? "rounded-l-full border-r-0" : ""}
            ${i === LANGUAGES.length - 1 ? "rounded-r-full border-l-0" : ""}
            ${i > 0 && i < LANGUAGES.length - 1 ? "border-x-0" : ""}
            ${lang === code
              ? "bg-[#461b6a] text-[#d8c7fa] border-[#461b6a]"
              : "bg-white text-[#461b6a] hover:bg-gray-100"
            }`}
          onClick={() => handleLangChange(code)}
          aria-label={`Switch to ${label}`}
          aria-pressed={lang === code}
        >
          {label}
        </button>
      ))}
    </div>
  );

  const newBadge = (
    <span className="bg-[#03ccd0] text-[#0b2e30] text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
      {t.newBadge}
    </span>
  );

  return (
    <nav
      aria-label={t.main}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#461b6a] backdrop-blur-sm border-b border-gray-200 dark:border-[#461b6a] shadow-sm transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3">
            <Image
              src="/autolytics-robot-head.png"
              alt="Autolytics Robot"
              width={48}
              height={48}
              priority
              className="h-12 w-12 select-none"
              draggable={false}
            />
            <span className="font-display text-3xl text-[#461b6a] dark:text-[#d8c7fa]">Autolytics</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-5 lg:space-x-6">
              {navLinks.map(({ label, section }) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-[#461b6a] dark:text-[#d8c7fa] hover:text-black dark:hover:text-white font-display font-medium transition-colors duration-300 ${section === "ai-agents" ? "relative" : ""}`}
                >
                  {label}
                  {section === "ai-agents" && (
                    <span className="absolute -top-4 -right-7">{newBadge}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center justify-end min-w-[21rem]">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => goTo("contact")}
                className="font-semibold cursor-pointer bg-[#03ccd0] text-[#0b2e30] dark:bg-[#d8c7fa] dark:text-[#461b6a] hover:bg-[#02b3b7] dark:hover:bg-white transition duration-300 shadow-md hover:shadow-lg"
              >
                {t.diagnostico}
              </Button>
              <ClientOnly>
                {themeToggle(false)}
                {langToggle(false)}
              </ClientOnly>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <ClientOnly>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex h-11 w-11 items-center justify-center text-[#461b6a] dark:text-[#d8c7fa]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
            </button>
          </ClientOnly>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-purple-800">
            <div className="flex flex-col space-y-1">
              {navLinks.map(({ label, section }) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left font-display font-medium py-3 px-2 rounded-lg transition-colors flex items-center gap-2 text-[#461b6a] dark:text-[#d8c7fa]"
                >
                  {label}
                  {section === "ai-agents" && newBadge}
                </a>
              ))}
              <Button
                onClick={() => goTo("contact")}
                className="w-full h-11 font-semibold mt-3 bg-[#03ccd0] text-[#0b2e30] dark:bg-[#d8c7fa] dark:text-[#461b6a] hover:bg-[#02b3b7]"
              >
                {t.diagnostico}
              </Button>
              <ClientOnly>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-purple-800">
                  {themeToggle(true)}
                  {langToggle(true)}
                </div>
              </ClientOnly>
            </div>
          </div>
        )}
      </div>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-[#03ccd0] to-[#8f1eae]"
      />
    </nav>
  )
}
