import React, { useState } from 'react';
import { ArrowRight, Code2, Sparkles, Terminal, Cpu, Layers } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('think');

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const pos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos - offset, behavior: 'smooth' });
    }
  };

  const codeSnippets = {
    think: `// 01. Analytical Mindset
const problem = identifyChallenge();
const strategy = formulateLogic(problem);
console.log("Analyzing solutions...");`,
    build: `// 02. Practical Engineering
import { CleanCode, Architecture } from 'technova';

export function createSystem() {
  return new Solution({ robust: true });
}`,
    innovate: `// 03. Future-Ready Exploration
async function pushBoundaries() {
  const nextGen = await exploreNewHorizons();
  return nextGen.transformExperience();
}`
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '110px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Radial Glows */}
      <div
        className="glow-orb glow-cyan"
        style={{
          width: '500px',
          height: '500px',
          top: '10%',
          left: '-10%'
        }}
      />
      <div
        className="glow-orb glow-purple"
        style={{
          width: '550px',
          height: '550px',
          bottom: '5%',
          right: '-10%'
        }}
      />

      <div className="cyber-grid-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Hero Typography & Actions */}
          <div style={{ maxWidth: '620px' }}>
            {/* Club Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(0, 240, 255, 0.08)',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                marginBottom: '1.75rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#00f0ff',
                  boxShadow: '0 0 8px #00f0ff'
                }}
              />
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#00f0ff',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}
              >
                College Technical Club
              </span>
            </div>

            {/* Main Brand Title */}
            <h1
              style={{
                fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
                color: '#ffffff'
              }}
            >
              TECH<span className="gradient-text-cyan">NOVA</span>
            </h1>

            {/* Tagline */}
            <div
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 2rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                marginBottom: '1.5rem'
              }}
              className="gradient-text-purple"
            >
              Think. Build. Innovate.
            </div>

            {/* Introduction Statement (Strictly adheres to non-invented facts) */}
            <p
              style={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '540px'
              }}
            >
              TECHNOVA is a college technical club focused on technology, learning,
              creativity, and innovation. We empower students to develop practical skills,
              explore modern computing paradigms, and collaborate on technical endeavors.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              <button
                type="button"
                onClick={() => scrollTo('events')}
                className="btn-primary"
                id="hero-explore-events-btn"
              >
                <span>Explore Events</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('challenges')}
                className="btn-secondary"
                id="hero-explore-challenges-btn"
              >
                <Code2 size={18} />
                <span>Explore Challenges</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sleek Tech Terminal Card */}
          <div style={{ position: 'relative' }}>
            {/* Ambient Background Glow on Terminal */}
            <div
              style={{
                position: 'absolute',
                inset: '-10px',
                background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(139, 92, 246, 0.15))',
                borderRadius: '24px',
                filter: 'blur(20px)',
                zIndex: 0
              }}
            />

            <div
              className="glass-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '1.5rem',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                backgroundColor: 'rgba(9, 14, 30, 0.85)'
              }}
            >
              {/* Terminal Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: '#64748b',
                      marginLeft: '8px'
                    }}
                  >
                    technova-core.js
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    color: '#00f0ff',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <Terminal size={14} />
                  <span>v1.0.0</span>
                </div>
              </div>

              {/* Interactive Paradigm Switcher */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '6px',
                  marginBottom: '1.2rem',
                  background: 'rgba(5, 8, 18, 0.6)',
                  padding: '4px',
                  borderRadius: '10px'
                }}
              >
                {[
                  { id: 'think', label: '01. Think', icon: Cpu },
                  { id: 'build', label: '02. Build', icon: Layers },
                  { id: 'innovate', label: '03. Innovate', icon: Sparkles }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '8px 6px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        background: isActive ? 'rgba(0, 240, 255, 0.15)' : 'transparent',
                        color: isActive ? '#00f0ff' : '#94a3b8'
                      }}
                    >
                      <Icon size={13} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Box Display */}
              <div
                style={{
                  background: 'rgba(4, 7, 16, 0.9)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  minHeight: '140px'
                }}
              >
                <pre
                  style={{
                    margin: 0,
                    fontSize: '0.86rem',
                    lineHeight: 1.6,
                    color: '#e2e8f0',
                    fontFamily: 'var(--font-mono)',
                    overflowX: 'auto'
                  }}
                >
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Interactive Status Footer */}
              <div
                style={{
                  marginTop: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.8rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '0.8rem',
                  color: '#64748b'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#22c55e',
                      boxShadow: '0 0 6px #22c55e'
                    }}
                  />
                  <span>Active & Ready</span>
                </div>
                <span>Initial Release v1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
