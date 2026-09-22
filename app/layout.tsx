import type { Metadata, Viewport } from "next";
import logo from "@/assets/image/logo.png";
import "./globals.css";

const siteUrl = "https://sintecowc.netlify.app";
const siteName = "Raspagem e Aplicação de Sinteco WC";
const siteDescription =
  "Especialistas em restauração de pisos de madeira, raspagem de taco, aplicação de sinteco e acabamento profissional em Belo Horizonte e Minas Gerais.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} | Restauração de Pisos de Madeira em Minas Gerais`,
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  icons: { icon: logo.src },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName,
    title: `${siteName} | Restauração de Pisos de Madeira`,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Raspagem e Aplicação de Sinteco WC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Restauração de Pisos de Madeira`,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  keywords: [
    "raspagem de taco",
    "raspagem de piso de madeira",
    "restauração de piso de madeira",
    "aplicação de sinteco",
    "sinteco para piso",
    "piso de madeira",
    "reforma de piso",
    "acabamento de piso",
    "serviço de piso madeira",
    "Raspagem e Aplicação de Sinteco WC",
    "Belo Horizonte",
    "Minas Gerais",
    "Contagem",
    "Betim",
    "Uberlândia",
    "Juiz de Fora",
    "Montes Claros",
    "Ribeirão das Neves",
    "Ipatinga",
    "Governador Valadares",
    "Divinópolis",
    "Sete Lagoas",
    "Santa Luzia",
    "Patos de Minas",
    "Teófilo Otoni",
    "Varginha",
    "Poços de Caldas",
    "Ouro Preto",
    "Barbacena",
    "Pouso Alegre",
    "Leopoldina",
    "Araxá",
    "Itabira",
    "restauração de piso em BH",
    "raspagem de piso em Minas Gerais",
    "sinteco em Belo Horizonte",
    "reforma de piso de madeira em Minas Gerais",
    "empresa de raspagem de piso",
    "especialista em piso de madeira",
    "acabamento de taco",
    "piso de taco",
    "restauração de madeira",
    "piso madeira BH",
    "sinteco bh",
  ],
  category: "home improvement",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#102A43",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className="antialiased">{children}</body>
    </html>
  );
}
