const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "@/app/Store/provider";
import { Footer, Header } from "@/app/components";

export const metadata: Metadata = {
  title: "Covest",
  description: "Estate Agent",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>

            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
