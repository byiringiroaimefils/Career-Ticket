import Navigation from "./Components/Nav"
import Home from "./Components/Home"
import Skills from "./Components/Pages/Skills"
import Program from "./Components/Pages/Program"
import About from "./Components/Pages/About"
import Contact from "./Components/Pages/Contact"

import Footer from "./Components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BrowserRouter>
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Program" element={<Program />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App 
