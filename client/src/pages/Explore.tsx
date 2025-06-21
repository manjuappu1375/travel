import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTours } from '../services/tourService';

type Tour = {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  country: string;
};

const Explore: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTours()
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching tours:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ padding: '2rem' }}>Loading tours...</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Explore All Tours</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {tours.map((tour) => (
          <Link
            key={tour._id}
            to={`/tour/${tour._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                transition: 'box-shadow 0.2s',
              }}
            >
              <img
                src={tour.image}
                alt={tour.title}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem' }}>
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
                <strong>₹{tour.price}</strong>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;
