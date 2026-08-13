import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PurposeSection from './components/PurposeSection';
import Events from './components/Events';
import Challenges from './components/Challenges';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CanvasBackground from './components/CanvasBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'events', 'challenges', 'about', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#050711',
        minHeight: '100vh',
        color: '#f8fafc',
        overflowX: 'hidden'
      }}
    >
      {/* Background Interactive Particle Canvas */}
      <CanvasBackground />

      {/* Main Glass Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={(id) => setActiveSection(id)} />

      {/* Main Content Sections */}
      <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <PurposeSection />
        <Events />
        <Challenges />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
