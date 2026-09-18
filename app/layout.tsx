import type { Metadata, Viewport } from "next";
import logo from "@/assets/image/logo.png";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Piso Nobre | Raspagem, Restauro e Aplicação de Sinteco em Minas Gerais",
  description:
    "Especialista em raspagem de piso de madeira, restauração de taco, aplicação de sinteco e acabamento premium em Belo Horizonte e em toda Minas Gerais. Atendemos residências, imóveis e reformas com qualidade profissional e resultado impecável.",
  icons: { icon: logo.src },
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
    "piso nobre",
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
