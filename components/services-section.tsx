"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, BarChart3, CheckCircle } from "lucide-react";

export function ServicesSection() {
  const [lang, setLang] = useState(
    typeof window !== 'undefined' && window.__GLOBAL_LANG__ ? window.__GLOBAL_LANG__ : "es"
  );

  useEffect(() => {
    const handler = () => {
      setLang(window.__GLOBAL_LANG__ || "es");
    };
    window.addEventListener("languageChange", handler);
    // Patch setLang in window.__GLOBAL_LANG__ setter
    const orig = Object.getOwnPropertyDescriptor(window, "__GLOBAL_LANG__");
    let _lang = window.__GLOBAL_LANG__;
    Object.defineProperty(window, "__GLOBAL_LANG__", {
      configurable: true,
      get() { return _lang; },
      set(val) {
        _lang = val;
        window.dispatchEvent(new Event("languageChange"));
      }
    });
    return () => {
      window.removeEventListener("languageChange", handler);
      if (orig) Object.defineProperty(window, "__GLOBAL_LANG__", orig);
    };
  }, []);

  const t = {
    title: lang === "en" ? "Your business, optimized from end to end." : "Tu negocio, optimizado de punta a punta.",
    procTitle: lang === "en" ? "Process Automation" : "Automatización de Procesos",
    procDesc: lang === "en"
      ? "We let technology handle the repetitive and error-prone tasks. We free up your team's time to focus on what truly matters: strategy, creativity, and customer care."
      : "Dejamos que la tecnología se encargue de las tareas repetitivas y propensas a errores. Liberamos el tiempo de tu equipo para que se enfoque en lo que realmente importa: la estrategia, la creatividad y la atención al cliente.",
    proc1: lang === "en" ? "Automated invoicing and collections." : "Facturación y cobranzas automáticas.",
    proc2: lang === "en" ? "Daily/weekly report generation." : "Generación de reportes diarios/semanales.",
    proc3: lang === "en" ? "Application integration (CRM, email, etc.)." : "Integración de aplicaciones (CRM, email, etc.).",
    analyticsTitle: lang === "en" ? "Business Analytics" : "Analítica de Negocios",
    analyticsDesc: lang === "en"
      ? "We turn that mountain of data you have in Excel or different systems into visual and interactive dashboards. We give you the clarity you need to understand your sales, your customers, and your profitability in real time."
      : "Convertimos esa montaña de datos que tienes en Excel o en distintos sistemas en tableros visuales e interactivos. Te damos la claridad que necesitas para entender tus ventas, tus clientes y tu rentabilidad en tiempo real.",
    analytics1: lang === "en" ? "Sales and performance dashboards." : "Dashboards de ventas y rendimiento.",
    analytics2: lang === "en" ? "Customer behavior analysis." : "Análisis de comportamiento de clientes.",
    analytics3: lang === "en" ? "Projections and KPI tracking." : "Proyecciones y seguimiento de KPIs.",
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-16 lg:py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ color: "#461b6a" }}>
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Automatización de Procesos */}
          <Card className="border-2 hover:shadow-lg transition-all duration-300" style={{ borderColor: "#d8c7fa" }}>
            <CardContent className="p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: "#d8c7fa" }}>
                  <Cog className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: "#461b6a" }} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold" style={{ color: "#461b6a" }}>
                  {t.procTitle}
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm lg:text-base">
                {t.procDesc}
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">{t.proc1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">{t.proc2}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">{t.proc3}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analítica de Negocios */}
          <Card className="border-2 hover:shadow-lg transition-all duration-300" style={{ borderColor: "#d8c7fa" }}>
            <CardContent className="p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: "#d8c7fa" }}>
                  <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: "#461b6a" }} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold" style={{ color: "#461b6a" }}>
                  {t.analyticsTitle}
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm lg:text-base">
                {t.analyticsDesc}
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">{t.analytics1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">{t.analytics2}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">{t.analytics3}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
