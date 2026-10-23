import type { Metadata } from "next";
import { Inter, Lexend_Deca } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { SEO, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  // --- SEO Básico y para LLMs ---
  title: {
    default: SEO.es.title,
    template: "%s | Autolytics",
  },
  description: SEO.es.description,
  keywords: [
    // Spanish
    "automatización de procesos",
    "agentes de inteligencia artificial",
    "agentes IA",
    "automatización con IA",
    "analítica de negocios",
    "business intelligence",
    "marketing digital",
    "SEO",
    "gestión de campañas",
    "publicidad online",
    "pymes",
    "Argentina",
    "Autolytics",
    // English
    "process automation",
    "AI agents",
    "artificial intelligence automation",
    "business analytics",
    "digital marketing",
    "SME",
    "data-driven decisions",
    "data insights",
    "online advertising",
    "data visualization",
    "marketing strategy",
    "customer acquisition",
    "workflow automation",
    "intelligent automation",
    // Portuguese
    "automação de processos",
    "agentes de inteligência artificial",
    "agentes IA",
    "automação com IA",
    "análise de negócios",
    "marketing digital",
    "otimização para motores de busca",
    "publicidade online",
    "PMEs",
    "Brasil",
    "automação inteligente",
    "fluxo de trabalho automatizado",
  ],
  authors: [{ name: "Autolytics", url: siteUrl }],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },

  // --- Favicons ---
  icons: {
    icon: "/favicon.png", // El favicon principal
    shortcut: "/favicon.png", // Para accesos directos
    apple: "/favicon.png", // Para dispositivos Apple
    other: [
      {
        rel: 'icon',
        url: '/favicon.png',
      },
    ],
  },
  // --- Open Graph (para Redes Sociales) ---
  openGraph: {
    title: SEO.es.title,
    description: SEO.es.description,
    url: siteUrl,
    siteName: "Autolytics",
    images: [
      {
        url: "/og-image.png", // Asegúrate de crear este archivo en la carpeta /public
        width: 1200,
        height: 630,
        alt: "Logo de Autolytics con el eslogan: Menos tareas manuales, más decisiones inteligentes.",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    title: SEO.es.title,
    description: SEO.es.description,
    images: [`${siteUrl}/og-image.png`], // Asegúrate de crear este archivo en la carpeta /public
  },

  // --- Robots ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${lexendDeca.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Autolytics",
              url: siteUrl,
              logo: `${siteUrl}/autolytics-robot-head.png`,
              description:
                "Automatización de procesos, agentes de IA, analítica de datos y marketing digital para empresas.",
              areaServed: ["AR", "BR"],
              address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
              sameAs: [
                "https://www.instagram.com/autolytics.ar/",
                "https://www.facebook.com/autolytics.ar",
                "https://www.tiktok.com/@autolytics",
                "https://www.linkedin.com/company/autolytics-ar",
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}