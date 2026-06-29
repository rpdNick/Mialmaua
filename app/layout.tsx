import type { Metadata } from 'next';
import { Inter, Archivo } from "next/font/google"
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: 'Mialmaua',
  description: 'Mialmaua shop - online store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={cn("h-full antialiased", inter.variable, archivo.variable)}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
