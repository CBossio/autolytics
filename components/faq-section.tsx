"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const [lang, setLang] = useState(
    typeof window !== "undefined" && window.__GLOBAL_LANG__
      ? window.__GLOBAL_LANG__
      : "es"
  );

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

  const t = {
    title: lang === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes",
    faqs:
      lang === "en"
        ? [
            {
              q: "What kind of businesses do you work with?",
              a: "We work with businesses of all sizes, from startups to established companies, that are looking to optimize their processes, better understand their data, and improve their digital marketing.",
            },
            {
              q: "How long does the free diagnosis take?",
              a: "The initial diagnosis usually takes between 30 and 60 minutes. It's a conversation where we seek to understand your challenges and identify opportunities for improvement, with no commitment required.",
            },
            {
              q: "What is the typical return on investment (ROI) of automating processes?",
              a: "The return on investment varies depending on the complexity of the processes, but our clients generally see a significant return by saving dozens of hours per week and reducing human errors, allowing their teams to focus on strategic tasks.",
            },
            {
              q: "Do I need technical knowledge to use your dashboards?",
              a: "Not at all. We design our dashboards to be intuitive and easy to understand for any user, regardless of their technical background. The goal is for you to have clear information to make decisions quickly.",
            },
          ]
        : [
            {
              q: "¿Con qué tipo de negocios trabajan?",
              a: "Trabajamos con empresas de todos los tamaños, desde startups hasta compañías consolidadas, que buscan optimizar sus procesos, entender mejor sus datos y mejorar su marketing digital.",
            },
            {
              q: "¿Cuánto tiempo dura el diagnóstico gratuito?",
              a: "El diagnóstico inicial suele durar entre 30 y 60 minutos. Es una conversación donde buscamos entender tus desafíos e identificar oportunidades de mejora, sin ningún tipo de compromiso.",
            },
            {
              q: "¿Cuál es el retorno de inversión (ROI) típico de una automatización de procesos?",
              a: "El retorno de inversión varía según la complejidad de los procesos, pero nuestros clientes generalmente ven un retorno significativo al ahorrar decenas de horas semanales y reducir errores humanos, permitiendo que su equipo se enfoque en tareas estratégicas.",
            },
            {
              q: "¿Necesito conocimientos técnicos para usar sus dashboards?",
              a: "Para nada. Diseñamos nuestros tableros para que sean intuitivos y fáciles de entender por cualquier usuario, sin importar su perfil técnico. El objetivo es que tengas información clara para tomar decisiones rápidamente.",
            },
          ],
  };

  return (
    <section id="faq" className="w-full min-h-screen flex items-center justify-center px-4 py-24 bg-gray-50 dark:bg-[#1a0b2e]">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#461b6a] dark:text-[#00C4CC]">
            {t.title}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {t.faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 dark:text-gray-200">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 dark:text-gray-400">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
