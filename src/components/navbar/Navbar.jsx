import React from 'react';

const Navbar = () => {
  return (
    <div className="sales-dash">
      <ul className="main-navbar">
        <li className="navbar-list">
          <a href="/">Dashboard</a>
        </li>
        <li className="navbar-list">
          <a href="/">Transaction</a>
        </li>
        <li className="navbar-list">
          <a href="/">Product</a>
        </li>
        <li className="navbar-list">
          <a href="/">Dashboard</a>
        </li>
        <li className="navbar-list">
          <a href="/">Channel ^</a>
        </li>
        <li className="navbar-list">
          <a href="/">Log Out</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
