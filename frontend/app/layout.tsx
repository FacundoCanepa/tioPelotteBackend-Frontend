import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { islandMoments, ebGaramond } from "@/lib/fonts/fonts";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Tio pelotte",
  description: "Ecommerce tio pelotte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${islandMoments.variable} ${ebGaramond.variable} antialiased `}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

