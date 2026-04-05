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
    "Product manager with 7+ years shipping ML-powered products at Fortune 1 scale. M.S. Data Science. Hands-on with agentic AI, LLMs, and recommendation engines.",
  openGraph: {
    title: "James Scott Herford — Senior Product Manager, AI/ML",
    description:
      "Product manager with 7+ years shipping ML-powered products at Fortune 1 scale. Recommendation engines, agentic AI, and hands-on building.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "James Scott Herford — Senior PM, AI/ML",
    description:
      "7+ years shipping ML-powered products at Fortune 1 scale.",
  },
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
