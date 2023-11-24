import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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
      <body>
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-tertiary">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
