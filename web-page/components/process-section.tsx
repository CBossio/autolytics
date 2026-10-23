"use client";

import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/use-lang";
import { Stagger, StaggerItem } from "@/components/motion";

export function ProcessSection() {
  const { tl } = useLang();

  const t = {
    title: tl("Cómo trabajamos", "How we work", "Como trabalhamos"),
    subtitle: tl(
      "Empezar es simple: un diagnóstico gratuito y una propuesta a tu medida.",
      "Getting started is simple: a free diagnosis and a proposal tailored to you.",
      "Começar é simples: um diagnóstico gratuito e uma proposta sob medida."
    ),
    cta: tl("Agendar mi diagnóstico gratuito", "Schedule my free diagnosis", "Agendar meu diagnóstico gratuito"),
    steps: [
      {
        title: tl("Diagnóstico gratuito", "Free diagnosis", "Diagnóstico gratuito"),
        desc: tl(
          "Conversamos sobre tu negocio para entender tus procesos, tus desafíos y tus objetivos.",
          "We talk about your business to understand your processes, challenges, and goals.",
          "Conversamos sobre o seu negócio para entender seus processos, desafios e objetivos."
        ),
      },
      {
        title: tl("Propuesta personalizada", "Tailored proposal", "Proposta personalizada"),
        desc: tl(
          "Te presentamos qué automatizar, medir o mejorar primero, sin compromiso de tu parte.",
          "We show you what to automate, measure, or improve first, with no obligation on your side.",
          "Mostramos o que automatizar, medir ou melhorar primeiro, sem compromisso da sua parte."
        ),
      },
      {
        title: tl("Implementación y seguimiento", "Implementation and follow-up", "Implementação e acompanhamento"),
        desc: tl(
          "Nos encargamos de la parte técnica y te explicamos los resultados de forma clara y sencilla.",
          "We handle the technical side and explain the results in a clear and simple way.",
          "Cuidamos da parte técnica e explicamos os resultados de forma clara e simples."
        ),
      },
    ],
  };

  return (
    <section
      id="process"
      className="w-full px-4 py-20 sm:py-28 bg-purple-50 dark:bg-[#1A0B2E] transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-autolytics-title dark:text-white text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-purple-200">{t.subtitle}</p>
        </div>

        <Stagger className="relative grid md:grid-cols-3 gap-10 md:gap-8">
          <div
            aria-hidden
            className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-autolytics-cyan to-transparent"
          />
          {t.steps.map(({ title, desc }, i) => (
            <StaggerItem key={title} className="relative text-center md:px-2">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-autolytics-title text-white dark:bg-autolytics-cyan dark:text-[#0b2e30] font-display text-xl font-bold shadow-lg ring-8 ring-purple-50 dark:ring-[#1A0B2E]">
                {i + 1}
              </div>
              <h3 className="font-display text-xl font-bold text-autolytics-title dark:text-white mb-2">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xs mx-auto">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="text-center mt-14">
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="whitespace-normal h-auto min-h-14 text-center font-semibold px-6 sm:px-8 py-4 text-base sm:text-lg cursor-pointer bg-autolytics-title text-white hover:bg-[#5F259F] dark:bg-autolytics-cyan dark:text-[#0b2e30] dark:hover:bg-[#02b3b7] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition duration-300"
          >
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
