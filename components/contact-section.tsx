"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 bg-[color:var(--color-autolytics-purple)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-[color:var(--color-autolytics-turquoise)] rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            ¿Listo para llevar tu pyme al siguiente nivel?
          </h2>
          <p className="text-lg text-purple-100 text-pretty leading-relaxed max-w-2xl mx-auto">
            Hablemos. Completa el formulario y nos pondremos en contacto para coordinar un diagnóstico gratuito y sin
            compromiso de tus procesos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email de la empresa
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="contacto@tuempresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿En qué podemos ayudarte?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px]"
                    placeholder="Cuéntanos sobre tu negocio y qué procesos te gustaría automatizar o analizar..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[color:var(--color-autolytics-turquoise)] hover:bg-[color:var(--color-autolytics-turquoise)]/90 text-white font-semibold py-3"
                >
                  Enviar Consulta
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[color:var(--color-autolytics-turquoise)]" />
                  <span>contacto@autolytics.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[color:var(--color-autolytics-turquoise)]" />
                  <span>Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            {/* Robot mascot in corner */}
            <div className="hidden md:block">
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl"></div>
                <div className="relative z-10 text-6xl text-center pt-16">🤖</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
