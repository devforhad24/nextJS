import Image from "next/image"

export default function Home(){
  return(
    <main style={{padding: "40px"}}>
      <p>This is main Component</p>
      <Image 
        // src='/hero.png' 
        alt="Hero Image"
        src="https://images.unsplash.com/photo-1775563798442-a1b7e114bff7?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={300} height={300}
      />
    </main>
  )
}