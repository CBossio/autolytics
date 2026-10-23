"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Check, ChevronDown, Loader2 } from "lucide-react"
import { useLang } from "@/lib/use-lang"

export function HeroSection() {
  const { tl } = useLang()
  const reduce = useReducedMotion()

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
    perk1: tl("Diagnóstico gratuito", "Free diagnosis", "Diagnóstico gratuito"),
    perk2: tl("Sin compromiso", "No commitment", "Sem compromisso"),
    feedTitle: tl("Mientras leés esto, Autolytics trabaja", "While you read this, Autolytics works", "Enquanto você lê isto, a Autolytics trabalha"),
    alt: tl("Robot mascota de Autolytics", "Autolytics robot mascot", "Robô mascote da Autolytics"),
  }

  const tasks = [
    tl("Factura enviada y cobranza programada", "Invoice sent, follow-up scheduled", "Fatura enviada e cobrança agendada"),
    tl("Reporte semanal generado", "Weekly report generated", "Relatório semanal gerado"),
    tl("Lead calificado y asignado a ventas", "Lead qualified and assigned to sales", "Lead qualificado e enviado a vendas"),
    tl("Dashboard de ventas actualizado", "Sales dashboard updated", "Painel de vendas atualizado"),
  ]

  // Tasks complete one after another, then the panel resets and loops.
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (reduce) {
      setStep(tasks.length)
      return
    }
    const id = setInterval(() => setStep((s) => (s >= tasks.length + 1 ? 0 : s + 1)), 1300)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pb-20 pt-24 sm:py-16 sm:pt-24 bg-gradient-to-br from-purple-100 via-[#d8c7fa] to-purple-200 dark:from-[#1A0B2E] dark:via-[#2C1E42] dark:to-[#461b6a] overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-autolytics-cyan opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-56 h-56 rounded-full bg-purple-400 opacity-20 blur-3xl pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage: "radial-gradient(#461b6a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center md:text-left">
            <h1 className="font-display text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-balance leading-[1.1] text-autolytics-title dark:text-white">
              {t.title1}
              <br />
              {t.title2}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-purple-200 text-pretty leading-relaxed max-w-xl mx-auto md:mx-0">
              {t.desc}
            </p>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 sm:gap-4 justify-center md:justify-start md:items-start">
              <Button
                onClick={() => scrollTo("contact")}
                className="whitespace-normal h-auto min-h-14 text-center font-semibold px-6 sm:px-8 py-4 text-base sm:text-lg transition duration-300 cursor-pointer bg-autolytics-cyan text-[#0b2e30] hover:bg-[#02b3b7] shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.diag}
              </Button>
              <Button
                onClick={() => scrollTo("services")}
                variant="outline"
                className="whitespace-normal h-auto min-h-14 text-center font-semibold px-6 sm:px-8 py-4 text-base sm:text-lg cursor-pointer bg-white/80 text-autolytics-title border-2 border-white hover:bg-white dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20 backdrop-blur-sm transition duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.services}
              </Button>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-sm font-medium text-autolytics-title/80 dark:text-purple-200">
              {[t.perk1, t.perk2].map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-autolytics-title dark:text-autolytics-cyan" aria-hidden />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center lg:justify-end order-first md:order-last">
            <motion.div
              className="relative flex w-full max-w-[19rem] flex-col items-center lg:max-w-sm"
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {(["light", "dark"] as const).map((mode) => (
                <Image
                  key={mode}
                  src={mode === "dark" ? "/autolytics-full-black.png" : "/autolytics-full-logo.png"}
                  alt={t.alt}
                  width={400}
                  height={400}
                  className={`${mode === "light" ? "dark:hidden" : "hidden dark:block"} w-full max-w-[200px] sm:max-w-none h-auto`}
                  style={{ filter: "drop-shadow(0 0 60px rgba(70, 27, 106, 0.35))" }}
                  priority={mode === "light"}
                  loading={mode === "dark" ? "lazy" : undefined}
                />
              ))}

              <div
                className="hidden sm:block mt-2 w-full lg:max-w-[19rem] rounded-2xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-[#1A0B2E]/80 backdrop-blur-md shadow-xl p-4"
                aria-label={t.feedTitle}
              >
                <p className="text-xs font-semibold text-autolytics-title/70 dark:text-purple-300 mb-3">
                  {t.feedTitle}
                </p>
                <ul className="space-y-2.5">
                  {tasks.map((task, i) => {
                    const done = i < step
                    const running = i === step
                    return (
                      <li
                        key={task}
                        className={`flex items-center gap-2.5 text-[13px] leading-tight transition-opacity duration-500 ${
                          done || running ? "opacity-100" : "opacity-75"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 flex-none items-center justify-center rounded-full transition-colors duration-300 ${
                            done ? "bg-autolytics-cyan text-[#0b2e30]" : "bg-autolytics-title/10 dark:bg-white/10 text-autolytics-title dark:text-white"
                          }`}
                        >
                          {done ? (
                            <Check className="w-3 h-3" strokeWidth={3} aria-hidden />
                          ) : running ? (
                            <Loader2 className="w-3 h-3 animate-spin" aria-hidden />
                          ) : null}
                        </span>
                        <span className="text-autolytics-title dark:text-white">{task}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("ai-agents")}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-autolytics-title/90 dark:text-purple-200 hover:text-autolytics-title dark:hover:text-white transition-colors duration-300 cursor-pointer"
        aria-label={t.scrollHint}
      >
        <span className="text-xs font-medium">{t.scrollHint}</span>
        <ChevronDown className="w-5 h-5 animate-bounce motion-reduce:animate-none" />
      </button>
    </section>
  )
}
