import type { Metadata } from "next";
import {  Poppins} from 'next/font/google'
import "./globals.css";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "CBS",
  description: "Created by Jakay S.A.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <h2>hola de nuevo</h2>
        {children}
      </body>
    </html>
  );
}
