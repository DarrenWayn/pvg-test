import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <div className="detail-profile">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="profile-list">
          <h1>Budi Budiman</h1>
          <p>Owner at PT Suka Maju</p>
        </div>
        <div className="balance">
          <h2>Total Balance</h2>
          <h1>Rp. 1.580.000.000</h1>
          <button>Top Up</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
