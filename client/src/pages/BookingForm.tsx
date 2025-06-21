import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


const BookingForm: React.FC = () => {
  const { state } = useLocation();
  const tour = state?.tour;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    travelers: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`✅ Booking confirmed for ${formData.fullName}!`);
    // TODO: Send booking data to backend
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Book Tour: {tour?.title || 'Selected Tour'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={{ display: 'block', marginBottom: '1rem' }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
            style={{ display: 'block', marginBottom: '1rem' }}
          />
        </div>
        <div>
          <label>Number of Travelers:</label>
          <input
            type="number"
            name="travelers"
            min="1"
            max="100"
            value={formData.travelers}
            onChange={handleChange}
            style={{ display: 'block', marginBottom: '1rem' }}
          />
        </div>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
