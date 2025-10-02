"use client"


import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes";
import { ClientOnly } from "./ClientOnly";

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
    // Set initial lang and listen for changes
    handler();
    window.addEventListener("languageChange", handler);    
    return () => {
      window.removeEventListener("languageChange", handler);
    };
  }, []);

  const t = {
    title1: lang === "en" ? "Less manual work," : "Menos tareas manuales,",
    title2: lang === "en" ? "smarter decisions." : "más decisiones inteligentes.",
    desc:
      lang === "en"
        ? "At Autolytics, we transform your repetitive processes into automated systems, your raw data into clear insights, and boost your marketing so you can grow your business."
        : "En Autolytics, transformamos tus procesos repetitivos en sistemas automáticos, tus datos en bruto en información clara y potenciamos tu marketing para que puedas hacer crecer tu negocio.",
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
      className="min-h-screen flex items-center justify-center px-4 py-16 pt-24 bg-gradient-to-br from-purple-100 via-[#d8c7fa] to-purple-200 dark:from-[#1A0B2E] dark:via-[#2C1E42] dark:to-[#461b6a]"
      
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-[#461b6a] dark:text-white">{t.title1}</span>
                <br />
                <span className="text-[#461b6a] dark:text-white">{t.title2}</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-purple-200 text-pretty leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                className="font-semibold px-8 py-6 text-lg transition-all duration-300 cursor-pointer bg-[#03ccd0] text-white hover:bg-[#02b3b7] shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.diag}
              </Button>

              <Button
                onClick={scrollToServices}
                variant="outline"
                className="font-semibold px-8 py-6 text-lg cursor-pointer bg-white/80 text-[#461b6a] border-2 border-white hover:bg-white hover:text-blue-[#461b6a] dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.services}
              </Button>
            </div>
            {/* Language toggle removed; now controlled globally */}
          </div>

          {/* Robot Mascot */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <ClientOnly>
                <Image
                  src={theme === 'dark' ? "/autolytics-full-black.png" : "/autolytics-full-logo.png"}
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
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
