import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
            <img src="/logo.png" alt="Logo" style={{ height: '35px' }} />
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
                <Link className="nav-link fw-medium" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/contact">Contact Us</Link>
              </li>
            </ul>

            {/* 👤 Auth Buttons */}
            <div className="d-flex gap-2">
              <Link to="/register" className="btn btn-outline-dark px-3">Sign Up</Link>
              <Link to="/login" className="btn text-white px-3" style={{ backgroundColor: '#f97316' }}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
