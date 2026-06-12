import type { Metadata } from "next";
import { Space_Mono, Silkscreen } from "next/font/google";
import "./globals.scss";

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'], 
  style: ['normal', 'italic'],
  variable: '--font-space-mono',
});

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-silkscreen',
});

export const metadata: Metadata = {
  title: "Dana",
  description: "My Personal Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${silkscreen.variable}`}>
      <body>{children}</body>
    </html>
  );
}