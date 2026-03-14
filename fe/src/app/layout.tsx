import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnHub Admin Dashboard",
  description: "LearnHub Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F9FA] text-gray-900 min-h-screen">{children}</body>
    </html>
  );
}
