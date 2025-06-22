import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchToursByCountry } from '../services/tourService';

type Tour = {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
};

const CountryTours: React.FC = () => {
  const { countryName } = useParams<{ countryName?: string }>();
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    if (countryName) {
      fetchToursByCountry(countryName).then((data) => setTours(data));
    }
  }, [countryName]);

  if (!tours || tours.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>No tours available for "{countryName}"</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>{countryName?.toUpperCase()} Tours</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
      }}>
        {tours.map((tour) => (
          <Link
            key={tour._id}
            to={`/tour/${tour._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              transition: 'box-shadow 0.2s',
            }}>
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

export default CountryTours;
