// src/pages/Login.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin') {
      localStorage.setItem('auth', true);
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleLogin} className="bg-white p-4 shadow rounded" style={{ width: '300px' }}>
        <h4 className="mb-3 text-center">Admin Login</h4>
        <input type="email" placeholder="Email" className="form-control mb-2"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="form-control mb-3"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-primary w-100" type="submit">Login</button>
      </form>
    </div>
  );
}
