import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      color: '#333',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist or was moved.</p>
      <Link to="/" style={{
        display: 'inline-block',
        marginTop: '1.5rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px'
      }}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
