import { BrowserRouter, Routes, Route } from "react-router-dom"
import CharsPage from "./pages/CharsPage";
import  "./css/myReset.css";
import PlanetsPage from "./pages/PlanetsPage";
import MoviesPage from "./pages/MoviesPage";
import StarShipsPage from "./pages/StarShipsPage";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/movies" element={<MoviesPage />} />
        <Route path="/planets" element={<PlanetsPage/>} />
        <Route path="/starships" element={<StarShipsPage />} />
        <Route path="/vehicles" element={<CharsPage />} />
        <Route path="/" element={<CharsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
