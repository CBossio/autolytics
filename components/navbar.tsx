"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Lexend_Deca } from "next/font/google"

import { ClientOnly } from "./ClientOnly";

const LANGUAGES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

const lexendDeca = Lexend_Deca({ subsets: ["latin"], weight: ["400", "700"] });

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState("es");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("preferredLanguage");
      const initialLang = savedLang || "es";
      setLang(initialLang);
      (window as any).__GLOBAL_LANG__ = initialLang;
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
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
  };

  const navLinks = [
    { label: t.inicio, section: "hero" },
    { label: t.servicios, section: "services" },
    { label: t.agentesIA, section: "ai-agents" },
    { label: t.contacto, section: "contact" },
    { label: t.faq, section: "faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#461b6a] backdrop-blur-sm border-b border-gray-200 dark:border-[#461b6a] shadow-sm transition-all duration-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/autolytics-robot-head.png"
              alt="Autolytics Robot"
              width={48}
              height={48}
              className="h-18 w-18 select-none"
              draggable={false}
            />
            <span className={`text-3xl text-[#461b6a] dark:text-[#d8c7fa] ${lexendDeca.className}`}>
              Autolytics
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-5 lg:space-x-6">
              {navLinks.map(({ label, section }) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-[#461b6a] dark:text-[#d8c7fa] hover:text-black dark:hover:text-white font-medium cursor-pointer transition-colors duration-300 ${lexendDeca.className} ${section === "ai-agents" ? "relative" : ""}`}
                >
                  {label}
                  {section === "ai-agents" && (
                    <span className="absolute -top-2 -right-4 bg-[#03ccd0] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                      NEW
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center justify-end">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="font-semibold cursor-pointer bg-[#03ccd0] text-white dark:bg-[#d8c7fa] dark:text-[#461b6a] hover:bg-[#02b3b7] dark:hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {t.diagnostico}
              </Button>
              <ClientOnly>
                <button
                  aria-label="Toggle theme"
                  className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-100 dark:bg-[#461b6a] dark:border-[#d8c7fa] dark:hover:bg-[#231429] transition-all duration-500"
                  onClick={handleThemeToggle}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  {theme === "dark" ? (
                    <Moon size={20} className="text-[#d8c7fa]" />
                  ) : (
                    <Sun size={20} className="text-[#461b6a]" />
                  )}
                </button>
                {/* 3-language pill toggle */}
                <div className={`flex items-center transition-opacity duration-300 ${isMounted ? "opacity-100" : "opacity-0"}`}>
                  {LANGUAGES.map(({ code, label }, i) => (
                    <button
                      key={code}
                      className={`px-2.5 py-1 border border-gray-300 font-semibold transition-colors duration-200 text-sm
                        ${i === 0 ? "rounded-l-full border-r-0" : ""}
                        ${i === LANGUAGES.length - 1 ? "rounded-r-full border-l-0" : ""}
                        ${i > 0 && i < LANGUAGES.length - 1 ? "border-x-0" : ""}
                        ${lang === code
                          ? "bg-[#461b6a] text-[#d8c7fa] border-[#461b6a]"
                          : "bg-white text-[#461b6a] hover:bg-gray-100"
                        }`}
                      onClick={() => handleLangChange(code)}
                      aria-label={`Switch to ${label}`}
                      style={{ fontSize: 13, lineHeight: 1.2, minWidth: 30 }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </ClientOnly>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <ClientOnly>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              style={{ color: theme === "dark" ? "#d8c7fa" : "#461b6a" }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={24} color={theme === "dark" ? "#d8c7fa" : "#461b6a"} />
              ) : (
                <Menu size={24} color={theme === "dark" ? "#d8c7fa" : "#461b6a"} />
              )}
            </button>
          </ClientOnly>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-purple-800">
            <div className="flex flex-col space-y-1">
              {navLinks.map(({ label, section }) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left font-medium py-2.5 px-2 rounded-lg transition-colors ${lexendDeca.className} flex items-center gap-2`}
                  style={{ color: theme === "dark" ? "#d8c7fa" : "#461b6a" }}
                >
                  {label}
                  {section === "ai-agents" && (
                    <span className="bg-[#03ccd0] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                      NEW
                    </span>
                  )}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full font-semibold mt-3 bg-[#03ccd0] text-white hover:bg-[#02b3b7]"
              >
                {t.diagnostico}
              </Button>
              {/* Theme and Language toggles for mobile */}
              <ClientOnly>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-purple-800">
                  <button
                    aria-label="Toggle theme"
                    className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-100 dark:bg-[#461b6a] dark:border-[#d8c7fa] dark:hover:bg-[#231429] transition-all duration-500"
                    onClick={handleThemeToggle}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    {theme === "dark" ? (
                      <Moon size={20} className="text-[#d8c7fa]" />
                    ) : (
                      <Sun size={20} className="text-[#461b6a]" />
                    )}
                  </button>
                  <div className="flex items-center">
                    {LANGUAGES.map(({ code, label }, i) => (
                      <button
                        key={code}
                        className={`px-2.5 py-1 border border-gray-300 font-semibold transition-colors duration-200 text-sm
                          ${i === 0 ? "rounded-l-full border-r-0" : ""}
                          ${i === LANGUAGES.length - 1 ? "rounded-r-full border-l-0" : ""}
                          ${i > 0 && i < LANGUAGES.length - 1 ? "border-x-0" : ""}
                          ${lang === code
                            ? "bg-[#461b6a] text-[#d8c7fa] border-[#461b6a]"
                            : "bg-white text-[#461b6a] hover:bg-gray-100"
                          }`}
                        onClick={() => handleLangChange(code)}
                        style={{ fontSize: 13, lineHeight: 1.2, minWidth: 30 }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </ClientOnly>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
