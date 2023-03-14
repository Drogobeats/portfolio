import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

export default async  function Home (){
  const res = await fetch('http://localhost:3000/api/post')
  const data = await res.json()
  console.log (data)
  return (
    <main>
      <h1>Home</h1>
    </main>
  )
}
