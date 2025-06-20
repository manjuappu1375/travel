import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      <div>
        <p>&copy; {new Date().getFullYear()} Travel Tourism App. All rights reserved.</p>
        <p>
          <a href="/about" style={{ color: '#ccc', marginRight: '1rem' }}>About Us</a>
          <a href="/contact" style={{ color: '#ccc', marginRight: '1rem' }}>Contact</a>
          <a href="/terms" style={{ color: '#ccc' }}>Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
