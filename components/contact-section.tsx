"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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
    title: lang === "en" ? "Ready to take your SME to the next level?" : "¿Listo para llevar tu pyme al siguiente nivel?",
    desc: lang === "en"
      ? "Let's talk. Complete the form, and we will get in touch to coordinate a free, no-commitment diagnosis of your processes."
      : "Hablemos. Completa el formulario y nos pondremos en contacto para coordinar un diagnóstico gratuito y sin compromiso de tus procesos.",
    name: lang === "en" ? "Name" : "Nombre",
    email: lang === "en" ? "Company Email" : "Email de la empresa",
    help: lang === "en" ? "How can we help you?" : "¿En qué podemos ayudarte?",
    send: lang === "en" ? "Send" : "Enviar Consulta",
    contactInfo: lang === "en" ? "Contact Information" : "Información de Contacto",
  };

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
    <section className="min-h-screen flex items-center justify-center py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: "#461b6a" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-24 lg:w-32 h-24 lg:h-32 bg-white rounded-full"></div>
        <div
          className="absolute bottom-10 left-10 w-16 lg:w-24 h-16 lg:h-24 rounded-full"
          style={{ backgroundColor: "#03ccd0" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            {t.title}
          </h2>
          <p className="text-base lg:text-lg text-purple-100 text-pretty leading-relaxed max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder={lang === "en" ? "Full Name" : "Tu nombre completo"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder={lang === "en" ? "contact@yourbusiness.com" : "contacto@tuempresa.com"}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.help}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px]"
                    placeholder={lang === "en" ? "Tell us about your business and what processes you'd like to automate or analyze..." : "Cuéntanos sobre tu negocio y qué procesos te gustaría automatizar o analizar..."}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-white font-semibold py-3 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#03ccd0" }}
                >
                  {t.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div className="text-white">
              <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">{t.contactInfo}</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-sm lg:text-base">contacto@autolytics.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#03ccd0" }} />
                  <span className="text-sm lg:text-base">Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative w-32 lg:w-48 h-32 lg:h-48 mx-auto">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <Image
                    src="/autolytics-robot-head.png"
                    alt="Robot mascota de Autolytics"
                    width={120}
                    height={120}
                    className="w-20 lg:w-32 h-auto opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
