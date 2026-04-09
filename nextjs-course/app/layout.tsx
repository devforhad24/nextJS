import type { ReactNode } from "react";
import "./globals.css"
import {Inter} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight:["400","700"],
  display:"swap",
})

export default function RootLayout({children} : {children : ReactNode}){
  return(
    <html lang="en">
      <head>
        <title>Next.js Course - Forhad</title>
      </head>
      <body className={inter.className}>
        <header style={{padding:12, background:"#8a77f5"}}>My Navbar
        </header>
        {children}
        <footer style={{padding:12, background:"#8a77f5"}}>My Footer</footer>
      </body>
    </html>
  )
}