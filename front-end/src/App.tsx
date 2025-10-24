import { DeckMenu } from "./layout-components/DeckMenu/DeckMenu"
import { Footer } from "./layout-components/Footer/Footer"
import { Header } from "./layout-components/Header/Header"

  
function App() { 

  return (
    <div className="w-full mx-auto md:w-192 min-w-80">  
      <Header />
      
      <DeckMenu />     

      <Footer />

    </div>
  )
}

export default App
