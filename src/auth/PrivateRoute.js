// src/PrivateRoute.js
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const isAuthenticated = sessionStorage.getItem('authToken');
  return isAuthenticated ? children : <Navigate to="/login" />;
}