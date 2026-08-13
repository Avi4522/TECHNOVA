import React from 'react';
import { ArrowUpRight, Code, Bug, Brain, Globe, Clock } from 'lucide-react';

const CATEGORY_ICONS = {
  Programming: Code,
  Debugging: Bug,
  Logic: Brain,
  Web: Globe
};

export default function ChallengeCard({ challenge, onSelect }) {
  const Icon = CATEGORY_ICONS[challenge.category] || Code;

  const difficultyClass =
    challenge.difficulty === 'Beginner'
      ? 'badge badge-emerald'
      : challenge.difficulty === 'Intermediate'
      ? 'badge badge-amber'
      : 'badge badge-rose';

  return (
    <div
      className="glass-card"
      style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        background: 'rgba(10, 15, 32, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div>
        {/* Top Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>
              <Icon size={12} />
              {challenge.category}
            </span>
          </div>

          <span className={difficultyClass} style={{ fontSize: '0.72rem' }}>
            {challenge.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#f8fafc',
            marginBottom: '0.65rem',
            lineHeight: 1.3
          }}
        >
          {challenge.title}
        </h3>

        {/* Short Description */}
        <p
          style={{
            fontSize: '0.9rem',
            color: '#94a3b8',
            lineHeight: 1.55,
            marginBottom: '1.5rem'
          }}
        >
          {challenge.shortDescription}
        </p>
      </div>

      {/* Card Footer / Action */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.8rem' }}>
          <Clock size={13} />
          <span>{challenge.readTime}</span>
        </div>

        <button
          type="button"
          onClick={() => onSelect(challenge)}
          className="btn-outline-purple"
          style={{
            padding: '8px 14px',
            fontSize: '0.82rem',
            borderRadius: '8px',
            gap: '4px'
          }}
        >
          <span>View Challenge</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
}
