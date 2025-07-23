// src/pages/Dashboard.jsx
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <div className="heading">
          <h2>Welcome to Admin Dashboard</h2>
          <p>This is your main dashboard page.</p>
        </div>
      </div>
    </div>
  );
}
