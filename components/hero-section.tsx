import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-[color:var(--color-autolytics-purple)]">Menos tareas manuales,</span>
                <br />
                <span className="text-[color:var(--color-autolytics-purple)]">más decisiones inteligentes.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 text-pretty leading-relaxed max-w-2xl">
                En Autolytics transformamos tus procesos repetitivos en sistemas automáticos y tus datos en bruto en
                información clara para que puedas hacer crecer tu negocio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[color:var(--color-autolytics-turquoise)] hover:bg-[color:var(--color-autolytics-turquoise)]/90 text-white font-semibold px-8 py-4 text-lg"
              >
                Agendar Diagnóstico Gratuito
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="text-[color:var(--color-autolytics-purple)] hover:text-[color:var(--color-autolytics-purple)]/80 font-semibold px-8 py-4 text-lg"
              >
                Ver nuestros servicios
              </Button>
            </div>
          </div>

          {/* Robot Mascot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/autolytics-robot.png"
                alt="Robot mascota de Autolytics"
                width={400}
                height={400}
                className="w-full max-w-md h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
