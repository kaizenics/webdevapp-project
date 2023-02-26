import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Sitemap from "./pages/Sitemap";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className='bg-gray-800'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <img src="https://neatlyproduction.com/wp-content/uploads/2022/11/Neatly_Logo_White_Big.png" alt="Logo" className="h-8 w-auto sm:h-10" />
              </div>
              <div className="-mr-2 -my-2 md:hidden">
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link to="/Home" className="text-base font-medium text-white hover:text-gray-300">Home</Link>
                <Link to="/Contact" className="ml-8 text-base font-medium text-white hover:text-gray-300">Contact</Link>
                <Link to="/About" className="ml-8 text-base font-medium text-white hover:text-gray-300">About</Link>
                <Link to="/Sitemap" className="ml-8 text-base font-medium text-white hover:text-gray-300">Sitemap</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/Home" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Home</Link>
              <Link to="/Contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Contact</Link>
              <Link to="/About" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">About</Link>
              <Link to="/Sitemap" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Sitemap</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/Home" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Sitemap" component={Sitemap} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

