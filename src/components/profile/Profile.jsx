import React from 'react';
import Balance from './balance/Balance';

const Profile = () => {
  return (
    <div className="profile">
      <div className="detail-profile">
        <div class="avatar">
          <div class="avatar-profile">
            <img src="https://placeimg.com/192/192/people" alt="User profile" />
          </div>
        </div>
        <div className="profile-list">
          <h1 className="profile-title">Budi Budiman</h1>
          <p className="profile-text">Owner at PT Suka Maju</p>
        </div>
      </div>
      <Balance />
    </div>
  );
};

export default Profile;
