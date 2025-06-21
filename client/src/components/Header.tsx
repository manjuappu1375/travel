import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import { logout } from '../redux/slices/authSlice';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth');
  };

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
        <NavLink to="/wishlist" style={getLinkStyle}>
          Wishlist
        </NavLink>
        <NavLink to="/admin" style={getLinkStyle}>
          Admin
        </NavLink>
        {user ? (
          <>
            <NavLink to="/profile" style={getLinkStyle}>
              {user.name || 'Profile'}
            </NavLink>
            <button onClick={handleLogout} style={logoutBtnStyle}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/auth" style={getLinkStyle}>
            Login
          </NavLink>
        )}
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
  gap: '1.2rem',
  alignItems: 'center',
};

const logoutBtnStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: '#fff',
  border: '1px solid #f87171',
  padding: '0.4rem 0.8rem',
  borderRadius: '4px',
  cursor: 'pointer',
};

const getLinkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
  color: isActive ? '#38bdf8' : '#ffffff',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  borderBottom: isActive ? '2px solid #38bdf8' : 'none',
  paddingBottom: '2px',
});

export default Header;
