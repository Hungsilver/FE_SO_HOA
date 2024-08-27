import type { Metadata } from "next";  
import { Inter } from "next/font/google";  
import "./globals.css";  
import Navbar from "@/components/navbar";  

const inter = Inter({ subsets: ["latin"] });  

export const metadata: Metadata = {  
  title: "Số hóa sách",  
  description: "Hệ thống số hóa sách",  
};  

export default function RootLayout({  
  children, 
}: Readonly<{  
  children: React.ReactNode;
}>) {  
  return (
    <html lang="en">  
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>  
    </html>  
  );  
}