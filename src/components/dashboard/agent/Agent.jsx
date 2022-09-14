import React from 'react';

const agents = [
  {
    id: 1,
    owner: 'Owner at PT Suka Maju',
    profit: 'Profit',
    sales: 'Sales',
    transaction: 'Transactions',
    number: 'Rp 100.000',
  },
  {
    id: 2,
    owner: 'Owner at PT Suka Maju 2',
    profit: 'Profit',
    sales: 'Sales',
    transaction: 'Transactions',
    number: 'Rp 200.000',
  },
  {
    id: 3,
    owner: 'Owner at PT Suka Maju 3',
    profit: 'Profit',
    sales: 'Sales',
    transaction: 'Transactions',
    number: 'Rp 300.000',
  },
  {
    id: 4,
    owner: 'Owner at PT Suka Maju 4',
    profit: 'Profit',
    sales: 'Sales',
    transaction: 'Transactions',
    number: 'Rp 400.000',
  },
];

const Agent = () => {
  return (
    <div className="main-agent">
      <h1>Top 5 Agents</h1>
      {agents.map((agent) => {
        return (
          <div className="agent" key={agent.id}>
            <div className="detail-agent">
              <div class="avatar-agent">
                <div class="avatar-agent">
                  <img src="https://placeimg.com/192/192/people" alt="agent profile" />
                </div>
              </div>
              <div className="number-agent">
                <h1 className="title-agent">{agent.owner}</h1>
                <div className="focus-agent">
                  <h2>{agent.profit}</h2>
                  <p>{agent.number}</p>
                </div>
                <div className="focus-agent">
                  <h2>{agent.sales}</h2>
                  <p>{agent.number}</p>
                </div>
                <div className="focus-agent">
                  <h2>{agent.transaction}</h2>
                  <p>{agent.number}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Agent;
