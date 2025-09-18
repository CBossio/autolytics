import { Card, CardContent } from "@/components/ui/card"
import { Cog, BarChart3, CheckCircle } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ color: "#461b6a" }}>
            Tu negocio, optimizado de punta a punta.
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
                  Automatización de Procesos
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm lg:text-base">
                Dejamos que la tecnología se encargue de las tareas repetitivas y propensas a errores. Liberamos el
                tiempo de tu equipo para que se enfoque en lo que realmente importa: la estrategia, la creatividad y la
                atención al cliente.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">Facturación y cobranzas automáticas.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">Generación de reportes diarios/semanales.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">
                    Integración de aplicaciones (CRM, email, etc.).
                  </span>
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
                  Analítica de Negocios
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm lg:text-base">
                Convertimos esa montaña de datos que tienes en Excel o en distintos sistemas en tableros visuales e
                interactivos. Te damos la claridad que necesitas para entender tus ventas, tus clientes y tu
                rentabilidad en tiempo real.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">Dashboards de ventas y rendimiento.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">Análisis de comportamiento de clientes.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-gray-700 text-sm lg:text-base">Proyecciones y seguimiento de KPIs.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
