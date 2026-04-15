"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle } from "lucide-react";

declare global {
  interface Window { __GLOBAL_LANG__?: string }
}

export function ContactSection() {
  const [lang, setLang] = useState(
    typeof window !== "undefined" && window.__GLOBAL_LANG__ ? window.__GLOBAL_LANG__ : "es"
  );
  const [submitted, setSubmitted] = useState(false);

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
    title: tl("Ponte en Contacto", "Get in Touch", "Entre em Contato"),
    subTitle: tl(
      "Hablemos. Completa el formulario y nos pondremos en contacto para coordinar un diagnóstico gratuito y sin compromiso de tus procesos.",
      "Let's talk. Complete the form, and we will get in touch to coordinate a free, no-commitment diagnosis of your processes.",
      "Vamos conversar. Preencha o formulário e entraremos em contato para coordenar um diagnóstico gratuito e sem compromisso dos seus processos."
    ),
    contactTitle: tl("Información de Contacto", "Contact Information", "Informações de Contato"),
    nameLabel: tl("Nombre", "Name", "Nome"),
    namePlaceholder: tl("Tu nombre completo", "Your full name", "Seu nome completo"),
    emailLabel: tl("Email de la empresa", "Company Email", "E-mail da empresa"),
    emailPlaceholder: tl("contacto@tuempresa.com", "contact@yourcompany.com", "contato@suaempresa.com"),
    helpLabel: tl("¿En qué podemos ayudarte?", "How can we help you?", "Como podemos te ajudar?"),
    helpPlaceholder: tl(
      "Cuéntanos sobre tu negocio, qué procesos te gustaría automatizar, analizar, o qué servicios de marketing necesitas...",
      "Tell us about your business, what processes you'd like to automate, analyze, or what marketing services you need...",
      "Conte-nos sobre o seu negócio, quais processos gostaria de automatizar, analisar, ou quais serviços de marketing precisa..."
    ),
    submitButton: tl("Enviar Consulta", "Send Inquiry", "Enviar Consulta"),
    location: "Buenos Aires, Argentina",
    successTitle: tl("¡Mensaje Enviado!", "Message Sent!", "Mensagem Enviada!"),
    successMessage: tl(
      "Gracias por contactarnos. Te responderemos a la brevedad.",
      "Thank you for contacting us. We will get back to you shortly.",
      "Obrigado por entrar em contato. Responderemos em breve."
    ),
    networkError: tl(
      "Hubo un error de red. Por favor, revisa tu conexión.",
      "There was a network error. Please check your connection.",
      "Houve um erro de rede. Por favor, verifique sua conexão."
    ),
    submitError: tl(
      "Hubo un error al enviar el formulario. Por favor, intenta de nuevo.",
      "There was an error submitting the form. Please try again.",
      "Houve um erro ao enviar o formulário. Por favor, tente novamente."
    ),
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mkgqwory", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert(t.submitError);
      }
    } catch {
      alert(t.networkError);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-24 bg-white dark:bg-gradient-to-b dark:from-[#2C1E42] dark:to-[#1A0B2E] overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-purple-200 opacity-20 dark:hidden filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-blue-200 opacity-20 dark:hidden filter blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-[#5F259F] opacity-10 hidden dark:block filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[#461b6a] opacity-10 hidden dark:block filter blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#461b6a] dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.subTitle}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <Card className="border-2 bg-white dark:bg-[#1E1E1E] border-gray-200 dark:border-[#5F259F] transition-all duration-300 shadow-sm hover:shadow-md">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                    <CheckCircle className="w-16 h-16 text-[#00C4CC] mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {t.successTitle}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{t.successMessage}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.nameLabel}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t.namePlaceholder}
                        required
                        className="bg-gray-50 dark:bg-[#2a2a2a] dark:text-white dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.emailLabel}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t.emailPlaceholder}
                        required
                        className="bg-gray-50 dark:bg-[#2a2a2a] dark:text-white dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.helpLabel}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t.helpPlaceholder}
                        required
                        className="bg-gray-50 dark:bg-[#2a2a2a] dark:text-white dark:border-gray-600"
                        rows={4}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#00C4CC] hover:bg-[#00A5AD] text-white font-bold text-base py-6 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    >
                      {t.submitButton}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact info & mascot */}
          <div className="md:col-span-2 flex flex-col items-center justify-center text-center">
            <Image
              src="/autolytics-robot-head.png"
              alt="Autolytics Mascot"
              width={180}
              height={180}
              className="mb-8 select-none"
              draggable={false}
              style={{
                filter: "drop-shadow(0 4px 32px rgba(35, 20, 41, 0.7)) drop-shadow(0 2px 12px rgba(70, 27, 106, 0.5))",
              }}
            />
            <h3 className="text-2xl font-bold text-[#5F259F] dark:text-[#00C4CC] mb-6">
              {t.contactTitle}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-300 flex-shrink-0" />
                <span className="text-base text-gray-700 dark:text-gray-200">{t.location}</span>
              </div>
              {/* Social media */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <a
                  href="https://www.instagram.com/autolytics.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <Image src="/instagram.png" alt="Instagram" width={28} height={28} />
                </a>
                <a
                  href="https://www.facebook.com/autolytics.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <Image src="/facebook.png" alt="Facebook" width={28} height={28} />
                </a>
                <a
                  href="https://www.tiktok.com/@autolytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <Image src="/tiktok.png" alt="TikTok" width={30} height={30} />
                </a>
                <a
                  href="https://www.linkedin.com/company/autolytics-ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
