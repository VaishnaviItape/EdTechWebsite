import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-dark pt-5 border-top">
      <div className="container">
        <div className="row gy-4">

          {/* 🔶 Logo & Contact */}
          <div className="col-md-3">
            <h5 className="fw-bold text-orange">EdTech</h5>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2"><FaEnvelope className="me-2 text-secondary" /> edtech@gmail.com</li>
              <li className="mb-2"><FaPhoneAlt className="me-2 text-secondary" /> +91 91813 23 2309</li>
              <li><FaMapMarkerAlt className="me-2 text-secondary" /> Wagholi, Pune</li>
            </ul>
          </div>

          {/* 🏠 Home Links */}
          <div className="col-md-3">
            <h6 className="fw-bold">Home</h6>
            <ul className="list-unstyled small mt-2">
              <li><a href="#" className="text-decoration-none text-dark d-block mb-1">Benefits</a></li>
              <li><a href="#" className="text-decoration-none text-dark d-block mb-1">Our Courses</a></li>
              <li><a href="#" className="text-decoration-none text-dark d-block mb-1">Our Testimonials</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Our FAQ</a></li>
            </ul>
          </div>

          {/* 🧾 About Us Links */}
          <div className="col-md-3">
            <h6 className="fw-bold">About Us</h6>
            <ul className="list-unstyled small mt-2">
              <li><a href="#" className="text-decoration-none text-dark d-block mb-1">Company</a></li>
              <li><a href="#" className="text-decoration-none text-dark d-block mb-1">Achievements</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Our Goals</a></li>
            </ul>
          </div>

          {/* 🔗 Social Links */}
          <div className="col-md-3">
            <h6 className="fw-bold">Social Profiles</h6>
            <div className="d-flex gap-2 mt-2">
              <a href="#" className="btn btn-light btn-sm rounded-circle">
                <FaFacebookF className="text-orange" />
              </a>
              <a href="#" className="btn btn-light btn-sm rounded-circle">
                <FaTwitter className="text-orange" />
              </a>
              <a href="#" className="btn btn-light btn-sm rounded-circle">
                <FaLinkedinIn className="text-orange" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-3 mt-4 border-top small text-muted">
          © {new Date().getFullYear()} EdTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
