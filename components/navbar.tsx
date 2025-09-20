"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

const LANGUAGES = [
  { code: "es", label: "ESP", flag: "🇪🇸" },
  { code: "en", label: "ENG", flag: "🇬🇧" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState("es");

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
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/autolytics-robot-head.png"
              alt="Autolytics Robot"
              width={40}
              height={40}
              className="w-20 h-20 select-none"
              draggable={false}
              style={{ filter: 'invert(0%)', ...(typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? { filter: 'invert(0%)' } : {}) }}
            />
            <span className="text-xl font-bold text-[#461b6a] dark:text-[#d8c7fa]">
              Autolytics
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center w-full">
            {/* Left: Logo only, Spacer */}
            <div className="flex-1"></div>
            {/* Right: Nav links, Diagnóstico, Theme, Language */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-[#461b6a] dark:text-[#d8c7fa] hover:text-[#231429] dark:hover:text-white transition-colors font-medium cursor-pointer"
              >
                {t.inicio}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-[#461b6a] dark:text-[#d8c7fa] hover:text-[#231429] dark:hover:text-white transition-colors font-medium cursor-pointer"
              >
                {t.servicios}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#461b6a] dark:text-[#d8c7fa] hover:text-[#231429] dark:hover:text-white transition-colors font-medium cursor-pointer"
              >
                {t.contacto}
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="font-semibold cursor-pointer bg-[#03ccd0] text-white dark:bg-[#d8c7fa] dark:text-[#461b6a] hover:opacity-90 transition-opacity"
                style={{ marginLeft: '1.5rem', marginRight: '1.5rem' }}
              >
                {t.diagnostico}
              </Button>
              <button
                aria-label="Toggle theme"
                className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-100 dark:bg-[#461b6a] dark:border-[#d8c7fa] dark:hover:bg-[#231429] transition-all duration-500 mr-2"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", transition: 'all 0.5s cubic-bezier(.4,0,.2,1)' }}
              >
                {theme === "dark" ? (
                  <Moon size={20} className="text-[#d8c7fa] transition-all duration-500" />
                ) : (
                  <Sun size={20} className="text-[#461b6a] transition-all duration-500" />
                )}
              </button>
              {/* Pill-style language toggle */}
              <div className="flex items-center ml-2">
                <button
                  className={`px-2 py-1 rounded-l-full border border-gray-300 font-semibold transition-colors duration-200 text-sm ${lang === "es" ? "bg-[#461b6a] text-[#d8c7fa]" : "bg-white text-[#461b6a] hover:bg-gray-100"}`}
                  onClick={() => { setLang("es"); if (typeof window !== 'undefined') (window as any).__GLOBAL_LANG__ = "es"; }}
                  aria-label="Cambiar a español"
                  style={{ fontSize: 14, lineHeight: 1, minWidth: 28 }}
                >
                  ES
                </button>
                <button
                  className={`px-2 py-1 rounded-r-full border border-gray-300 font-semibold transition-colors duration-200 text-sm ${lang === "en" ? "bg-[#461b6a] text-[#d8c7fa]" : "bg-white text-[#461b6a] hover:bg-gray-100"}`}
                  onClick={() => { setLang("en"); if (typeof window !== 'undefined') (window as any).__GLOBAL_LANG__ = "en"; }}
                  aria-label="Switch to English"
                  style={{ fontSize: 14, lineHeight: 1, minWidth: 28 }}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" style={{ color: "#461b6a" }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-[#461b6a] transition-colors font-medium py-2"
              >
                {t.inicio}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-[#461b6a] transition-colors font-medium py-2"
              >
                {t.servicios}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-[#461b6a] transition-colors font-medium py-2"
              >
                {t.contacto}
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full font-semibold mt-2"
                style={{ backgroundColor: "#03ccd0", color: "white" }}
              >
                {t.diagnostico}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
