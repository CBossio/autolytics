"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes";
import { ClientOnly } from "./ClientOnly";
import { ChevronDown } from "lucide-react";

declare global {
  interface Window { __GLOBAL_LANG__?: string }
}

export function HeroSection() {
  const [lang, setLang] = useState(
    typeof window !== "undefined" && window.__GLOBAL_LANG__ ? window.__GLOBAL_LANG__ : "es"
  );
  const { theme } = useTheme();

  useEffect(() => {
    const handler = () => {
      setLang(window.__GLOBAL_LANG__ || "es");
    };
    handler();
    window.addEventListener("languageChange", handler);
    return () => {
      window.removeEventListener("languageChange", handler);
    };
  }, []);

  const tl = (es: string, en: string, pt: string) =>
    lang === "en" ? en : lang === "pt" ? pt : es;

  const t = {
    title1: tl("Menos tareas manuales,", "Less manual work,", "Menos tarefas manuais,"),
    title2: tl("más decisiones inteligentes.", "smarter decisions.", "decisões mais inteligentes."),
    desc: tl(
      "Nos especializamos en automatización de procesos, análisis de datos y marketing digital. En Autolytics, transformamos tus tareas repetitivas en sistemas automáticos y tus datos en bruto en información clara para hacer crecer tu negocio.",
      "We specialize in process automation, data analytics, and digital marketing. At Autolytics, we transform your repetitive tasks into automated systems and your raw data into clear insights to grow your business.",
      "Somos especializados em automação de processos, análise de dados e marketing digital. Na Autolytics, transformamos suas tarefas repetitivas em sistemas automáticos e seus dados brutos em informações claras para fazer crescer o seu negócio."
    ),
    diag: tl("Agendar Diagnóstico Gratuito", "Schedule Free Diagnosis", "Agendar Diagnóstico Gratuito"),
    services: tl("Ver nuestros servicios", "See our services", "Ver nossos serviços"),
    scrollHint: tl("Descubrí más", "Discover more", "Descubra mais"),
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    const element = document.getElementById("services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-16 pt-24 bg-gradient-to-br from-purple-100 via-[#d8c7fa] to-purple-200 dark:from-[#1A0B2E] dark:via-[#2C1E42] dark:to-[#461b6a] overflow-hidden"
    >
      {/* Subtle background circles */}
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-[#03ccd0] opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-56 h-56 rounded-full bg-purple-400 opacity-10 blur-3xl pointer-events-none" />

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
                className="font-semibold px-8 py-6 text-lg cursor-pointer bg-white/80 text-[#461b6a] border-2 border-white hover:bg-white dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.services}
              </Button>
            </div>
          </div>

          {/* Robot Mascot */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <ClientOnly>
                <Image
                  src={theme === "dark" ? "/autolytics-full-black.png" : "/autolytics-full-logo.png"}
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

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#461b6a]/60 dark:text-purple-300/60 hover:text-[#461b6a] dark:hover:text-purple-200 transition-colors duration-300 cursor-pointer group"
        aria-label={t.scrollHint}
      >
        <span className="text-xs font-medium tracking-wider uppercase">{t.scrollHint}</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
