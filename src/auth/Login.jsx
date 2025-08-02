// src/pages/Login.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const [userName, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!userName || !password) {
      alert('Please enter valid username and password');
      return;
    }

    try {
      const response = await fetch('http://amkore7-001-site1.ltempurl.com/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password })
      });

      const data = await response.json();

      // Try to extract the token from different possible keys
      const token = data?.token?.result || data?.token || data?.result;

      if (response.ok && token) {
        // ✅ Store token in sessionStorage (as in Angular)
        sessionStorage.setItem('authToken', token);

        alert('Login Successful!');
        navigate('/admin'); // or navigate('/dashboard')
      } else {
        alert(data?.message || 'Token not found in response!');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleLogin} className="bg-white p-4 shadow rounded" style={{ width: '300px' }}>
        <h4 className="mb-3 text-center">Admin Login</h4>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          value={userName}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-100" type="submit">Login</button>
      </form>
    </div>
  );
}
