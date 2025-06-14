import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '1rem', background: '#eee' }}>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/explore" style={{ marginRight: '10px' }}>Explore</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
