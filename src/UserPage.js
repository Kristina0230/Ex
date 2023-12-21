// UserPage.js
import React from 'react';
import UserDetails from './UserDetails';
import './UserPage.css';

const UserPage = ({ user }) => {
  return (
    <div className="user-page">
      <h1>User Details</h1>
      <div className="user-details-container">
        <UserDetails user={user} />
      </div>
    </div>
  );
};

export default UserPage;
