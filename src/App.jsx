import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MangoCatalog from './components/MangoCatalog';
import Contact from './components/Contact';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds for a premium feel
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MangoCatalog />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
