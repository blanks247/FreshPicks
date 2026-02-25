import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MangoCatalog from './components/MangoCatalog';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MangoCatalog />
        <Contact />
      </main>
    </div>
  );
}

export default App;
