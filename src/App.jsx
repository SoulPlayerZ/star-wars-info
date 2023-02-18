import { BrowserRouter, Routes, Route } from "react-router-dom"
import CharsPage from "./pages/CharsPage";
import  "./css/myReset.css";
import PlanetsPage from "./pages/PlanetsPage";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/movies" element={<CharsPage />} />
        <Route path="/planets" element={<PlanetsPage/>} />
        <Route path="/starships" element={<CharsPage />} />
        <Route path="/vehicles" element={<CharsPage />} />
        <Route path="/" element={<CharsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
