// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Background />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add additional routes for any other components or pages here */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
