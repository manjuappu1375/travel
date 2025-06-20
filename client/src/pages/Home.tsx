import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '70vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to Travel Tourism App
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
        Discover your next adventure! Book beautiful tours across India and the world with ease.
      </p>

      {/* Explore Tours Button */}
      <button
        onClick={() => navigate('/explore')}
        style={{
          backgroundColor: '#0077cc',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginRight: '1rem',
        }}
      >
        🌍 Explore Tours
      </button>

      {/* Admin Dashboard Button */}
      <button
        onClick={() => navigate('/admin')}
        style={{
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        🔐 Admin Dashboard
      </button>
    </div>
  );
};

export default Home;
