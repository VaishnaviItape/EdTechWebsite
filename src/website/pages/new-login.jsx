import React from "react";
 import '../../website/css/Login.css'; // ✅ CSS is imported
export default function  LoginPage () {
  return (
     <div className="containercss">
      <div className="testimonials">
        <h2>Students Testimonials</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
          Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
        <div className="testimonial-card">
          <p className="testimonial-text">
            This course made data science so clear. I went from total beginner to getting my first job in 3 months.
            <br />– highly recommend!
          </p>
          <div className="testimonial-footer">
            <div className="user-info">
              <img src="https://i.pravatar.cc/40" alt="Anushka" />
              <div>
                <h4>Anushka</h4>
                <p>Data Analyst @ TCS</p>
              </div>
            </div>
            <button className="read-btn">Read Full Story</button>
          </div>
          <div className="arrows">
            <button>&larr;</button>
            <button>&rarr;</button>
          </div>
        </div>
      </div>

      <div className="login-form">
        <h2>Login</h2>
        <p>Welcome back! Please log in to access your account.</p>
        <input type="email" placeholder="Enter your Email" />
        <input type="password" placeholder="Enter your Password" />
        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="/">Forgot Password?</a>
        </div>
        <button className="login-btn">Login</button>
        <div className="divider">OR</div>
        <button className="google-login">Login with Google</button>
        <p className="signup-link">
          Don't have an account? <a href="/">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

