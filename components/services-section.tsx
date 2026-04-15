"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, BarChart3, CheckCircle, Megaphone } from "lucide-react";

export function ServicesSection() {
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
    eyebrow: tl("Otros servicios que proveemos", "Other services we provide", "Outros serviços que oferecemos"),
    title: tl(
      "Tu negocio, optimizado de punta a punta.",
      "Your business, optimized from end to end.",
      "Seu negócio, otimizado de ponta a ponta."
    ),
    procTitle: tl("Automatización de Procesos", "Process Automation", "Automação de Processos"),
    procDesc: tl(
      "Dejamos que la tecnología se encargue de las tareas repetitivas y propensas a errores. Liberamos el tiempo de tu equipo para que se enfoque en lo que realmente importa: la estrategia, la creatividad y la atención al cliente.",
      "We let technology handle the repetitive and error-prone tasks. We free up your team's time to focus on what truly matters: strategy, creativity, and customer care.",
      "Deixamos que a tecnologia cuide das tarefas repetitivas e propensas a erros. Liberamos o tempo da sua equipe para que se concentre no que realmente importa: estratégia, criatividade e atendimento ao cliente."
    ),
    proc1: tl("Facturación y cobranzas automáticas.", "Automated invoicing and collections.", "Faturamento e cobranças automáticas."),
    proc2: tl("Generación de reportes diarios/semanales.", "Daily/weekly report generation.", "Geração de relatórios diários/semanais."),
    proc3: tl("Integración de aplicaciones (CRM, email, etc.).", "Application integration (CRM, email, etc.).", "Integração de aplicativos (CRM, e-mail, etc.)."),
    analyticsTitle: tl("Analítica de Negocios", "Business Analytics", "Análise de Negócios"),
    analyticsDesc: tl(
      "Convertimos esa montaña de datos que tienes en Excel o en distintos sistemas en tableros visuales e interactivos. Te damos la claridad que necesitas para entender tus ventas, tus clientes y tu rentabilidad en tiempo real.",
      "We turn that mountain of data you have in Excel or different systems into visual and interactive dashboards. We give you the clarity you need to understand your sales, your customers, and your profitability in real time.",
      "Transformamos aquela montanha de dados que você tem no Excel ou em diferentes sistemas em painéis visuais e interativos. Damos a clareza necessária para entender suas vendas, clientes e rentabilidade em tempo real."
    ),
    analytics1: tl("Dashboards de ventas y rendimiento.", "Sales and performance dashboards.", "Painéis de vendas e desempenho."),
    analytics2: tl("Análisis de comportamiento de clientes.", "Customer behavior analysis.", "Análise de comportamento de clientes."),
    analytics3: tl("Proyecciones y seguimiento de KPIs.", "Projections and KPI tracking.", "Projeções e monitoramento de KPIs."),
    analytics4: tl("Análisis de datos y modelado predictivo.", "Data analysis and predictive modeling.", "Análise de dados e modelagem preditiva."),
    marketingTitle: tl("Marketing Digital", "Digital Marketing", "Marketing Digital"),
    marketingDesc: tl(
      "Potenciamos tu presencia digital y te ayudamos a llegar al público correcto, en el momento justo, con estrategias diseñadas para crecer y vender más.",
      "We boost your online presence and help you connect with the right audience at the right time. Our strategies are designed to grow your brand and increase your sales.",
      "Potencializamos sua presença digital e ajudamos a alcançar o público certo, no momento certo, com estratégias projetadas para crescer e vender mais."
    ),
    marketing1: tl("Gestión de Campañas Publicitarias Online.", "Online Advertising Campaign Management.", "Gestão de Campanhas Publicitárias Online."),
    marketing2: tl("SEO - Optimización para Motores de Búsqueda", "SEO - Search Engine Optimization", "SEO - Otimização para Motores de Busca"),
    marketing3: tl("Estrategia de Contenidos y Copywriting.", "Content Strategy & Copywriting.", "Estratégia de Conteúdo e Copywriting."),
    marketing4: tl("Social Media Planning.", "Social Media Planning.", "Planejamento de Redes Sociais."),
  };

  const cards = [
    {
      icon: Cog,
      title: t.procTitle,
      desc: t.procDesc,
      items: [t.proc1, t.proc2, t.proc3],
    },
    {
      icon: BarChart3,
      title: t.analyticsTitle,
      desc: t.analyticsDesc,
      items: [t.analytics1, t.analytics2, t.analytics3, t.analytics4],
    },
    {
      icon: Megaphone,
      title: t.marketingTitle,
      desc: t.marketingDesc,
      items: [t.marketing1, t.marketing2, t.marketing3, t.marketing4],
      spanTwo: true,
    },
  ];

  return (
    <section
      id="services"
      className="w-full min-h-screen flex items-center justify-center px-4 py-24 bg-white dark:bg-[#121212] transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#00C4CC] mb-3">
            {t.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance text-[#461b6a] dark:text-white">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map(({ icon: Icon, title, desc, items, spanTwo }) => (
            <Card
              key={title}
              className={`border-2 bg-[#F3EFFF] dark:bg-[#1E1E1E] border-[#D1B6F6] dark:border-[#5F259F] hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1${spanTwo ? " md:col-span-2 lg:col-span-1" : ""}`}
            >
              <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-white/60 dark:bg-[#2a1a3a]">
                    <Icon className="w-7 h-7 flex-shrink-0 text-[#5F259F] dark:text-[#00C4CC]" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#461b6a] dark:text-[#00C4CC]">
                    {title}
                  </h3>
                </div>

                <p className="mb-6 leading-relaxed text-sm lg:text-base text-gray-700 dark:text-gray-300 min-h-[120px]">
                  {desc}
                </p>

                <div className="space-y-3 mt-auto">
                  {items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C4CC]" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
