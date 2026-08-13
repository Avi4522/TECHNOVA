import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
    if (onNavigate) {
      onNavigate(targetId);
    }
  };

  return (
    <>
      <header
        className="glass-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(5, 7, 17, 0.88)' : 'rgba(5, 7, 17, 0.65)',
          borderBottom: isScrolled ? '1px solid rgba(0, 240, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '74px'
          }}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: '#ffffff'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                border: '1px solid rgba(0, 240, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)'
              }}
            >
              <Terminal size={20} color="#00f0ff" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  background: 'linear-gradient(135deg, #ffffff 30%, #00f0ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                TECHNOVA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px'
            }}
            className="desktop-nav"
          >
            {NAV_ITEMS.map((item) => {
              const target = item.href.replace('#', '');
              const isActive = activeSection === target;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    color: isActive ? '#00f0ff' : '#94a3b8',
                    backgroundColor: isActive ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
                    border: isActive ? '1px solid rgba(0, 240, 255, 0.2)' : '1px solid transparent'
                  }}
                  className="nav-link"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Header Action / Status Badge */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '12px'
            }}
            className="desktop-nav"
          >
            <a
              href="#challenges"
              onClick={(e) => handleNavClick(e, '#challenges')}
              className="btn-outline-purple"
              style={{ padding: '8px 16px', fontSize: '0.84rem' }}
            >
              <Sparkles size={14} />
              Practice Arena
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              cursor: 'pointer'
            }}
            className="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X size={22} color="#00f0ff" /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 45,
            backgroundColor: 'rgba(2, 4, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            paddingTop: '90px',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            paddingBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ padding: '8px 12px', marginBottom: '8px' }}>
              <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                Technical Club Portal
              </span>
            </div>
            {NAV_ITEMS.map((item) => {
              const target = item.href.replace('#', '');
              const isActive = activeSection === target;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 18px',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: isActive ? '#00f0ff' : '#cbd5e1',
                    backgroundColor: isActive ? 'rgba(0, 240, 255, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                    border: isActive ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00f0ff' }} />}
                </a>
              );
            })}
          </div>

          <div
            style={{
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <a
              href="#events"
              onClick={(e) => handleNavClick(e, '#events')}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center' }}
            >
              Explore TECH ARENA 1.0
            </a>
          </div>
        </div>
      )}

      {/* Media query helper styles for responsive display */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
