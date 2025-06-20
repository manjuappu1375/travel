import React from 'react';
import { useParams, Link } from 'react-router-dom';

type Tour = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
};

const toursData: Record<string, Tour[]> = {
  india: [
    {
      id: 1,
      name: 'Manali Getaway',
      image: '/images/manali.jpg',
      price: 7999,
      description: 'Chill in the mountains of Manali.',
    },
    {
      id: 2,
      name: 'Goa Beach Trip',
      image: '/images/goa.jpg',
      price: 8999,
      description: 'Sunny beaches, nightlife and relaxation.',
    },
  ],
  france: [
    {
      id: 3,
      name: 'Paris City Tour',
      image: '/images/paris.jpg',
      price: 11999,
      description: 'Eiffel Tower, museums, cafés and more.',
    },
  ],
  japan: [
    {
      id: 4,
      name: 'Tokyo Adventure',
      image: '/images/tokyo.jpg',
      price: 13999,
      description: 'Explore the future in Tokyo.',
    },
  ],
};

const CountryTours: React.FC = () => {
  const { countryName } = useParams<{ countryName?: string }>();
  const tours = countryName ? toursData[countryName.toLowerCase()] : [];

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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {tours.map((tour) => (
          <Link
            key={tour.id}
            to={`/tour/${tour.id}`}
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
                alt={tour.name}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem' }}>
                <h3>{tour.name}</h3>
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
