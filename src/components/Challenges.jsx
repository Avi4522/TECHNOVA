import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, Code2 } from 'lucide-react';
import { practiceChallenges, practiceCategories } from '../data/challenges';
import ChallengeCard from './ChallengeCard';
import ChallengeModal from './ChallengeModal';
import SectionHeading from './common/SectionHeading';

export default function Challenges() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChallenge, setActiveChallenge] = useState(null);

  const filteredChallenges = useMemo(() => {
    return practiceChallenges.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="challenges" className="section-spacing" style={{ position: 'relative' }}>
      {/* Background Glow */}
      <div
        className="glow-orb glow-cyan"
        style={{
          width: '500px',
          height: '500px',
          bottom: '10%',
          left: '-5%'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <SectionHeading
          badge="Practice Challenges"
          badgeType="cyan"
          title="Sharpen Your"
          gradientTitle="Technical Skills"
          description="Interactive, self-paced practice challenges across core domains to test your logic, debugging, and programming fundamentals."
        />

        {/* Filter & Search Bar Toolbar */}
        <div
          className="glass-card"
          style={{
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            background: 'rgba(9, 14, 30, 0.8)'
          }}
        >
          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {practiceCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-tab ${isActive ? 'active' : ''}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '300px'
            }}
          >
            <Search
              size={17}
              color="#64748b"
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none'
              }}
            />
            <input
              type="text"
              placeholder="Search practice topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-control"
              style={{
                paddingLeft: '40px',
                paddingTop: '10px',
                paddingBottom: '10px',
                fontSize: '0.88rem'
              }}
            />
          </div>
        </div>

        {/* Challenges Grid */}
        {filteredChallenges.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {filteredChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                onSelect={(ch) => setActiveChallenge(ch)}
              />
            ))}
          </div>
        ) : (
          <div
            className="glass-card"
            style={{
              padding: '3.5rem 2rem',
              textAlign: 'center',
              background: 'rgba(8, 12, 26, 0.6)'
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}
            >
              <Code2 size={24} color="#94a3b8" />
            </div>
            <h3 style={{ fontSize: '1.2rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>
              No practice challenges found
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.25rem' }}>
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn-secondary"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Practice Disclaimer Note */}
        <div
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
            fontSize: '0.82rem',
            color: '#64748b'
          }}
        >
          <span>
            * These items are generic demonstration practice challenges intended for personal skill refinement.
          </span>
        </div>
      </div>

      {/* Interactive Challenge Modal */}
      <ChallengeModal
        challenge={activeChallenge}
        isOpen={Boolean(activeChallenge)}
        onClose={() => setActiveChallenge(null)}
      />
    </section>
  );
}
