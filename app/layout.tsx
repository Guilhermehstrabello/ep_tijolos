import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ep Tijolos",
  description: "Tijolo Baiano, Tijolo Estrutural, Tijolo de Barro e muito mais: Tudo em Primeira Linha.Garantimos Logística Rápida, Controle de Qualidade e um Atendimento Pós-Venda Premium para Manter sua Obra Sempre no Caminho do Sucesso!",
};

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={redHatDisplay.className}>
        {children}
      </body>
    </html>
  );
}
