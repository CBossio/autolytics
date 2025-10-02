import type { Metadata } from "next";
import { Inter, Lexend_Deca } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
});

const siteUrl = "https://autolytics.ar"; // <<-- CAMBIA ESTO por tu dominio real

export const metadata: Metadata = {
  // --- SEO Básico y para LLMs ---
  title: {
    default: "Autolytics | Automatización, Analítica y Marketing para tu empresa",
    template: "%s | Autolytics",
  },
  description:
    "En Autolytics potenciamos tu negocio con automatización de procesos, analítica de datos y estrategias de marketing digital (SEO, campañas). Menos tareas manuales, más decisiones inteligentes.",
  keywords: [
    "automatización de procesos",
    "analítica de negocios",
    "business intelligence",
    "marketing digital",
    "SEO",
    "gestión de campañas",
    "publicidad online",
    "pymes",
    "Argentina",
    "Autolytics",
    "process automation",
    "business analytics",
    "digital marketing",
    "SME",
    "data-driven decisions",
    "data insights",
    "online advertising",
    "data visualization",
    "data strategy",
    "marketing strategy",
    "growth hacking",
    "customer acquisition",
    "conversion optimization",
    "content marketing",
    "social media marketing",
  ],
  authors: [{ name: "Autolytics", url: siteUrl }],
  metadataBase: new URL(siteUrl),

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
    title: "Autolytics | Automatización, Analítica y Marketing para tu empresa",
    description:
      "Transformamos tus procesos repetitivos, tus datos en insights y potenciamos tu marketing para hacer crecer tu negocio.",
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
    title: "Autolytics | Automatización, Analítica y Marketing para tu empresa",
    description:
      "Potenciamos tu negocio con automatización, analítica de datos y marketing digital.",
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