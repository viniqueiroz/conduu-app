import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "Conduu | Conquiste sua CNH com os melhores instrutores",
  description: "Encontre instrutores homologados, agende suas aulas práticas pelo celular e acompanhe sua evolução até a aprovação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`} style={{scrollBehavior:'smooth'}} suppressHydrationWarning>
      <body className="bg-white text-slate-900 font-sans">{children}</body>
    </html>
  );
}