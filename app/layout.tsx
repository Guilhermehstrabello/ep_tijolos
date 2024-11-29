import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ep Tijolos",
  description:
    "Tijolo Baiano, Tijolo Estrutural, Tijolo de Barro e muito mais: Tudo em Primeira Linha. Garantimos Logística Rápida, Controle de Qualidade e um Atendimento Pós-Venda Premium para Manter sua Obra Sempre no Caminho do Sucesso!",
};

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=${'GTM-NLKZJPBR'}'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NLKZJPBR');
            `,
          }}
        />
      </head>
      <body className={redHatDisplay.className}>
        {/* NoScript Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLKZJPBR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
