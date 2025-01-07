import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:"next-hero-two",
    template:" %s | next-hero-two "
  },
  description: "Super Powerful Next Hero Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >    
          <Navbar/>      
     <div>
     {children}
     </div>
        <footer className="bg-orange-500"> 
          <p>this is footer section</p>
        </footer>
      </body>
    </html>
  );
}
