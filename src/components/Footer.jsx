import React from 'react';
import { Terminal, ArrowUp, Mail, UserCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const pos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos - offset, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#03050c',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        {/* Main Footer Layout */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)'
                }}
              >
                <Terminal size={18} color="#00f0ff" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.3rem',
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

            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              College technical club focused on technology, learning, creativity, and innovation.
            </p>
            <div style={{ fontSize: '0.85rem', color: '#00f0ff', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              Think. Build. Innovate.
            </div>
          </div>

          {/* Links Grid */}
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {/* Quick Navigation Links */}
            <div>
              <h5
                style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  fontWeight: 700
                }}
              >
                Navigation
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {['home', 'events', 'challenges', 'about', 'contact'].map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => scrollToSection(e, id)}
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        fontSize: '0.88rem',
                        transition: 'color 0.2s ease',
                        textTransform: 'capitalize'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      {id}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Links */}
            <div>
              <h5
                style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  fontWeight: 700
                }}
              >
                Featured
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li>
                  <a
                    href="#events"
                    onClick={(e) => scrollToSection(e, 'events')}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    TECH ARENA 1.0
                  </a>
                </li>
                <li>
                  <a
                    href="#challenges"
                    onClick={(e) => scrollToSection(e, 'challenges')}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    Practice Arena
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Minimal Attractive Club Leadership Contact Column */}
          <div style={{ minWidth: '220px' }}>
            <h5
              style={{
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#ffffff',
                marginBottom: '1rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <UserCheck size={14} color="#00f0ff" />
              Club Contacts
            </h5>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {/* Avi Beladiya Minimal Contact */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                  Avi Beladiya <span style={{ fontSize: '0.75rem', color: '#00f0ff', fontWeight: 500 }}>(Club Head)</span>
                </div>
                <a
                  href="mailto:25dce007@charusat.edu.in"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  <Mail size={13} color="#00f0ff" />
                  <span>25dce007@charusat.edu.in</span>
                </a>
              </div>

              {/* Femi Dungrani Minimal Contact */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                  Femi Dungrani <span style={{ fontSize: '0.75rem', color: '#c084fc', fontWeight: 500 }}>(Club Head)</span>
                </div>
                <a
                  href="mailto:25dce024@charusat.edu.in"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  <Mail size={13} color="#c084fc" />
                  <span>25dce024@charusat.edu.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div
          style={{
            paddingTop: '1.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.84rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} TECHNOVA. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              fontSize: '0.84rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
