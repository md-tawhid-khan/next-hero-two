  
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";

const inter = Inter({subsets:["latin"]})



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
        className={inter.className}
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
