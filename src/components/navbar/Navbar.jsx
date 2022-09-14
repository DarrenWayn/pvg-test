import React from 'react';

const Navbar = () => {
  return (
    <div className="sales-dash">
      <div className="sidebar">
        <h1 className="sidebar-title">SalesDash</h1>
        <ul className="sidebar-list">
          <li className="list-item">
            <i>Icon</i>
            <a href="/">DashBoard</a>
          </li>
          <li className="list-item">
            <i>Icon</i>
            <a href="/">Balance</a>
          </li>
          <li className="list-item">
            <i>Icon</i>
            <a href="/">Transactions</a>
          </li>
          <li className="list-item">
            <i>Icon</i>
            <a href="/">Product</a>
          </li>
          <li className="list-item">
            <i>Icon</i>
            <button>Channel</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
