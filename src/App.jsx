import { BrowserRouter, Routes, Route } from "react-router-dom"
import CharsPage from "./pages/CharsPage";
import  "./css/myReset.css";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
