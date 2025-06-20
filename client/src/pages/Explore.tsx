// src/pages/Explore.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const countries = ['india', 'france', 'japan', 'italy', 'australia'];

const Explore: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Select a Country</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {countries.map((country) => (
          <div
            key={country}
            onClick={() => navigate(`/explore/${country}`)}
            style={{
              cursor: 'pointer',
              padding: '1rem',
              background: '#eee',
              borderRadius: '8px',
              textTransform: 'capitalize',
            }}
          >
            {country}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
