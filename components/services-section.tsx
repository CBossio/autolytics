"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, BarChart3, CheckCircle, Megaphone } from "lucide-react";
import { useTheme } from "next-themes";

export function ServicesSection() {
  const { theme } = useTheme();
  const [lang, setLang] = useState(
    typeof window !== 'undefined' && window.__GLOBAL_LANG__ ? window.__GLOBAL_LANG__ : "es"
  );

  // This logic for language handling is preserved and untouched.
  useEffect(() => {
    const handler = () => {
      setLang(window.__GLOBAL_LANG__ || "es");
    };
    // Set initial lang and listen for changes
    handler();
    window.addEventListener("languageChange", handler);    
    return () => {
      window.removeEventListener("languageChange", handler);
    };
  }, []);

  // Your translation object is preserved and untouched.
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
    analytics4: lang === "en" ? "Data analysis and predictive modeling." : "Análisis de datos y modelado predictivo.",
    marketingTitle: lang === "en" ? "Marketing Services" : "Servicios de Marketing",
    marketingDesc: lang === "en" ? "We boost your online presence and connect you with your ideal audience. From managing ad campaigns to optimizing your website to appear first on Google." : "Potenciamos tu presencia online y te conectamos con tu público ideal. Desde la gestión de campañas publicitarias hasta la optimización de tu web para aparecer primero en Google.",
    marketing1: lang === "en" ? "Ad campaign management (Meta, Google)." : "Gestión de campañas (Meta, Google).",
    marketing2: lang === "en" ? "SEO and content strategy." : "SEO y estrategia de contenidos.",
    marketing3: lang === "en" ? "Social media management." : "Manejo de redes sociales.",
  };

  // Define brand colors for easy reuse in Tailwind JIT compiler
  const brandColors = {
    purple: {
      dark: '#5F259F', // Main purple for borders
      light: '#d8c7fa', // Light mode BG
    },
    turquoise: '#00C4CC', // Accent for titles, icons
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-4 py-24 bg-white dark:bg-[#121212] transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance text-[#461b6a] dark:text-white">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Process Automation Card */}
          <Card
            className="border-2 bg-[#F3EFFF] dark:bg-[#1E1E1E] border-[#D1B6F6] dark:border-[#5F259F] hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300"
          > 
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-6">
                <Cog className="w-8 h-8 flex-shrink-0 text-[#5F259F] dark:text-[#00C4CC]" />
                <h3 className="text-xl lg:text-2xl font-bold text-[#461b6a] dark:text-[#00C4CC]">
                  {t.procTitle}
                </h3>
              </div>

              <p className="mb-6 leading-relaxed text-sm lg:text-base text-gray-700 dark:text-gray-300 min-h-[120px]">
                {t.procDesc}
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C4CC]" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {t.proc1}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C4CC]" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {t.proc2}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C4CC]" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {t.proc3}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Analytics Card */}
          <Card
            className="border-2 bg-[#F3EFFF] dark:bg-[#1E1E1E] border-[#D1B6F6] dark:border-[#5F259F] hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300"
          >
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-6">
                <BarChart3 className="w-8 h-8 flex-shrink-0 text-[#5F259F] dark:text-[#00C4CC]" />
                <h3 className="text-xl lg:text-2xl font-bold text-[#461b6a] dark:text-[#00C4CC]">
                  {t.analyticsTitle}
                </h3>
              </div>

              <p className="mb-6 leading-relaxed text-sm lg:text-base text-gray-700 dark:text-gray-300 min-h-[120px]">
                {t.analyticsDesc}
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C4CC]" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {t.analytics1}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C4CC]" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {t.analytics2}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C4CC]" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {t.analytics3}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C4CC]" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {t.analytics4}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Marketing Services Card */}
          <Card
            className="border-2 bg-[#F3EFFF] dark:bg-[#1E1E1E] border-[#D1B6F6] dark:border-[#5F259F] hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300 md:col-span-2 lg:col-span-1"
          >
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-6">
                <Megaphone className="w-8 h-8 flex-shrink-0 text-[#5F259F] dark:text-[#00C4CC]" />
                <h3 className="text-xl lg:text-2xl font-bold text-[#461b6a] dark:text-[#00C4CC]">
                  {t.marketingTitle}
                </h3>
              </div>

              <p className="mb-6 leading-relaxed text-sm lg:text-base text-gray-700 dark:text-gray-300 min-h-[120px]">
                {t.marketingDesc}
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C4CC]" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {t.marketing1}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C4CC]" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {t.marketing2}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C4CC]" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {t.marketing3}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}