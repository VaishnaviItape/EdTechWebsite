
// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Dashboard from './admin-dash/pages/Dashboard';
import ContactUs from './admin-dash/pages/ContactUs';
import PrivateRoute from './auth/PrivateRoute';
import Home from './website/pages/Home'
import './App.css';
import Layout from './website/components/Layout';
import About from './website/pages/About'
import Contact from './website/pages/Contact'
import Courses from './website/pages/Courses'
import LoginPage from './website/pages/new-login'
import SignUpPage from './website/pages/Sign-up'
import ViewCourses from './website/pages/ViewCourses';
import ViewCoursessap from './website/pages/ViewCoursessap';
import ViewCoursescda from './website/pages/ViewCoursescda';
import DashboardLayout from './admin-dash/pages/DashboardLayout'; // Adjust path

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes that include Header + Footer */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/new-login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/new-register" element={<Layout><SignUpPage /></Layout>} />
        <Route path="/view-course" element={<Layout><ViewCourses /></Layout>} />
        <Route path="/view-coursesap" element={<Layout><ViewCoursessap /></Layout>} />
        <Route path="/view-coursescda" element={<Layout><ViewCoursescda /></Layout>} />
        {/* Auth pages without layout (optional) */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* admin dashboard pages without layout (optional) */}
        {/* Admin dashboard pages with layout */}
        <Route
          path="/admin"
          element={<PrivateRoute><DashboardLayout><Dashboard /></DashboardLayout></PrivateRoute>}
        />
       <Route path="/contactus" element={<PrivateRoute><DashboardLayout><ContactUs /></DashboardLayout></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
