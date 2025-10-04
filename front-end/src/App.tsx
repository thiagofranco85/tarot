import { DeckMenu } from "./layout-components/DeckMenu/DeckMenu"
import { Header } from "./layout-components/Header/Header"

  
function App() { 

  return (
    <div className="w-full mx-auto md:w-192 min-w-80">  
      <Header />

      <main className="mx-auto">
        <DeckMenu />
      </main>

      <footer className="mx-auto">
        <p>Rodapé</p>
      </footer>
    </div>
  )
}

export default App
