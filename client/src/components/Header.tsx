import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1 style={logoStyle}>🌍 Travel Tourism</h1>
      <nav style={navStyle}>
        <NavLink to="/" style={getLinkStyle} end>
          Home
        </NavLink>
        <NavLink to="/explore" style={getLinkStyle}>
          Explore
        </NavLink>
        <NavLink to="/profile" style={getLinkStyle}>
          Profile
        </NavLink>
        <NavLink to="/wishlist" style={getLinkStyle}>
          Wishlist
        </NavLink>
        <NavLink to="/admin" style={getLinkStyle}>
          Admin
        </NavLink>
      </nav>
    </header>
  );
};

// Styles
const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#1e293b',
  color: '#ffffff',
};

const logoStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
};

const getLinkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
  color: isActive ? '#38bdf8' : '#ffffff',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  borderBottom: isActive ? '2px solid #38bdf8' : 'none',
  paddingBottom: '2px',
});

export default Header;
