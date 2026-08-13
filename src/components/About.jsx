import React from 'react';
import { Cpu, Code, Lightbulb, BookOpen, UserCheck, GraduationCap, Award, IdCard, Mail } from 'lucide-react';
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

const CLUB_HEADS = [
  {
    name: 'Avi Beladiya',
    role: 'Club Head',
    idNo: '25DCE007',
    email: '25dce007@charusat.edu.in',
    department: 'Computer Engineering',
    institute: 'DEPSTAR',
    initials: 'AB',
    accent: '#00f0ff',
    border: 'rgba(0, 240, 255, 0.3)',
    bgGradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)'
  },
  {
    name: 'Femi Dungrani',
    role: 'Club Head',
    idNo: '25DCE024',
    email: '25dce024@charusat.edu.in',
    department: 'Computer Engineering',
    institute: 'DEPSTAR',
    initials: 'FD',
    accent: '#c084fc',
    border: 'rgba(192, 132, 252, 0.3)',
    bgGradient: 'linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(236, 72, 153, 0.1) 100%)'
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

        {/* Primary Purpose Card (Strict Prompt Text) */}
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
        <div style={{ marginTop: '2rem', marginBottom: '4.5rem' }}>
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

        {/* Club Leadership / Club Heads */}
        <div style={{ marginTop: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
              <span className="badge badge-purple">
                <UserCheck size={13} />
                Club Leadership
              </span>
            </div>
            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}
            >
              Club <span className="gradient-text-cyan">Heads</span>
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', maxWidth: '520px', margin: '0 auto' }}>
              Leading TECHNOVA's student initiatives, events, and technical community.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem',
              maxWidth: '820px',
              margin: '0 auto'
            }}
          >
            {CLUB_HEADS.map((head, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  border: `1px solid ${head.border}`,
                  background: 'rgba(10, 15, 34, 0.8)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle corner aura */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: head.bgGradient,
                    filter: 'blur(30px)',
                    pointerEvents: 'none'
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {/* Glowing Initials Avatar */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: head.bgGradient,
                      border: `1px solid ${head.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      color: head.accent,
                      boxShadow: `0 0 20px ${head.border}`
                    }}
                  >
                    {head.initials}
                  </div>

                  <div>
                    <h4
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '0.2rem'
                      }}
                    >
                      {head.name}
                    </h4>
                    <span
                      style={{
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: head.accent,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {head.role}
                    </span>
                  </div>
                </div>

                {/* ID and Academic Details */}
                <div
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(5, 8, 20, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <IdCard size={14} color="#00f0ff" />
                      Student ID
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: 'rgba(0, 240, 255, 0.1)',
                        border: '1px solid rgba(0, 240, 255, 0.2)'
                      }}
                    >
                      {head.idNo}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Mail size={14} color="#00f0ff" />
                      Official Email
                    </span>
                    <a
                      href={`mailto:${head.email}`}
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        color: '#00f0ff',
                        fontFamily: 'var(--font-mono)',
                        textDecoration: 'none'
                      }}
                    >
                      {head.email}
                    </a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <GraduationCap size={14} color="#c084fc" />
                      Department
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', textAlign: 'right' }}>
                      {head.department}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Award size={14} color="#34d399" />
                      Institute
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00f0ff' }}>
                      {head.institute}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
