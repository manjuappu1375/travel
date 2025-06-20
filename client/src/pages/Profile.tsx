import React from 'react';

const Profile: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Profile</h1>
      <section>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Joined:</strong> January 2024</p>
      </section>
    </div>
  );
};

export default Profile;
