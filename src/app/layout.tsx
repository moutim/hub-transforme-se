import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './global.css';
import styles from './layout.module.css';
import MenuAside from "@/shared/components/menu-aside/menu-aside";
import Search from "@/shared/components/search/search";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hub Transforme-se",
  description: "Plataforma com os conteúdos do curso do programa Transforme-se. Acesse conteúdos, acompanhe seu progresso e desenvolva suas habilidades em programação.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}>
        <MenuAside />
        <main className={`section ${styles.main}`}>
          <Search />
          {children}
        </main>
      </body>
    </html>
  );
}
