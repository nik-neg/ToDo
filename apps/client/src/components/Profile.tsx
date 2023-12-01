import React from 'react';

const Profile = () => {
  // Placeholder for user profile data
  const userProfile = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    firstName: 'John',
    lastName: 'Doe'
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-info">
        <p><strong>Username:</strong> {userProfile.username}</p>
        <p><strong>Email:</strong> {userProfile.email}</p>
        <p><strong>First Name:</strong> {userProfile.firstName}</p>
        <p><strong>Last Name:</strong> {userProfile.lastName}</p>
      </div>
    </div>
  );
};

export default Profile;
