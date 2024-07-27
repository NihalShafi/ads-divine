import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADS Divine",
  description: "Clone Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <main className="grid grid-cols-4  h-screen overflow-hidden">
        <div className="h-full col-span-3 overflow-y-auto">
          {children}
          </div>
          <Sidebar/>
        </main>
      </body>
    </html>
  );
}

function Sidebar(){
  return (
    <div className="h-full  bg-green-600 col-span-1 items-center justify-center flex">
        <h2 className="text-white text-2xl "> Hello world </h2>
      </div>
  )
} 