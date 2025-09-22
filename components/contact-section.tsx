"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, CheckCircle } from "lucide-react";

export function ContactSection() {
  const { theme } = useTheme();
  const [lang, setLang] = useState(
    typeof window !== 'undefined' && window.__GLOBAL_LANG__ ? window.__GLOBAL_LANG__ : "es"
  );
  const [submitted, setSubmitted] = useState(false); // <-- 1. Estado para el envío

  // ... (toda la lógica de useEffect y el objeto 't' se mantienen igual)
  useEffect(() => {
    const handler = () => {
      setLang(window.__GLOBAL_LANG__ || "es");
    };
    window.addEventListener("languageChange", handler);
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
    subTitle: lang === "en" ? "Let's talk. Complete the form, and we will get in touch to coordinate a free, no-commitment diagnosis of your processes." : "Hablemos. Completa el formulario y nos pondremos en contacto para coordinar un diagnóstico gratuito y sin compromiso de tus procesos.",
    contactTitle: lang === "en" ? "Contact Information" : "Información de Contacto",
    nameLabel: lang === "en" ? "Name" : "Nombre",
    namePlaceholder: lang === "en" ? "Your full name" : "Tu nombre completo",
    emailLabel: lang === "en" ? "Company Email" : "Email de la empresa",
    emailPlaceholder: lang === "en" ? "contact@yourcompany.com" : "contacto@tuempresa.com",
    helpLabel: lang === "en" ? "How can we help you?" : "¿En qué podemos ayudarte?",
    helpPlaceholder: lang === "en" ? "Tell us about your business and what processes you would like to automate or analyze..." : "Cuéntanos sobre tu negocio y qué procesos te gustaría automatizar o analizar...",
    submitButton: lang === "en" ? "Send Inquiry" : "Enviar Consulta",
    location: "Buenos Aires, Argentina",
    successTitle: lang === "en" ? "Message Sent!" : "¡Mensaje Enviado!",
    successMessage: lang === "en" ? "Thank you for contacting us. We will get back to you shortly." : "Gracias por contactarnos. Te responderemos a la brevedad.",
  };

  // <-- 2. Función para manejar el envío a Formspree
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mkgqwory", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        // Opcional: Manejar errores aquí, por si Formspree falla
        alert("Hubo un error al enviar el formulario. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      alert("Hubo un error de red. Por favor, revisa tu conexión.");
    }
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-gray-50 dark:bg-gradient-to-b dark:from-[#2C1E42] dark:to-[#1A0B2E] overflow-hidden">
      {/* ... círculos de fondo ... */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-purple-200 opacity-20 dark:hidden animate-blob filter blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-blue-200 opacity-20 dark:hidden animate-blob animation-delay-2000 filter blur-3xl"></div>
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-[#5F259F] opacity-10 hidden dark:block animate-blob filter blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[#461b6a] opacity-10 hidden dark:block animate-blob animation-delay-2000 filter blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        {/* ... títulos de la sección ... */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="mt-4 text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.subTitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <Card className="border-2 bg-white dark:bg-[#1E1E1E] border-gray-200 dark:border-[#5F259F] transition-all duration-300">
              <CardContent className="p-8">
                {submitted ? (
                  // <-- 4. Mensaje de éxito si el formulario fue enviado
                  <div className="flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{t.successTitle}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t.successMessage}</p>
                  </div>
                ) : (
                  // Formulario normal si no ha sido enviado
                  <form onSubmit={handleSubmit} className="space-y-6"> 
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.nameLabel}
                      </label>
                      <Input id="name" name="name" placeholder={t.namePlaceholder} required className="bg-gray-100 dark:bg-[#2a2a2a] dark:text-white dark:border-gray-600 focus:ring-[#00C4CC] focus:border-[#00C4CC]" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.emailLabel}
                      </label>
                      <Input id="email" name="email" type="email" placeholder={t.emailPlaceholder} required className="bg-gray-100 dark:bg-[#2a2a2a] dark:text-white dark:border-gray-600 focus:ring-[#00C4CC] focus:border-[#00C4CC]" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.helpLabel}
                      </label>
                      <Textarea id="message" name="message" placeholder={t.helpPlaceholder} required className="bg-gray-100 dark:bg-[#2a2a2a] dark:text-white dark:border-gray-600 focus:ring-[#00C4CC] focus:border-[#00C4CC]" rows={4} />
                    </div>
                    <Button type="submit" className="w-full bg-[#00C4CC] hover:bg-[#00A5AD] text-white font-bold text-base py-6">
                      {t.submitButton}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
          {/* ... columna derecha con info de contacto y mascota ... */}
          <div className="md:col-span-2 flex flex-col items-center justify-center text-center">
             <Image
              src="/autolytics-robot-head.png"
              alt="Autolytics Mascot"
              width={180}
              height={180}
              className="mb-8"
              style={{
                filter:
                  "drop-shadow(0 4px 32px rgba(35, 20, 41, 0.7)) drop-shadow(0 2px 12px rgba(70, 27, 106, 0.5))",
              }}
            />
            <h3 className="text-2xl font-bold text-[#5F259F] dark:text-[#00C4CC] mb-6">
              {t.contactTitle}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                <a href="mailto:christian.bossio@autolytics.net" className="text-lg text-gray-700 dark:text-gray-200 hover:underline">
                  christian.bossio@autolytics.net
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                <span className="text-lg text-gray-700 dark:text-gray-200">{t.location}</span>
              </div>
              {/* Redes Sociales */}
              <div className="flex items-center justify-center gap-4 my-2">
                <a href="https://www.instagram.com/autolytics.ar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Image src="/instagram.png" alt="Instagram" width={28} height={28} className="hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61581353905999" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Image src="/facebook.png" alt="Facebook" width={28} height={28} className="hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.tiktok.com/@autolytics" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <Image src="/tiktok.png" alt="TikTok" width={28} height={28} className="hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/autolytics-automation-and-analytics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} className="hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}