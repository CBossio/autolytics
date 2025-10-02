"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Lexend_Deca } from "next/font/google"

import { ClientOnly } from "./ClientOnly";
const LANGUAGES = [
  { code: "es", label: "ESP", flag: "🇪🇸" },
  { code: "en", label: "ENG", flag: "🇬🇧" },
];

const lexendDeca = Lexend_Deca({ subsets: ["latin"], weight: ["400", "700"] });

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState("es");
  const [isMounted, setIsMounted] = useState(false);

  // Load persisted settings on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("preferredLanguage");
      const initialLang = savedLang || "es";
      setLang(initialLang);
      (window as any).__GLOBAL_LANG__ = initialLang;

      // Dispatch event on initial load to sync other components
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

  // Persist language changes
  const handleLangChange = (newLang: string) => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      (window as any).__GLOBAL_LANG__ = newLang;
      window.dispatchEvent(new Event("languageChange"));
      localStorage.setItem("preferredLanguage", newLang);
    }
  };

  // Persist theme changes
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

  // Navbar translations
  const t = {
    inicio: lang === "en" ? "Home" : "Inicio",
    servicios: lang === "en" ? "Services" : "Servicios",
    contacto: lang === "en" ? "Contact" : "Contacto",
    diagnostico: lang === "en" ? "Free Diagnosis" : "Diagnóstico Gratuito",
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#461b6a] backdrop-blur-sm border-b border-gray-200 dark:border-[#461b6a] shadow-sm transition-all duration-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Adjusted size and spacing */}
          <div className="flex items-center space-x-3">
            <Image
              src="/autolytics-robot-head.png"
              alt="Autolytics Robot"
              width={48}
              height={48}
              className="h-18 w-18 select-none"
              draggable={false}
              style={{ filter: 'invert(0%)', ...(typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? { filter: 'invert(0%)' } : {}) }}
            />
            <span
              className={`text-3xl text-[#461b6a] dark:text-[#d8c7fa] ${lexendDeca.className}`}
            >
              Autolytics
            </span>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className={`text-[#461b6a] dark:text-[#d8c7fa] hover:text-black dark:hover:text-white font-medium cursor-pointer transition-colors duration-300 ${lexendDeca.className}`}
              >
                {t.inicio}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`text-[#461b6a] dark:text-[#d8c7fa] hover:text-black dark:hover:text-white font-medium cursor-pointer transition-colors duration-300 ${lexendDeca.className}`}
              >
                {t.servicios}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-[#461b6a] dark:text-[#d8c7fa] hover:text-black dark:hover:text-white font-medium cursor-pointer transition-colors duration-300 ${lexendDeca.className}`}
              >
                {t.contacto}
              </button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center justify-end">
            <div className="flex items-center space-x-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="font-semibold cursor-pointer bg-[#03ccd0] text-white dark:bg-[#d8c7fa] dark:text-[#461b6a] hover:bg-[#02b3b7] dark:hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {t.diagnostico}
              </Button>
              <ClientOnly>
                <button
                  aria-label="Toggle theme"
                  className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-100 dark:bg-[#461b6a] dark:border-[#d8c7fa] dark:hover:bg-[#231429] transition-all duration-500 mr-2"
                  onClick={handleThemeToggle}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", transition: 'all 0.5s cubic-bezier(.4,0,.2,1)' }}
                >
                  {theme === "dark" ? (
                    <Moon size={20} className="text-[#d8c7fa] transition-all duration-500" />
                  ) : (
                    <Sun size={20} className="text-[#461b6a] transition-all duration-500" />
                  )}
                </button>
                {/* Pill-style language toggle */}
                <div className={`flex items-center ml-2 transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                  <button
                    className={`px-2 py-1 rounded-l-full border border-gray-300 font-semibold transition-colors duration-200 text-sm ${lang === "es" ? "bg-[#461b6a] text-[#d8c7fa]" : "bg-white text-[#461b6a] hover:bg-gray-100"}`}
                    onClick={() => handleLangChange("es")}
                    aria-label="Cambiar a español"
                    style={{ fontSize: 14, lineHeight: 1, minWidth: 28 }}
                  >
                    ES
                  </button>
                  <button
                    className={`px-2 py-1 rounded-r-full border border-gray-300 font-semibold transition-colors duration-200 text-sm ${lang === "en" ? "bg-[#461b6a] text-[#d8c7fa]" : "bg-white text-[#461b6a] hover:bg-gray-100"}`}
                    onClick={() => handleLangChange("en")}
                    aria-label="Switch to English"
                    style={{ fontSize: 14, lineHeight: 1, minWidth: 28 }}
                  >
                    EN
                  </button>
                </div>
              </ClientOnly>
            </div>
          </div>

          {/* Mobile Menu Button */}
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className={`text-left font-medium py-2 transition-colors ${lexendDeca.className}`}
                style={{ color: theme === "dark" ? "#d8c7fa" : "#461b6a" }}
              >
                {t.inicio}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`text-left font-medium py-2 transition-colors ${lexendDeca.className}`}
                style={{ color: theme === "dark" ? "#d8c7fa" : "#461b6a" }}
              >
                {t.servicios}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-left font-medium py-2 transition-colors ${lexendDeca.className}`}
                style={{ color: theme === "dark" ? "#d8c7fa" : "#461b6a" }}
              >
                {t.contacto}
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full font-semibold mt-2 bg-[#03ccd0] text-white"
              >
                {t.diagnostico}
              </Button>
              {/* Theme and Language toggles for mobile */}
              <ClientOnly>
                <div className="flex items-center justify-between mt-4 gap-4">
                  {/* Theme toggle */}
                  <button
                    aria-label="Toggle theme"
                    className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-100 dark:bg-[#461b6a] dark:border-[#d8c7fa] dark:hover:bg-[#231429] transition-all duration-500"
                    onClick={handleThemeToggle}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", transition: 'all 0.5s cubic-bezier(.4,0,.2,1)' }}
                  >
                    {theme === "dark" ? (
                      <Moon size={20} className="text-[#d8c7fa] transition-all duration-500" />
                    ) : (
                      <Sun size={20} className="text-[#461b6a] transition-all duration-500" />
                    )}
                  </button>
                  {/* Language toggle */}
                  <div className="flex items-center">
                    <button
                      className={`px-2 py-1 rounded-l-full border border-gray-300 font-semibold transition-colors duration-200 text-sm ${lang === "es" ? "bg-[#461b6a] text-[#d8c7fa]" : "bg-white text-[#461b6a] hover:bg-gray-100"}`}
                      onClick={() => handleLangChange("es")}
                      aria-label="Cambiar a español"
                      style={{ fontSize: 14, lineHeight: 1, minWidth: 28 }}
                    >
                      ES
                    </button>
                    <button
                      className={`px-2 py-1 rounded-r-full border border-gray-300 font-semibold transition-colors duration-200 text-sm ${lang === "en" ? "bg-[#461b6a] text-[#d8c7fa]" : "bg-white text-[#461b6a] hover:bg-gray-100"}`}
                      onClick={() => handleLangChange("en")}
                      aria-label="Switch to English"
                      style={{ fontSize: 14, lineHeight: 1, minWidth: 28 }}
                    >
                      EN
                    </button>
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