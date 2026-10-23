"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BarChart3, Bot, CheckCircle, Cog, Megaphone, RefreshCw } from "lucide-react";
import { useLang } from "@/lib/use-lang";
import { Stagger, StaggerItem } from "@/components/motion";

export function PipelineSection() {
  const { tl } = useLang();
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { margin: "-120px" });
  const [active, setActive] = useState(0);

  const t = {
    title: tl("Cómo funciona una automatización", "How an automation works", "Como funciona uma automação"),
    subtitle: tl(
      "Un ejemplo de punta a punta: así trabajan juntas las cuatro áreas de Autolytics cuando un cliente potencial te escribe.",
      "An end-to-end example: this is how Autolytics' four areas work together when a potential customer contacts you.",
      "Um exemplo de ponta a ponta: assim as quatro áreas da Autolytics trabalham juntas quando um cliente em potencial entra em contato."
    ),
    badge: tl("Ejemplo ilustrativo", "Illustrative example", "Exemplo ilustrativo"),
    loop: tl(
      "Lo que muestran los datos mejora la próxima campaña",
      "What the data shows improves the next campaign",
      "O que os dados mostram melhora a próxima campanha"
    ),
    exampleLabel: tl("En el ejemplo", "In the example", "No exemplo"),
    steps: [
      {
        icon: Megaphone,
        area: tl("Marketing digital", "Digital marketing", "Marketing digital"),
        title: tl("Atraer", "Attract", "Atrair"),
        desc: tl(
          "Una campaña o una publicación lleva a una persona interesada a tu web, a tu WhatsApp o a tu formulario.",
          "A campaign or a post brings an interested person to your website, your WhatsApp, or your form.",
          "Uma campanha ou uma publicação leva uma pessoa interessada ao seu site, ao seu WhatsApp ou ao seu formulário."
        ),
        result: tl("Nuevo contacto desde Instagram", "New contact from Instagram", "Novo contato vindo do Instagram"),
      },
      {
        icon: Bot,
        area: tl("Agente de IA", "AI agent", "Agente de IA"),
        title: tl("Responder", "Respond", "Responder"),
        desc: tl(
          "Un agente de IA la atiende al instante, a cualquier hora: responde dudas, hace las preguntas clave y evalúa si es un buen cliente potencial.",
          "An AI agent answers right away, at any hour: it handles questions, asks the key questions, and judges whether it is a good lead.",
          "Um agente de IA atende na hora, a qualquer horário: responde dúvidas, faz as perguntas-chave e avalia se é um bom cliente em potencial."
        ),
        result: tl("Consulta respondida a las 23:40", "Inquiry answered at 11:40 pm", "Consulta respondida às 23:40"),
      },
      {
        icon: Cog,
        area: tl("Automatización", "Automation", "Automação"),
        title: tl("Ejecutar", "Execute", "Executar"),
        desc: tl(
          "Sin trabajo manual, el contacto se guarda en tu CRM, se envía el presupuesto o la factura y se agenda el seguimiento.",
          "With no manual work, the contact is saved in your CRM, the quote or invoice is sent, and the follow-up is scheduled.",
          "Sem trabalho manual, o contato é salvo no seu CRM, o orçamento ou a fatura é enviado e o acompanhamento é agendado."
        ),
        result: tl("Contacto en el CRM y presupuesto enviado", "Contact in the CRM and quote sent", "Contato no CRM e orçamento enviado"),
      },
      {
        icon: BarChart3,
        area: tl("Analítica de datos", "Data analytics", "Análise de dados"),
        title: tl("Medir", "Measure", "Medir"),
        desc: tl(
          "Un tablero reúne todo en un solo lugar: de qué campaña vino cada cliente, cuánto tardó la respuesta y cuántos cerraron.",
          "A dashboard gathers everything in one place: which campaign each customer came from, how fast you responded, and how many closed.",
          "Um painel reúne tudo em um só lugar: de qual campanha veio cada cliente, quanto tempo levou a resposta e quantos fecharam."
        ),
        result: tl("Tablero con la campaña que mejor funciona", "Dashboard showing the best-performing campaign", "Painel com a campanha de melhor desempenho"),
      },
    ],
  };

  const last = t.steps.length - 1;

  // One pulse walks through the pipeline while it is on screen; with reduced motion everything stays lit.
  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => setActive((a) => (a >= last ? 0 : a + 1)), 2200);
    return () => clearInterval(id);
  }, [inView, reduce, last]);

  const lit = (i: number) => (reduce ? true : i <= active);
  const progress = reduce ? 1 : active / last;

  return (
    <section
      id="how-it-works"
      className="w-full px-4 py-20 sm:py-28 bg-[#F3EFFF] dark:bg-[#1A0B2E] transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block mb-4 rounded-full border border-[#5F259F]/30 dark:border-autolytics-cyan/40 px-3 py-1 text-xs font-semibold text-[#5F259F] dark:text-autolytics-cyan">
            {t.badge}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-autolytics-title dark:text-white text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-purple-200">{t.subtitle}</p>
        </div>

        <div ref={listRef}>
          <div className="relative">
          {/* connector: vertical on small screens, horizontal on large */}
          <div aria-hidden className="lg:hidden absolute left-7 top-7 bottom-7 w-0.5 -translate-x-1/2 bg-[#D1B6F6] dark:bg-white/15">
            <motion.div
              className="h-full w-full origin-top bg-autolytics-cyan"
              animate={{ scaleY: progress }}
              transition={{ duration: reduce ? 0 : 0.8, ease: "easeInOut" }}
            />
          </div>
          <div aria-hidden className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 -translate-y-1/2 bg-[#D1B6F6] dark:bg-white/15">
            <motion.div
              className="h-full w-full origin-left bg-autolytics-cyan"
              animate={{ scaleX: progress }}
              transition={{ duration: reduce ? 0 : 0.8, ease: "easeInOut" }}
            />
          </div>

          <Stagger className="relative grid gap-6 lg:grid-cols-4 lg:gap-6">
            {t.steps.map(({ icon: Icon, area, title, desc, result }, i) => (
              <StaggerItem key={area} className="h-full">
                <div className="flex h-full gap-4 lg:flex-col lg:items-center lg:gap-5">
                  <div
                    className={`relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                      lit(i)
                        ? "border-autolytics-cyan bg-autolytics-title text-white dark:bg-autolytics-cyan dark:text-[#0b2e30]"
                        : "border-[#D1B6F6] bg-white text-[#5F259F] dark:border-white/20 dark:bg-[#1A0B2E] dark:text-purple-200"
                    }`}
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-autolytics-cyan text-[11px] font-bold text-[#0b2e30]">
                      {i + 1}
                    </span>
                  </div>

                  <article
                    className={`flex flex-1 flex-col rounded-2xl border bg-white p-5 transition duration-500 dark:bg-white/5 lg:w-full ${
                      lit(i) && i === active && !reduce
                        ? "border-autolytics-cyan shadow-lg shadow-autolytics-cyan/10"
                        : "border-[#D1B6F6] dark:border-white/10"
                    }`}
                  >
                    <p className="text-sm font-semibold text-[#5F259F] dark:text-autolytics-cyan">{area}</p>
                    <h3 className="mt-1 font-display text-xl font-bold text-autolytics-title dark:text-white">{title}</h3>
                    <p className="mt-2 mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{desc}</p>
                    <p className="mt-auto flex items-start gap-2 rounded-lg bg-[#F3EFFF] px-3 py-2 text-xs text-autolytics-title dark:bg-white/10 dark:text-purple-100">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-[#076c70] dark:text-autolytics-cyan" aria-hidden />
                      <span>
                        <span className="sr-only">{t.exampleLabel}: </span>
                        {result}
                      </span>
                    </p>
                  </article>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          </div>

          {/* loop back from step 4 to step 1 */}
          <div className="mt-8 hidden items-center lg:flex" aria-hidden>
            <div className="mx-[12.5%] flex h-12 flex-1 items-center justify-center rounded-b-2xl border-x-2 border-b-2 border-dashed border-[#5F259F]/40 dark:border-autolytics-cyan/40">
              <span className="-mb-px flex items-center gap-2 bg-[#F3EFFF] px-4 text-sm font-medium text-autolytics-title dark:bg-[#1A0B2E] dark:text-purple-100">
                <RefreshCw className="h-4 w-4 text-[#5F259F] dark:text-autolytics-cyan" />
                {t.loop}
              </span>
            </div>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm font-medium text-autolytics-title dark:text-purple-100 lg:hidden">
            <RefreshCw className="h-4 w-4 flex-none text-[#5F259F] dark:text-autolytics-cyan" aria-hidden />
            {t.loop}
          </p>
        </div>
      </div>
    </section>
  );
}
