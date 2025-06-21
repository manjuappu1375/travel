import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Travel Tourism</h3>
          <p style={textStyle}>Explore the world, one destination at a time.</p>
        </div>

        <div style={sectionStyle}>
          <h4 style={subtitleStyle}>Quick Links</h4>
          <ul style={listStyle}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/explore" style={linkStyle}>Explore</Link></li>
            <li><Link to="/wishlist" style={linkStyle}>Wishlist</Link></li>
            <li><Link to="/admin" style={linkStyle}>Admin</Link></li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h4 style={subtitleStyle}>Contact</h4>
          <p style={textStyle}>📧 info@traveltourism.com</p>
          <p style={textStyle}>📞 +91 9019631922</p>
          <p style={textStyle}>📍 Bengaluru, India</p>
        </div>
      </div>

      <div style={bottomBarStyle}>
        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Travel Tourism App. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Styles
const footerStyle: React.CSSProperties = {
  backgroundColor: '#1e293b',
  color: '#fff',
  paddingTop: '2rem',
  paddingBottom: '1rem',
  marginTop: '3rem',
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '0 2rem',
  gap: '2rem',
};

const sectionStyle: React.CSSProperties = {
  flex: '1 1 250px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  marginBottom: '0.5rem',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  borderBottom: '1px solid #38bdf8',
  display: 'inline-block',
  paddingBottom: '0.2rem',
};

const textStyle: React.CSSProperties = {
  margin: '0.3rem 0',
};

const listStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  color: '#f1f5f9',
  textDecoration: 'none',
  display: 'block',
  margin: '0.3rem 0',
};

const bottomBarStyle: React.CSSProperties = {
  textAlign: 'center',
  paddingTop: '1rem',
  borderTop: '1px solid #334155',
  fontSize: '0.9rem',
};

export default Footer;
