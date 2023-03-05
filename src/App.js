import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar"; 
import "./index.css"; 

function App() {
  return (
    <BrowserRouter>
       <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
