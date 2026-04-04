import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "James Scott Herford — Senior Product Manager, AI/ML",
  description:
    "Portfolio and resume of James Scott Herford, Senior Product Manager specializing in AI/ML products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased text-stone-700`}
      >
        {children}
      </body>
    </html>
  );
}
