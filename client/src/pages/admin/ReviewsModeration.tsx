import React, { useState } from 'react';

type Review = {
  id: number;
  user: string;
  tour: string;
  comment: string;
  status: 'pending' | 'approved' | 'rejected';
};

const initialReviews: Review[] = [
  {
    id: 1,
    user: 'Ayesha S',
    tour: 'Paris City Tour',
    comment: 'Amazing experience! Highly recommend.',
    status: 'pending',
  },
  {
    id: 2,
    user: 'Ravi Kumar',
    tour: 'Manali Getaway',
    comment: 'Great trip, but the hotel could be better.',
    status: 'pending',
  },
  {
    id: 3,
    user: 'Emily Tran',
    tour: 'Tokyo Adventure',
    comment: 'Loved the guides and itinerary!',
    status: 'approved',
  },
];

const ReviewsModeration: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const updateStatus = (id: number, status: 'approved' | 'rejected') => {
    setReviews((prev) =>
      prev.map((review) => (review.id === id ? { ...review, status } : review))
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📝 Reviews Moderation</h2>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {reviews.map((review) => (
            <div
              key={review.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '6px',
                padding: '1rem',
                backgroundColor: '#fff',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              }}
            >
              <h4 style={{ marginBottom: '0.5rem' }}>
                {review.user} on <strong>{review.tour}</strong>
              </h4>
              <p style={{ marginBottom: '0.5rem' }}>{review.comment}</p>
              <p>
                <strong>Status:</strong>{' '}
                <span style={{ color: review.status === 'approved' ? 'green' : review.status === 'rejected' ? 'red' : '#666' }}>
                  {review.status.toUpperCase()}
                </span>
              </p>
              {review.status === 'pending' && (
                <div style={{ marginTop: '0.5rem' }}>
                  <button
                    onClick={() => updateStatus(review.id, 'approved')}
                    style={{
                      marginRight: '1rem',
                      backgroundColor: 'green',
                      color: 'white',
                      border: 'none',
                      padding: '0.4rem 1rem',
                      cursor: 'pointer',
                    }}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(review.id, 'rejected')}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      padding: '0.4rem 1rem',
                      cursor: 'pointer',
                    }}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsModeration;
