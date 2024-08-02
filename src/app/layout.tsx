import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvoider";
import Sidebar from "@/components/Sidebar";

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main
            className={`grid lg:grid-cols-4 md:grid-cols-3 h-screen overflow-hidden`}
          >
            <div className={`h-full col-span-3 overflow-y-auto`}>
              <Header />
              {children}
            </div>
            <div className="col-span-1 hidden lg:block">
              <Sidebar />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
