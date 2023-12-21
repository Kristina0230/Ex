
import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      {user && (
        <div>
          <img src={user.picture.large} alt="User" />
          <p>Name: {user.name.first} {user.name.last}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details here */}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
