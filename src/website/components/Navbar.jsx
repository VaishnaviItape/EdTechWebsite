import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../images/Logo.png';

export default function Navbar() {

  const location = useLocation();
  return (
    <>
      {/* 🔶 Top Orange Promo Banner */}
      <div
        style={{
          backgroundColor: '#f97316', // Tailwind warning color or use "#ff7a00"
          color: 'white',
          textAlign: 'center',
          padding: '6px 10px',
          fontSize: '14px',
          fontWeight: '600',
        }}
      >
        Early Bird Discount Ends Tonight! ★ Start Your Data Science Journey Today →
      </div>

      {/* 🧭 Main Navbar */}
      <nav
        className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3"
        style={{ borderBottom: '1px solid #eee' }}
      >
        <div className="container-fluid">
          {/* 🚀 Logo */}
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" style={{ height: '35px' }} />
          </Link>

          {/* 🔀 Toggle for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 📂 Navigation links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
              <li className="nav-item">
                <Link
                  className={`nav-link fw-medium px-3 py-2 rounded ${location.pathname === '/' ? 'bg-light fw-semibold' : ''
                    }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-medium px-3 py-2 rounded ${location.pathname === '/courses' ? 'bg-light fw-semibold' : ''
                    }`}
                  to="/courses"
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-medium px-3 py-2 rounded ${location.pathname === '/about' ? 'bg-light fw-semibold' : ''
                    }`}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-medium px-3 py-2 rounded ${location.pathname === '/contact' ? 'bg-light fw-semibold' : ''
                    }`}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>


            {/* 👤 Auth Buttons */}
            {/* <div className="d-flex gap-2">
              <Link to="/new-register" className="btn btn-outline-dark px-3">Sign Up</Link>
              <Link to="/new-login" className="btn text-white px-3" style={{ backgroundColor: '#f97316' }}>
                Login
              </Link>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}
