import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lyda Lawn Care & Landscaping LLC",
  description: "Professional lawn care and landscaping services since 1994. Quality service for residential and commercial properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
