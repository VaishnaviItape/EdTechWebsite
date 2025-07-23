
// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Dashboard from './admin-dash/pages/Dashboard';
import PrivateRoute from './auth/PrivateRoute';
import Home from './website/pages/Home'
import './App.css';
import Layout from './website/components/Layout';
import About from './website/pages/About'
import Contact from './website/pages/Contact'
import Courses from './website/pages/Courses'
import Logins from './website/pages/Login'
import Register from './website/pages/Register'

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes that include Header + Footer */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/login" element={<Layout><Logins /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />

        {/* Auth pages without layout (optional) */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* admin dashboard pages without layout (optional) */}
        <Route path="/admin*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
