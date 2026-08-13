import React from 'react';

export default function SectionHeading({
  badge,
  badgeType = 'cyan',
  title,
  gradientTitle = '',
  description,
  align = 'center',
  id
}) {
  const isCenter = align === 'center';

  const badgeClass =
    badgeType === 'purple'
      ? 'badge badge-purple'
      : badgeType === 'emerald'
      ? 'badge badge-emerald'
      : badgeType === 'amber'
      ? 'badge badge-amber'
      : 'badge badge-cyan';

  return (
    <div
      id={id}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '760px' : '100%',
        marginLeft: isCenter ? 'auto' : '0',
        marginRight: isCenter ? 'auto' : '0',
        marginBottom: '3.5rem'
      }}
    >
      {badge && (
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: isCenter ? 'center' : 'flex-start' }}>
          <span className={badgeClass}>{badge}</span>
        </div>
      )}
      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 800,
          lineHeight: 1.2,
          color: '#f8fafc',
          marginBottom: '1rem'
        }}
      >
        {title}{' '}
        {gradientTitle && (
          <span className={badgeType === 'purple' ? 'gradient-text-purple' : 'gradient-text-cyan'}>
            {gradientTitle}
          </span>
        )}
      </h2>
      {description && (
        <p
          style={{
            fontSize: '1.05rem',
            color: '#94a3b8',
            lineHeight: 1.6
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
