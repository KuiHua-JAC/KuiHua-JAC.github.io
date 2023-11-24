import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kui Hua Wang",
  description: "Welcome to my world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-tertiary">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        {children}
      </main>
      <Footer />
    </html>
  );
}
