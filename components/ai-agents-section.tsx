"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Target, FileSearch, Workflow, Sparkles, Zap, Brain } from "lucide-react";

declare global {
  interface Window { __GLOBAL_LANG__?: string }
}

export function AiAgentsSection() {
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
    badge: tl("Nuevo", "New", "Novo"),
    title: tl(
      "Agentes de IA: el futuro de la automatización",
      "AI Agents: the future of automation",
      "Agentes de IA: o futuro da automação"
    ),
    subtitle: tl(
      "Potencia tu negocio con inteligencia artificial que trabaja 24/7, razona, decide y ejecuta.",
      "Empower your business with artificial intelligence that works 24/7, reasons, decides, and executes.",
      "Potencialize seu negócio com inteligência artificial que trabalha 24/7, raciocina, decide e executa."
    ),
    desc: tl(
      "Los agentes de IA son sistemas inteligentes que van más allá de la automatización tradicional. No solo siguen reglas fijas: razonan, toman decisiones contextuales y manejan escenarios imprevistos. Conectamos agentes a tus herramientas, datos y flujos de trabajo para que operen de forma autónoma y continua.",
      "AI agents go beyond traditional automation. They don't just follow fixed rules — they reason, make contextual decisions, and handle unforeseen scenarios. We connect agents to your tools, data, and workflows so they operate autonomously and continuously.",
      "Os agentes de IA vão além da automação tradicional. Eles não apenas seguem regras fixas: raciocinam, tomam decisões contextuais e lidam com cenários imprevistos. Conectamos agentes às suas ferramentas, dados e fluxos de trabalho para que operem de forma autônoma e contínua."
    ),
    ctaBtn: tl("Quiero un Agente de IA", "I want an AI Agent", "Quero um Agente de IA"),
    useCasesTitle: tl("Casos de uso", "Use cases", "Casos de uso"),
    cases: [
      {
        icon: MessageSquare,
        title: tl("Atención al cliente 24/7", "24/7 Customer Service", "Atendimento ao cliente 24/7"),
        desc: tl(
          "Bots inteligentes que responden consultas, resuelven problemas y escalan casos complejos a humanos cuando es necesario. Siempre disponibles, siempre consistentes.",
          "Intelligent bots that answer queries, resolve issues, and escalate complex cases to humans when needed. Always available, always consistent.",
          "Bots inteligentes que respondem dúvidas, resolvem problemas e escalam casos complexos para humanos quando necessário. Sempre disponíveis, sempre consistentes."
        ),
      },
      {
        icon: Target,
        title: tl("Calificación de leads", "Lead Qualification", "Qualificação de leads"),
        desc: tl(
          "Agentes que analizan, califican y priorizan automáticamente los prospectos entrantes, enriquecen datos y nutren leads hasta que estén listos para tu equipo de ventas.",
          "Agents that automatically analyze, qualify, and prioritize incoming prospects, enrich data, and nurture leads until they are ready for your sales team.",
          "Agentes que analisam, qualificam e priorizam automaticamente os prospectos recebidos, enriquecem dados e nutrem leads até estarem prontos para a equipe de vendas."
        ),
      },
      {
        icon: FileSearch,
        title: tl("Procesamiento de documentos", "Document Processing", "Processamento de documentos"),
        desc: tl(
          "Extracción, análisis y clasificación automática de datos de facturas, contratos, reportes y formularios. Elimina la entrada manual y los errores humanos.",
          "Automatic extraction, analysis, and classification of data from invoices, contracts, reports, and forms. Eliminate manual entry and human errors.",
          "Extração, análise e classificação automática de dados de faturas, contratos, relatórios e formulários. Elimine a entrada manual e os erros humanos."
        ),
      },
      {
        icon: Workflow,
        title: tl("Orquestación de procesos", "Workflow Orchestration", "Orquestração de processos"),
        desc: tl(
          "Agentes que coordinan múltiples sistemas, APIs y herramientas para ejecutar procesos empresariales complejos de extremo a extremo, sin intervención manual.",
          "Agents that coordinate multiple systems, APIs, and tools to execute complex end-to-end business processes without manual intervention.",
          "Agentes que coordenam múltiplos sistemas, APIs e ferramentas para executar processos empresariais complexos de ponta a ponta, sem intervenção manual."
        ),
      },
    ],
    differentiators: [
      {
        icon: Brain,
        label: tl("Razonamiento contextual", "Contextual reasoning", "Raciocínio contextual"),
      },
      {
        icon: Zap,
        label: tl("Respuesta en tiempo real", "Real-time response", "Resposta em tempo real"),
      },
      {
        icon: Sparkles,
        label: tl("Aprendizaje continuo", "Continuous learning", "Aprendizado contínuo"),
      },
      {
        icon: Bot,
        label: tl("Operación autónoma", "Autonomous operation", "Operação autônoma"),
      },
    ],
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="ai-agents"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-24 bg-gradient-to-br from-[#1A0B2E] via-[#2C1E42] to-[#461b6a] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#03ccd0] opacity-5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#5F259F] opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#461b6a] opacity-10 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#d8c7fa 1px, transparent 1px), linear-gradient(90deg, #d8c7fa 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#03ccd0]/20 border border-[#03ccd0]/40 text-[#03ccd0] text-sm font-semibold px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" />
            {t.badge}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance leading-tight">
            {t.title}
          </h2>

          <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          {/* Differentiator pills */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {t.differentiators.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-purple-200 text-sm px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <Icon className="w-4 h-4 text-[#03ccd0]" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-base sm:text-lg text-purple-300/90 text-center leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Use cases */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-[#03ccd0] mb-8">
            {t.useCasesTitle}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.cases.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-white/5 border border-white/10 hover:border-[#03ccd0]/50 rounded-2xl p-6 transition-all duration-300 hover:bg-white/8 hover:shadow-[0_0_30px_rgba(3,204,208,0.1)] cursor-default"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#03ccd0]/10 border border-[#03ccd0]/20 group-hover:bg-[#03ccd0]/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#03ccd0]" />
                </div>
                <h4 className="text-white font-bold text-base mb-3 leading-snug">{title}</h4>
                <p className="text-purple-300/80 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToContact}
            className="font-semibold px-10 py-6 text-lg transition-all duration-300 cursor-pointer bg-[#03ccd0] text-white hover:bg-[#02b3b7] shadow-[0_0_30px_rgba(3,204,208,0.3)] hover:shadow-[0_0_50px_rgba(3,204,208,0.5)] hover:-translate-y-0.5"
          >
            {t.ctaBtn}
          </Button>
        </div>
      </div>
    </section>
  );
}
