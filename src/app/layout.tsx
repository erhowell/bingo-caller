import type { Metadata } from "next";
import { Roboto, Mukta } from "next/font/google";
import { styled } from "styled-system/jsx";

import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto",
});
const mukta = Mukta({
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${mukta.variable}`}>
      <styled.body bg="theme.black">{children}</styled.body>
    </html>
  );
}
