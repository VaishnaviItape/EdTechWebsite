import React from "react";

export default function  LoginPage () {
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
        width: "350px",
        textAlign: "center"
      }}>
        <h2 style={{
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold"
        }}>
          Login
        </h2>

        <form>
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
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
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

          {/* Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#007bff",
              color: "#fff",
              border: "none",
              padding: "12px",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

