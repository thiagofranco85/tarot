import { BrowserRouter, Route, Routes } from "react-router";
import { LayoutMain } from "./layout-components/LayoutMain";
import { Answer } from "./pages/external/Answer";
import { ComoFunciona } from "./pages/external/ComoFunciona";
import { DeckForm } from "./pages/external/DeckForm";
import { Home } from "./pages/external/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
          <Route path="como-funciona" element={<ComoFunciona />} />
          <Route path="lenormand" element={<DeckForm deckType="lenormand" />} />
          <Route path="tarot" element={<DeckForm deckType="tarot" />} />
          <Route path="answer" element={<Answer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
