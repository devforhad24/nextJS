import type { ReactNode } from "react";

export default function RootLayout({children} : {children : ReactNode}){
  return(
    <html lang="en">
      <head>
        <title>Next.js Course - Forhad</title>
      </head>
      <body>
        <header>My Navbar</header>
        {children}
        <footer>My Footer</footer>
      </body>
    </html>
  )
}