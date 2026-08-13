import React, { useEffect } from 'react';
import { X, Trophy, CheckCircle2, Shield, Flame, Terminal } from 'lucide-react';
import { officialEvent } from '../data/eventData';

export default function EventModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(2, 4, 10, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      <div
        className="glass-modal"
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.25rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#94a3b8';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <span className="badge badge-cyan">
              <Trophy size={13} />
              {officialEvent.category}
            </span>
            <span className="badge badge-purple">
              <Flame size={13} />
              Official Club Event
            </span>
          </div>

          <h2
            id="event-modal-title"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '0.5rem'
            }}
          >
            {officialEvent.title}
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: '#00f0ff',
              fontWeight: 500,
              fontFamily: 'var(--font-heading)'
            }}
          >
            {officialEvent.tagline}
          </p>
        </div>

        {/* Event Overview Section */}
        <div
          style={{
            backgroundColor: 'rgba(5, 8, 20, 0.7)',
            padding: '1.5rem',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            marginBottom: '1.75rem'
          }}
        >
          <h4
            style={{
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#94a3b8',
              marginBottom: '0.75rem',
              fontWeight: 700
            }}
          >
            Competition Overview
          </h4>
          <p
            style={{
              fontSize: '0.95rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
              margin: 0
            }}
          >
            {officialEvent.summary}
          </p>
        </div>

        {/* Competition Focus Highlights */}
        <div style={{ marginBottom: '2rem' }}>
          <h4
            style={{
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#94a3b8',
              marginBottom: '1rem',
              fontWeight: 700
            }}
          >
            Core Tracks & Competencies
          </h4>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '0.75rem'
            }}
          >
            {officialEvent.highlights.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <CheckCircle2 size={18} color="#00f0ff" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Information Notice (Accurately reflecting initial launch without invented details) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            padding: '14px 18px',
            borderRadius: '12px',
            backgroundColor: 'rgba(139, 92, 246, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            marginBottom: '1.75rem'
          }}
        >
          <Terminal size={20} color="#c084fc" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0, lineHeight: 1.5 }}>
            <strong style={{ color: '#ffffff' }}>Official Event Notice:</strong> TECH ARENA 1.0 is the official flagship event of TECHNOVA. Specific schedule timelines and participation guidelines will be shared through official club channels.
          </p>
        </div>

        {/* Modal Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '10px 22px', fontSize: '0.9rem' }}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
