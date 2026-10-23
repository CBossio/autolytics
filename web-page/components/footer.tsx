"use client";

import Image from "next/image";
import { useLang } from "@/lib/use-lang";

export function Footer() {
  const { tl } = useLang();

  const links = [
    { label: tl("Agentes IA", "AI Agents", "Agentes IA"), id: "ai-agents" },
    { label: tl("Servicios", "Services", "Serviços"), id: "services" },
    { label: "FAQ", id: "faq" },
    { label: tl("Contacto", "Contact", "Contato"), id: "contact" },
  ];

  return (
    <footer className="bg-[#1A0B2E] text-purple-200 px-4 py-10">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/autolytics-robot-head.png" alt="" width={36} height={36} aria-hidden />
          <span className="font-display text-lg text-[#d8c7fa]">Autolytics</span>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {links.map(({ label, id }) => (
            <a key={id} href={`#${id}`} className="hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-purple-300/80">
          © {new Date().getFullYear()} Autolytics. Buenos Aires, Argentina.
        </p>
      </div>
    </footer>
  );
}
