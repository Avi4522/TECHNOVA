import React from 'react';
import { Cpu, Code, Lightbulb, BookOpen } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

const FOCUS_AREAS = [
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Exploring modern computing technologies, tools, architectures, and software systems.',
    color: '#00f0ff',
    borderGlow: 'rgba(0, 240, 255, 0.25)'
  },
  {
    icon: Code,
    title: 'Problem Solving',
    description: 'Developing algorithmic thinking, analytical capability, and practical debugging skills.',
    color: '#8b5cf6',
    borderGlow: 'rgba(139, 92, 246, 0.25)'
  },
  {
    icon: Lightbulb,
    title: 'Creativity',
    description: 'Encouraging original ideas, inventive project building, and technical ingenuity.',
    color: '#38bdf8',
    borderGlow: 'rgba(56, 189, 248, 0.25)'
  },
  {
    icon: BookOpen,
    title: 'Learning',
    description: 'Promoting continuous learning, hands-on practice, and collaborative technical growth.',
    color: '#34d399',
    borderGlow: 'rgba(52, 211, 153, 0.25)'
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="section-spacing"
      style={{
        backgroundColor: 'rgba(6, 9, 22, 0.6)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <SectionHeading
          badge="About Us"
          badgeType="cyan"
          title="About"
          gradientTitle="TECHNOVA"
          align="center"
        />

        {/* Primary Purpose Card */}
        <div style={{ maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <div
            className="glass-card"
            style={{
              padding: '2.5rem 2rem',
              textAlign: 'center',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              background: 'linear-gradient(180deg, rgba(12, 18, 38, 0.85) 0%, rgba(8, 12, 26, 0.9) 100%)',
              boxShadow: '0 15px 40px -15px rgba(0, 0, 0, 0.5)'
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
                lineHeight: 1.75,
                color: '#e2e8f0',
                margin: 0,
                fontWeight: 400
              }}
            >
              TECHNOVA is a student-focused technical club created to encourage students to explore
              technology, develop practical skills, solve problems, and participate in technical
              activities.
            </p>
          </div>
        </div>

        {/* What We Focus On Section */}
        <div style={{ marginTop: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}
            >
              What We <span className="gradient-text-purple">Focus On</span>
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', maxWidth: '520px', margin: '0 auto' }}>
              The foundational pillars that guide our technical initiatives and collaborative sessions.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {FOCUS_AREAS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    border: `1px solid ${item.borderGlow}`,
                    background: 'rgba(10, 15, 34, 0.65)'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: `rgba(${
                        item.color === '#00f0ff'
                          ? '0, 240, 255'
                          : item.color === '#8b5cf6'
                          ? '139, 92, 246'
                          : item.color === '#38bdf8'
                          ? '56, 189, 248'
                          : '52, 211, 153'
                      }, 0.12)`,
                      border: `1px solid ${item.borderGlow}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={22} color={item.color} />
                  </div>

                  <h4
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#f8fafc',
                      margin: 0
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#94a3b8',
                      lineHeight: 1.6,
                      margin: 0
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
