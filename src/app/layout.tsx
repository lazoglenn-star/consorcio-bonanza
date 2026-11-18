import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Consorcio Bonanza & Asociados | Expertos a su Alcance",
  description:
    "Asesoría Legal, Todo en Tramitología, Contaduría Pública, Ingeniería y Marketing Digital en San José, Costa Rica. Primera consulta gratuita.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${jakarta.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
