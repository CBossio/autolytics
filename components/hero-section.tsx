"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-16 pt-24"
      style={{ backgroundColor: "#d8c7fa" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span style={{ color: "#461b6a" }}>Menos tareas manuales,</span>
                <br />
                <span style={{ color: "#461b6a" }}>más decisiones inteligentes.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 text-pretty leading-relaxed max-w-2xl mx-auto lg:mx-0">
                En Autolytics transformamos tus procesos repetitivos en sistemas automáticos y tus datos en bruto en
                información clara para que puedas hacer crecer tu negocio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="font-semibold px-6 cursor-pointer lg:px-8 py-3 lg:py-4 text-base lg:text-lg text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#03ccd0" }}
              >
                Agendar Diagnóstico Gratuito
              </Button>

              <Button
                onClick={scrollToServices}
                variant="ghost"
                size="lg"
                className="font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg hover:bg-white/20 transition-colors cursor-pointer"
                style={{ color: "#461b6a" }}
              >
                Ver nuestros servicios
              </Button>
            </div>
          </div>

          {/* Robot Mascot */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <Image
                src="/autolytics-robot-full.png"
                alt="Robot mascota de Autolytics"
                width={400}
                height={400}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
