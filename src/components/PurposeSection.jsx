import React from 'react';
import { Compass, Lightbulb, Code2 } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

const PURPOSE_PILLARS = [
  {
    icon: Compass,
    title: 'Central Club Portal',
    description:
      'Serving as the primary digital home for TECHNOVA to showcase our official events, announcements, and student technical resources.',
    color: '#00f0ff',
    borderGlow: 'rgba(0, 240, 255, 0.2)'
  },
  {
    icon: Code2,
    title: 'Hands-On Skill Building',
    description:
      'Providing an interactive practice environment where students can test their programming, debugging, logic, and web development fundamentals.',
    color: '#8b5cf6',
    borderGlow: 'rgba(139, 92, 246, 0.2)'
  },
  {
    icon: Lightbulb,
    title: 'Fostering Innovation',
    description:
      'Cultivating curiosity and creative problem solving through organized technical competitions and structured peer learning.',
    color: '#38bdf8',
    borderGlow: 'rgba(56, 189, 248, 0.2)'
  }
];

export default function PurposeSection() {
  return (
    <section
      className="section-spacing"
      style={{
        backgroundColor: 'rgba(7, 10, 22, 0.5)',
        borderTop: '1px solid rgba(255, 255, 255, 0.04)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
        position: 'relative'
      }}
    >
      <div className="container">
        <SectionHeading
          badge="Club Vision"
          badgeType="cyan"
          title="The Purpose of"
          gradientTitle="TECHNOVA"
          description="Built as a dedicated platform to encourage curiosity, practical engineering, and technical problem-solving among college students."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {PURPOSE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  border: `1px solid ${pillar.borderGlow}`,
                  background: 'rgba(11, 16, 34, 0.65)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `rgba(${pillar.color === '#00f0ff' ? '0, 240, 255' : pillar.color === '#8b5cf6' ? '139, 92, 246' : '56, 189, 248'}, 0.12)`,
                    border: `1px solid ${pillar.borderGlow}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={24} color={pillar.color} />
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#f8fafc'
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
