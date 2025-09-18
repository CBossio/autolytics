import { Card, CardContent } from "@/components/ui/card"
import { Cog, BarChart3, CheckCircle } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-autolytics-purple)] mb-4 text-balance">
            Tu negocio, optimizado de punta a punta.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Automatización de Procesos */}
          <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[color:var(--color-autolytics-light-purple)] rounded-lg">
                  <Cog className="w-8 h-8 text-[color:var(--color-autolytics-purple)]" />
                </div>
                <h3 className="text-2xl font-bold text-[color:var(--color-autolytics-purple)]">
                  Automatización de Procesos
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Dejamos que la tecnología se encargue de las tareas repetitivas y propensas a errores. Liberamos el
                tiempo de tu equipo para que se enfoque en lo que realmente importa: la estrategia, la creatividad y la
                atención al cliente.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[color:var(--color-autolytics-turquoise)]" />
                  <span className="text-gray-700">Facturación y cobranzas automáticas.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[color:var(--color-autolytics-turquoise)]" />
                  <span className="text-gray-700">Generación de reportes diarios/semanales.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[color:var(--color-autolytics-turquoise)]" />
                  <span className="text-gray-700">Integración de aplicaciones (CRM, email, etc.).</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analítica de Negocios */}
          <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[color:var(--color-autolytics-light-purple)] rounded-lg">
                  <BarChart3 className="w-8 h-8 text-[color:var(--color-autolytics-purple)]" />
                </div>
                <h3 className="text-2xl font-bold text-[color:var(--color-autolytics-purple)]">
                  Analítica de Negocios
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Convertimos esa montaña de datos que tienes en Excel o en distintos sistemas en tableros visuales e
                interactivos. Te damos la claridad que necesitas para entender tus ventas, tus clientes y tu
                rentabilidad en tiempo real.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[color:var(--color-autolytics-turquoise)]" />
                  <span className="text-gray-700">Dashboards de ventas y rendimiento.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[color:var(--color-autolytics-turquoise)]" />
                  <span className="text-gray-700">Análisis de comportamiento de clientes.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[color:var(--color-autolytics-turquoise)]" />
                  <span className="text-gray-700">Proyecciones y seguimiento de KPIs.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
