import { BrowserRouter, Routes, Route } from "react-router-dom"
import CharsPage from "./pages/CharsPage";
import Header from "./components/Header";
import  "./css/myReset.css";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/movies" element={<CharsPage />} />
        <Route path="/planets" element={<Header />} />
        <Route path="/starships" element={<CharsPage />} />
        <Route path="/vehicles" element={<CharsPage />} />
        <Route path="/" element={<CharsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
