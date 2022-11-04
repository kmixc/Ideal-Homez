import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
