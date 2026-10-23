"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/lib/use-lang";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.04 3C9.4 3 4 8.39 4 15.03c0 2.12.55 4.19 1.6 6.02L4 29l8.12-1.57a12.03 12.03 0 0 0 3.92.65h.01C22.68 28.08 28 22.69 28 16.05 28 9.4 22.68 3 16.04 3Zm0 22.03h-.01c-1.2 0-2.37-.32-3.4-.93l-.24-.15-4.82.93.97-4.7-.16-.25a9.96 9.96 0 0 1-1.53-5.3c0-5.5 4.48-9.98 9.99-9.98 5.5 0 9.98 4.48 9.98 9.99 0 5.5-4.48 9.99-9.98 9.99Zm5.47-7.48c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const { tl } = useLang();
  const reduce = useReducedMotion();

  const label = tl("Escribinos por WhatsApp", "Chat with us on WhatsApp", "Fale conosco no WhatsApp");
  const message = tl(
    "Hola Autolytics, me gustaría agendar un diagnóstico gratuito.",
    "Hi Autolytics, I'd like to schedule a free diagnosis.",
    "Olá Autolytics, gostaria de agendar um diagnóstico gratuito."
  );

  return (
    <motion.a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      initial={reduce ? false : { opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: reduce ? 0 : 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={reduce ? undefined : { scale: 1.08 }}
      whileTap={reduce ? undefined : { scale: 0.95 }}
      className="focus-ring fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-lg shadow-black/30 hover:bg-[#0f7a6c] sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#128C7E] opacity-40 motion-safe:animate-ping [animation-duration:2.6s]"
      />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  );
}
