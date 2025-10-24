 import { BrowserRouter, Route, Routes } from "react-router";
import { LayoutMain } from './layout-components/LayoutMain';
import { ComoFunciona } from "./pages/external/ComoFunciona";
import { Home } from './pages/external/Home';
import { LenormandForm } from "./pages/external/LenormandForm";
import { TarotForm } from "./pages/external/TarotForm";
  
function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
          <Route path="como-funciona" element={<ComoFunciona />} />
          <Route path="lenormand" element={<LenormandForm />} />
          <Route path="tarot" element={<TarotForm />} />
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}

export default App
