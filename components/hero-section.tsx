"use client"


import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes";

// Accept lang as a prop from parent/navbar
// Remove local lang state
// eslint-disable-next-line
declare global {
  interface Window { __GLOBAL_LANG__?: string }
}

export function HeroSection() {
  const [lang, setLang] = useState(
    typeof window !== 'undefined' && window.__GLOBAL_LANG__ ? window.__GLOBAL_LANG__ : "es"
  );
  const { theme } = useTheme();

  useEffect(() => {
    const handler = () => {
      setLang(window.__GLOBAL_LANG__ || "es");
    };
    window.addEventListener("languageChange", handler);
    // Also patch setLang in window.__GLOBAL_LANG__ setter
    const orig = Object.getOwnPropertyDescriptor(window, "__GLOBAL_LANG__");
    let _lang = window.__GLOBAL_LANG__;
    Object.defineProperty(window, "__GLOBAL_LANG__", {
      configurable: true,
      get() { return _lang; },
      set(val) {
        _lang = val;
        window.dispatchEvent(new Event("languageChange"));
      }
    });
    return () => {
      window.removeEventListener("languageChange", handler);
      if (orig) Object.defineProperty(window, "__GLOBAL_LANG__", orig);
    };
  }, []);

  const t = {
    title1: lang === "en" ? "Less manual work," : "Menos tareas manuales,",
    title2: lang === "en" ? "smarter decisions." : "más decisiones inteligentes.",
    desc:
      lang === "en"
        ? "At Autolytics, we transform your repetitive processes into automated systems and your raw data into clear insights so you can grow your business."
        : "En Autolytics transformamos tus procesos repetitivos en sistemas automáticos y tus datos en bruto en información clara para que puedas hacer crecer tu negocio.",
    diag: lang === "en" ? "Schedule Free Diagnosis" : "Agendar Diagnóstico Gratuito",
    services: lang === "en" ? "See our services" : "Ver nuestros servicios",
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-16 pt-24"
      style={{ backgroundColor: "#d8c7fa" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span style={{ color: "#461b6a" }}>{t.title1}</span>
                <br />
                <span style={{ color: "#461b6a" }}>{t.title2}</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 text-pretty leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className={`font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg transition-colors cursor-pointer
                  ${theme === "dark"
                    ? "bg-[#461b6a] text-[#d8c7fa] hover:bg-[#250F3B]"
                    : "bg-[#03ccd0] text-white hover:bg-[#02b3b7]"}
                `}
              >
                {lang === "en" ? "Get Free Diagnosis" : "Diagnóstico Gratuito"}
              </Button>

              <Button
                onClick={scrollToServices}
                //variant="ghost"
                size="lg"
                className={`font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg cursor-pointer
                  ${theme === "dark"
                    ? "bg-[#BCA2E0] text-[#461b6a] hover:bg-[#987FBA]"
                    : "bg-[#ffffff] text-[#461b6a] hover:bg-[#BCA2E0]"}
                `}
              >
                {t.services}
              </Button>
            </div>
            {/* Language toggle removed; now controlled globally */}
          </div>

          {/* Robot Mascot */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <Image
                src="/autolytics-full-logo.png"
                alt="Robot mascota de Autolytics"
                width={400}
                height={400}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
                style={{
                  filter:
                    "drop-shadow(0 0 80px rgba(27, 7, 69, 0.4)) drop-shadow(0 0 80px rgba(50, 7, 69, 0.3)) drop-shadow(0 0 80px rgba(50, 7, 69, 0.2))",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
