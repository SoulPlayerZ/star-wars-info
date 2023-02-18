import { BrowserRouter, Routes, Route } from "react-router-dom"
import CharsPage from "./pages/CharsPage";
import PlanetsPage from "./pages/PlanetsPage";
import MoviesPage from "./pages/MoviesPage";
import SpeciesPage from "./pages/SpeciesPage";

import VehiclesPage from "./pages/VehiclesPage";
import StarShipsPage from "./pages/StarShipsPage";
import  "./css/myReset.css";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/planets" element={<PlanetsPage/>} />
        <Route path="/species" element={<SpeciesPage />} />
        <Route path="/starships" element={<StarShipsPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/" element={<CharsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
