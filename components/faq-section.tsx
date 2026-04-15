"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

declare global {
  interface Window { __GLOBAL_LANG__?: string }
}

export function FaqSection() {
  const [lang, setLang] = useState(
    typeof window !== "undefined" && window.__GLOBAL_LANG__ ? window.__GLOBAL_LANG__ : "es"
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

  const tl = (es: string, en: string, pt: string) =>
    lang === "en" ? en : lang === "pt" ? pt : es;

  const t = {
    title: tl("Preguntas Frecuentes", "Frequently Asked Questions", "Perguntas Frequentes"),
    q1: tl(
      "¿Qué tipo de negocios se pueden beneficiar de sus servicios?",
      "What kind of businesses can benefit from your services?",
      "Quais tipos de negócios podem se beneficiar dos seus serviços?"
    ),
    a1: tl(
      "Cualquier negocio que tenga procesos manuales repetitivos, quiera tomar decisiones basadas en datos o necesite mejorar su presencia online. Trabajamos con startups, pymes y grandes empresas de diversas industrias.",
      "Any business that has repetitive manual processes, wants to make data-driven decisions, or needs to improve its online presence. We work with startups, SMEs, and large companies across various industries.",
      "Qualquer negócio que tenha processos manuais repetitivos, queira tomar decisões baseadas em dados ou precise melhorar sua presença online. Trabalhamos com startups, PMEs e grandes empresas de diversas indústrias."
    ),
    q2: tl(
      "¿En cuánto tiempo se ven los resultados?",
      "How long does it take to see results?",
      "Em quanto tempo se veem os resultados?"
    ),
    a2: tl(
      "La automatización de procesos puede mostrar resultados en cuestión de días al ahorrar tiempo y reducir errores. Para la analítica de negocio y el marketing, el tiempo puede variar, pero empezarás a ver insights valiosos y mejoras de rendimiento en las primeras semanas.",
      "Process automation can show results in a matter of days by saving time and reducing errors. For business analytics and marketing, the timeline can vary, but you will start seeing valuable insights and performance improvements within the first few weeks.",
      "A automação de processos pode mostrar resultados em questão de dias, poupando tempo e reduzindo erros. Para análise de negócios e marketing, o tempo pode variar, mas você começará a ver insights valiosos e melhorias de desempenho nas primeiras semanas."
    ),
    q3: tl(
      "¿Cuál es el costo de los servicios?",
      "What is the cost of the services?",
      "Qual é o custo dos serviços?"
    ),
    a3: tl(
      "Nuestros precios se adaptan a las necesidades específicas de cada cliente. Empezamos con un diagnóstico gratuito para entender tus desafíos y objetivos, y a partir de ahí preparamos una propuesta personalizada y sin compromiso.",
      "Our prices are tailored to the specific needs of each client. We start with a free diagnosis to understand your challenges and goals, and then we prepare a personalized proposal with no obligation.",
      "Nossos preços se adaptam às necessidades específicas de cada cliente. Começamos com um diagnóstico gratuito para entender seus desafios e objetivos, e então preparamos uma proposta personalizada e sem compromisso."
    ),
    q4: tl(
      "¿Necesito tener conocimientos técnicos para contratar sus servicios?",
      "Do I need technical knowledge to hire your services?",
      "Preciso ter conhecimentos técnicos para contratar seus serviços?"
    ),
    a4: tl(
      "No, en absoluto. Nos encargamos de toda la complejidad técnica. Nuestro objetivo es que puedas beneficiarte de la tecnología sin necesidad de ser un experto. Nosotros te explicamos los resultados y el funcionamiento de una manera clara y sencilla.",
      "Not at all. We handle all the technical complexity. Our goal is for you to benefit from technology without needing to be an expert. We explain the results and how everything works in a clear and simple way.",
      "De jeito nenhum. Nós cuidamos de toda a complexidade técnica. Nosso objetivo é que você se beneficie da tecnologia sem precisar ser um especialista. Explicamos os resultados e o funcionamento de maneira clara e simples."
    ),
    q5: tl(
      "¿Qué son los Agentes de IA y cómo pueden ayudar a mi negocio?",
      "What are AI Agents and how can they help my business?",
      "O que são Agentes de IA e como podem ajudar o meu negócio?"
    ),
    a5: tl(
      "Los agentes de IA son sistemas inteligentes que pueden razonar, tomar decisiones y ejecutar tareas complejas de forma autónoma, sin intervención humana constante. A diferencia de una automatización tradicional que sigue reglas fijas, un agente de IA puede adaptarse al contexto, interactuar con múltiples herramientas y manejar situaciones imprevistas. Los usamos para atender clientes 24/7, calificar leads, procesar documentos y orquestar flujos de trabajo completos.",
      "AI agents are intelligent systems that can reason, make decisions, and execute complex tasks autonomously, without constant human intervention. Unlike traditional automation that follows fixed rules, an AI agent can adapt to context, interact with multiple tools, and handle unforeseen situations. We use them to serve customers 24/7, qualify leads, process documents, and orchestrate complete workflows.",
      "Os agentes de IA são sistemas inteligentes que podem raciocinar, tomar decisões e executar tarefas complexas de forma autônoma, sem intervenção humana constante. Ao contrário da automação tradicional que segue regras fixas, um agente de IA pode se adaptar ao contexto, interagir com múltiplas ferramentas e lidar com situações imprevistas. Os usamos para atender clientes 24/7, qualificar leads, processar documentos e orquestrar fluxos de trabalho completos."
    ),
  };

  const faqs = [
    { question: t.q1, answer: t.a1 },
    { question: t.q2, answer: t.a2 },
    { question: t.q3, answer: t.a3 },
    { question: t.q4, answer: t.a4 },
    { question: t.q5, answer: t.a5 },
  ];

  return (
    <section
      id="faq"
      className="w-full min-h-screen flex items-center justify-center px-4 py-24 bg-purple-50 dark:bg-[#1A0B2E] transition-colors duration-300"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#461b6a] dark:text-white">
            {t.title}
          </h2>
        </div>

        <Accordion type="multiple" className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-purple-200 dark:border-purple-800 rounded-xl px-4 bg-white/60 dark:bg-white/5 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-base lg:text-lg font-semibold text-[#461b6a] dark:text-purple-200 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm lg:text-base text-gray-700 dark:text-gray-300 pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
