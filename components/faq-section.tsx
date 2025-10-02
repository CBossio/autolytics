"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// eslint-disable-next-line
declare global {
  interface Window { __GLOBAL_LANG__?: string }
}

export function FaqSection() {
  const [lang, setLang] = useState(
    typeof window !== 'undefined' && window.__GLOBAL_LANG__ ? window.__GLOBAL_LANG__ : "es"
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
    q1: lang === "en" ? "What kind of businesses can benefit from your services?" : "¿Qué tipo de negocios se pueden beneficiar de sus servicios?",
    a1: lang === "en" ? "Any business that has repetitive manual processes, wants to make data-driven decisions, or needs to improve its online presence. We work with startups, SMEs, and large companies across various industries." : "Cualquier negocio que tenga procesos manuales repetitivos, quiera tomar decisiones basadas en datos o necesite mejorar su presencia online. Trabajamos con startups, pymes y grandes empresas de diversas industrias.",
    q2: lang === "en" ? "How long does it take to see results?" : "¿En cuánto tiempo se ven los resultados?",
    a2: lang === "en" ? "Process automation can show results in a matter of days by saving time and reducing errors. For business analytics and marketing, the timeline can vary, but you will start seeing valuable insights and performance improvements within the first few weeks." : "La automatización de procesos puede mostrar resultados en cuestión de días al ahorrar tiempo y reducir errores. Para la analítica de negocio y el marketing, el tiempo puede variar, pero empezarás a ver insights valiosos y mejoras de rendimiento en las primeras semanas.",
    q3: lang === "en" ? "What is the cost of the services?" : "¿Cuál es el costo de los servicios?",
    a3: lang === "en" ? "Our prices are tailored to the specific needs of each client. We start with a free diagnosis to understand your challenges and goals, and then we prepare a personalized proposal with no obligation." : "Nuestros precios se adaptan a las necesidades específicas de cada cliente. Empezamos con un diagnóstico gratuito para entender tus desafíos y objetivos, y a partir de ahí preparamos una propuesta personalizada y sin compromiso.",
    q4: lang === "en" ? "Do I need technical knowledge to hire your services?" : "¿Necesito tener conocimientos técnicos para contratar sus servicios?",
    a4: lang === "en" ? "Not at all. We handle all the technical complexity. Our goal is for you to benefit from technology without needing to be an expert. We explain the results and how everything works in a clear and simple way." : "No, en absoluto. Nos encargamos de toda la complejidad técnica. Nuestro objetivo es que puedas beneficiarte de la tecnología sin necesidad de ser un experto. Nosotros te explicamos los resultados y el funcionamiento de una manera clara y sencilla.",
  };

  const faqs = [
    { question: t.q1, answer: t.a1 },
    { question: t.q2, answer: t.a2 },
    { question: t.q3, answer: t.a3 },
    { question: t.q4, answer: t.a4 },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section
      id="faq"
      className="w-full min-h-screen flex items-center justify-center px-4 py-24 bg-purple-50 dark:bg-[#1A0B2E] transition-colors duration-300"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <Head>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Head>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#461b6a] dark:text-white">
            {t.title}
          </h2>
        </div>

        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-purple-200 dark:border-purple-800"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[#461b6a] dark:text-purple-200 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 dark:text-gray-300 pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}