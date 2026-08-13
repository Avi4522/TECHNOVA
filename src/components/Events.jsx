import React, { useState } from 'react';
import { Trophy, ChevronRight, Sparkles, ShieldAlert, Cpu, Terminal } from 'lucide-react';
import { officialEvent } from '../data/eventData';
import EventModal from './EventModal';
import SectionHeading from './common/SectionHeading';

export default function Events() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="events" className="section-spacing" style={{ position: 'relative' }}>
      {/* Ambient background accent */}
      <div
        className="glow-orb glow-purple"
        style={{
          width: '450px',
          height: '450px',
          top: '20%',
          right: '5%'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <SectionHeading
          badge="Official Club Event"
          badgeType="purple"
          title="Featured"
          gradientTitle="Event"
          description="Explore the premier technical competition organized by TECHNOVA."
        />

        {/* Large Flagship Event Hero Showcase */}
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              border: '1px solid rgba(139, 92, 246, 0.35)',
              background: 'linear-gradient(135deg, rgba(14, 20, 42, 0.9) 0%, rgba(8, 12, 28, 0.95) 100%)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 50px -15px rgba(139, 92, 246, 0.2)'
            }}
          >
            {/* Background Decorative Technical Circuit Graphic */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
                position: 'relative',
                zIndex: 2
              }}
            >
              {/* Event Badge Header */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <span className="badge badge-purple" style={{ fontSize: '0.8rem' }}>
                  <Trophy size={14} />
                  Official Flagship Event
                </span>
                <span className="badge badge-cyan" style={{ fontSize: '0.8rem' }}>
                  <Cpu size={14} />
                  Technical Arena
                </span>
              </div>

              {/* Event Title (Strictly TECH ARENA 1.0) */}
              <div>
                <h3
                  style={{
                    fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#ffffff',
                    marginBottom: '0.75rem'
                  }}
                >
                  {officialEvent.title}
                </h3>
                <p
                  style={{
                    fontSize: '1.2rem',
                    color: '#c084fc',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    margin: 0
                  }}
                >
                  {officialEvent.tagline}
                </p>
              </div>

              {/* Event Visual Feature Points */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1rem',
                  padding: '1.5rem',
                  borderRadius: '14px',
                  background: 'rgba(5, 8, 20, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(0, 240, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00f0ff'
                    }}
                  >
                    <Terminal size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Format</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc' }}>
                      Technical Challenges
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(139, 92, 246, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#c084fc'
                    }}
                  >
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Focus</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc' }}>
                      Skill & Problem Solving
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Action Button */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '0.5rem'
                }}
              >
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="btn-primary"
                  id="view-event-btn"
                  style={{
                    padding: '14px 32px',
                    fontSize: '1rem',
                    background: 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%)',
                    color: '#ffffff'
                  }}
                >
                  <span>View Event</span>
                  <ChevronRight size={20} />
                </button>

                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  * Official competition organized by TECHNOVA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Modal Triggered by "View Event" */}
      <EventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
