import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AiAgentsSection } from "@/components/ai-agents-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AiAgentsSection />
      <ServicesSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
