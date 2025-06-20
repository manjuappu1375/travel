import React from 'react';

const TourStats: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Tour Statistics</h2>

      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        }}
      >
        <div style={cardStyle}>
          <h3>Total Tours</h3>
          <p style={valueStyle}>12</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Bookings</h3>
          <p style={valueStyle}>305</p>
        </div>

        <div style={cardStyle}>
          <h3>Most Popular Tour</h3>
          <p>Manali Getaway</p>
        </div>

        <div style={cardStyle}>
          <h3>Highest Rated Tour</h3>
          <p>Paris City Tour</p>
        </div>
      </div>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const valueStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginTop: '0.5rem',
};

export default TourStats;
