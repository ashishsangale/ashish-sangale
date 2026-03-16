import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Sangale — Software Engineer",
  description: "Personal portfolio of Ashish Sangale, Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden antialiased">{children}</body>
    </html>
  );
}
