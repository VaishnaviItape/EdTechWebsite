import React from "react";

const SignUpPage = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4"
    }}>
      <div style={{
        background: "#fff",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        width: "400px",
        textAlign: "center"
      }}>
        <h2 style={{
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold"
        }}>
          Sign Up
        </h2>

        <form>
          {/* Full Name */}
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ fontSize: "14px", fontWeight: "500" }}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "14px"
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ fontSize: "14px", fontWeight: "500" }}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "14px"
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ fontSize: "14px", fontWeight: "500" }}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "14px"
              }}
            />
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label style={{ fontSize: "14px", fontWeight: "500" }}>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "14px"
              }}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#28a745",
              color: "#fff",
              border: "none",
              padding: "12px",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
