import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', minHeight: '80vh' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '220px',
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          borderRight: '1px solid #ccc',
        }}
      >
        <h3 style={{ marginBottom: '1rem' }}>🛠️ Admin Panel</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link to="/admin/tour-stats" style={{ color: location.pathname.includes('tour-stats') ? '#0077cc' : '#333' }}>
            📊 Tour Stats
          </Link>
          <Link to="/admin/booking-stats" style={{ color: location.pathname.includes('booking-stats') ? '#0077cc' : '#333' }}>
            📘 Booking Stats
          </Link>
          <Link to="/admin/support-tickets" style={{ color: location.pathname.includes('support-tickets') ? '#0077cc' : '#333' }}>
            🎫 Support Tickets
          </Link>
          <Link to="/admin/reviews" style={{ color: location.pathname.includes('reviews') ? '#0077cc' : '#333' }}>
            📝 Reviews Moderation
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
