import React from 'react';

const BookingStats: React.FC = () => {
  const stats = [
    { label: 'Total Bookings', value: 1245 },
    { label: 'Bookings This Month', value: 232 },
    { label: 'Most Booked Tour', value: 'Goa Beach Trip' },
    { label: 'Average Group Size', value: 3.8 },
  ];

  return (
    <div style={{ padding: '2rem', minHeight: '60vh' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📘 Booking Statistics</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              padding: '1.5rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            }}
          >
            <h3 style={{ fontSize: '1.1rem', color: '#555' }}>{stat.label}</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0077cc' }}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingStats;
