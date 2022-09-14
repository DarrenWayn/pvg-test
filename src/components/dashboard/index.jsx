import React from 'react';
import Agent from './agent/Agent';
import Card from './card/Card';
import Chart from './chart/Chart';
import Product from './product/Product';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard 1</h1>
      <div className="dashboard-list">
        <Card />
        <Chart />
        <Agent />
        <Product />
      </div>
    </div>
  );
};

export default Dashboard;
