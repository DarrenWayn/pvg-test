import React from 'react';
import Dashboard from './dashboard'
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';

const Layout = () => {
    return (
      <>
        <Navbar />
        <Dashboard />
        <Profile />
      </>
    );
};

export default Layout;
