import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, HelpCircle, Code2, Copy, Check, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ChallengeModal({ challenge, isOpen, onClose }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Reset state when a new challenge opens
  useEffect(() => {
    setSelectedOption(null);
    setSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
    setCopiedCode(false);
  }, [challenge, isOpen]);

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

  if (!isOpen || !challenge) return null;

  const handleCopyCode = () => {
    if (challenge.codeSnippet) {
      navigator.clipboard.writeText(challenge.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) return;

    const correct = selectedOption === challenge.correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);

    if (correct) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // Safe fallback
      }
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  const difficultyClass =
    challenge.difficulty === 'Beginner'
      ? 'badge badge-emerald'
      : challenge.difficulty === 'Intermediate'
      ? 'badge badge-amber'
      : 'badge badge-rose';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="challenge-modal-title"
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
          maxWidth: '720px',
          maxHeight: '92vh',
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
        <div style={{ marginBottom: '1.5rem', paddingRight: '40px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '0.75rem' }}>
            <span className="badge badge-cyan">{challenge.category}</span>
            <span className={difficultyClass}>{challenge.difficulty}</span>
            <span
              style={{
                fontSize: '0.75rem',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '4px'
              }}
            >
              • {challenge.readTime} practice
            </span>
          </div>

          <h2
            id="challenge-modal-title"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '0.5rem'
            }}
          >
            {challenge.title}
          </h2>

          <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
            {challenge.description}
          </p>
        </div>

        {/* Code Snippet / Problem Context */}
        {challenge.codeSnippet && (
          <div
            style={{
              position: 'relative',
              backgroundColor: '#040712',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              overflow: 'hidden',
              marginBottom: '1.75rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 16px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Code2 size={16} color="#00f0ff" />
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  Problem Context
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyCode}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'none',
                  border: 'none',
                  color: copiedCode ? '#34d399' : '#94a3b8',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <pre
              style={{
                margin: 0,
                padding: '1.25rem 1.5rem',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                color: '#e2e8f0',
                fontFamily: 'var(--font-mono)',
                overflowX: 'auto'
              }}
            >
              <code>{challenge.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* Interactive Practice Question */}
        <div
          style={{
            backgroundColor: 'rgba(9, 14, 30, 0.75)',
            padding: '1.5rem',
            borderRadius: '14px',
            border: '1px solid rgba(0, 240, 255, 0.15)',
            marginBottom: '1.5rem'
          }}
        >
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '1rem'
            }}
          >
            {challenge.question}
          </h4>

          {/* Multiple Choice Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.25rem' }}>
            {challenge.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              let optionStyle = {
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(255, 255, 255, 0.02)',
                color: '#e2e8f0',
                cursor: submitted ? 'default' : 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.92rem',
                textAlign: 'left'
              };

              if (submitted) {
                if (option === challenge.correctAnswer) {
                  optionStyle.borderColor = 'rgba(52, 211, 153, 0.5)';
                  optionStyle.background = 'rgba(52, 211, 153, 0.12)';
                  optionStyle.color = '#34d399';
                } else if (isSelected && !isCorrect) {
                  optionStyle.borderColor = 'rgba(244, 63, 94, 0.5)';
                  optionStyle.background = 'rgba(244, 63, 94, 0.12)';
                  optionStyle.color = '#fb7185';
                }
              } else if (isSelected) {
                optionStyle.borderColor = '#00f0ff';
                optionStyle.background = 'rgba(0, 240, 255, 0.12)';
                optionStyle.color = '#ffffff';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={submitted}
                  onClick={() => setSelectedOption(option)}
                  style={optionStyle}
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: isSelected
                        ? '6px solid #00f0ff'
                        : '2px solid rgba(255, 255, 255, 0.25)',
                      flexShrink: 0
                    }}
                  />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>{option}</span>
                </button>
              );
            })}
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
            {!submitted ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!selectedOption}
                className="btn-primary"
                style={{
                  padding: '10px 24px',
                  fontSize: '0.9rem',
                  opacity: selectedOption ? 1 : 0.5,
                  cursor: selectedOption ? 'pointer' : 'not-allowed'
                }}
              >
                Submit Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleReset}
                className="btn-secondary"
                style={{ padding: '10px 20px', fontSize: '0.88rem' }}
              >
                <RefreshCw size={15} />
                <span>Try Again</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 16px',
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#94a3b8',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              <HelpCircle size={15} />
              <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
            </button>
          </div>

          {/* Hint Box */}
          {showHint && (
            <div
              style={{
                marginTop: '1rem',
                padding: '12px 16px',
                borderRadius: '10px',
                backgroundColor: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                color: '#fbbf24',
                fontSize: '0.88rem'
              }}
            >
              💡 <strong>Hint:</strong> {challenge.hint}
            </div>
          )}

          {/* Validation Feedback & Explanation */}
          {submitted && (
            <div
              style={{
                marginTop: '1.25rem',
                padding: '14px 18px',
                borderRadius: '12px',
                backgroundColor: isCorrect
                  ? 'rgba(16, 185, 129, 0.1)'
                  : 'rgba(244, 63, 94, 0.1)',
                border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                {isCorrect ? (
                  <>
                    <CheckCircle size={18} color="#34d399" />
                    <strong style={{ color: '#34d399' }}>Correct Answer! Great work!</strong>
                  </>
                ) : (
                  <>
                    <AlertCircle size={18} color="#fb7185" />
                    <strong style={{ color: '#fb7185' }}>Not quite. Review the explanation below:</strong>
                  </>
                )}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', margin: 0, lineHeight: 1.5 }}>
                {challenge.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Notice */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.8rem',
            color: '#64748b'
          }}
        >
          <span>* Self-paced practice demonstration</span>
          <button
            type="button"
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
          >
            Back to Challenges
          </button>
        </div>
      </div>
    </div>
  );
}
