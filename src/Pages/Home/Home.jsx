import './Home.css';

const Home = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Pingoway</h1>
        <p>Your Tourism Management Dashboard</p>
      </header>
      
      <div className="dashboard-overview">
        <div className="overview-card">
          <h3>Total Bookings</h3>
          <p>540</p>
        </div>
        <div className="overview-card">
          <h3>Active Visitors</h3>
          <p>87</p>
        </div>
        <div className="overview-card">
          <h3>Revenue This Month</h3>
          <p>$12,000</p>
        </div>
        <div className="overview-card">
          <h3>Top Destination</h3>
          <p>Paris</p>
        </div>
      </div>
      
      <div className="dashboard-section">
        <h2>Recent Activities</h2>
        <ul>
          <li>New booking from user JaneDoe</li>
          <li>Tour cancellation by JohnSmith</li>
          <li>Positive review for Bali Tour</li>
        </ul>
      </div>

      <div className="dashboard-section">
        <h2>Quick Actions</h2>
        <div className="quick-links">
          <a href="/manage-tours" className="quick-link">Manage Tours</a>
          <a href="/create-destination" className="quick-link">Create Destination</a>
          <a href="/customer-queries" className="quick-link">Customer Queries</a>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Weather & Alerts</h2>
        <ul>
          <li>Paris: Sunny, 25°C</li>
          <li>New York: Rainy, 18°C</li>
          <li>Tokyo: Cloudy, 22°C</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
