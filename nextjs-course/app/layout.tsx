import type { ReactNode } from "react";

export default function RootLayout({children} : {children : ReactNode}){
  return(
    <html lang="en">
      <head>
        <title>Next.js Course - Forhad</title>
      </head>
      <body>
        <header style={{padding:12, background:"#a69e9e"}}>My Navbar
          <nav style={{display:"flex", gap:12}}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/dashboard">Dashboard</a>
          </nav>
        </header>
        {children}
        <footer style={{padding:12, background:"#a69e9e"}}>My Footer</footer>
      </body>
    </html>
  )
}