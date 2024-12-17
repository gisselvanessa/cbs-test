import type { Metadata } from "next";
import {  Poppins} from 'next/font/google'
import "./globals.css";
import { Navbar } from "@/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <head>
        {/* <ThemeModeScript /> */}
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar/>
        {/* <h2 className="text-black">Bienvenido a cbs</h2> */}
        {children}
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      </body>
    </html>
  );
}
