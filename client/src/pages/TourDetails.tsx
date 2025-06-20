import React from 'react';
import { useParams } from 'react-router-dom';

type Tour = {
  name: string;
  description: string;
  image: string;
  price: number;
  details: string;
};

// Tour data indexed by string keys
const tourDetailsData: Record<string, Tour> = {
  '1': {
    name: 'Manali Getaway',
    description: 'Chill in the mountains of Manali.',
    image: '/images/manali.jpg',
    price: 7999,
    details: 'A wonderful tour through the hills of Manali with beautiful views and activities.',
  },
  '2': {
    name: 'Goa Beach Trip',
    description: 'Sunny beaches, nightlife and relaxation.',
    image: '/images/goa.jpg',
    price: 8999,
    details: 'Experience Goa’s vibrant culture, beaches, and parties.',
  },
  '3': {
    name: 'Paris City Tour',
    description: 'Eiffel Tower, museums, cafés and more.',
    image: '/images/paris.jpg',
    price: 11999,
    details: 'A romantic journey through the city of love.',
  },
  '4': {
    name: 'Tokyo Adventure',
    description: 'Explore the future in Tokyo.',
    image: '/images/tokyo.jpg',
    price: 13999,
    details: 'A fusion of tradition and tech in Japan’s capital.',
  },
};

const TourDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const tour = id ? tourDetailsData[id] : undefined;

  if (!tour) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Tour not found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <img
        src={tour.image}
        alt={tour.name}
        style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h2 style={{ marginTop: '1rem' }}>{tour.name}</h2>
      <p>{tour.description}</p>
      <strong>Price: ₹{tour.price}</strong>
      <p style={{ marginTop: '1rem' }}>{tour.details}</p>
    </div>
  );
};

export default TourDetails;
