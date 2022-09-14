export default function App() {
  return (
    <div className="App">
      <div className="layout">
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
        <div className="dashboard">
          <h1>Dashboard 1</h1>
          <div className="dashboard-list">
            <div className="main-card">
              <div className="profit">Profit</div>
              <div className="sales">Sales</div>
              <div className="transactions">Transactions</div>
            </div>
            <div className="main-chart">Chart</div>
            <div className="main-agent">Agent</div>
            <div className="main-product">
              <h1>Product</h1>
              <div className="product">
                <div className="maxim">Maxim</div>
                <div className="telkomsel">Telkomsel</div>
                <div className="three">Three</div>
                <div className="ovo">Ovo</div>
                <div className="pln">PLN Postpaid</div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="detail-profile">
            <div className="avatar">Avatar</div>
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
      </div>
    </div>
  );
}
