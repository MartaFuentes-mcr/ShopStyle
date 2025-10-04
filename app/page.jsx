import { NavBar } from "@/components/NavBar"
import { ItemListContainer } from "@/components/ItemListContainer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <ItemListContainer greeting="Descubre tu estilo perfecto" />
    </main>
  )
}
