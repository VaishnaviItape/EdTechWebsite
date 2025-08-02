// src/components/Sidebar.jsx
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa'
export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <div className="bg-dark text-white p-3" style={{ width: '200px', height: '100vh' }}>
      <h5 className="text-center">Admin Panel</h5>
      <ul className="nav flex-column mt-4">
        <li className="nav-item">
          <a className="nav-link text-white" href="/"><FaHome /> Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white d-flex align-items-center" href="/contactus">
            <FaPhoneAlt className="me-2" />
            Contact Us
          </a>
        </li>

        <li className="nav-item mt-3">
          <button className="btn btn-sm btn-danger w-100" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
