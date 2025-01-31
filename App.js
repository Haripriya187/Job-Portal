import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import styles

import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import JobList from './components/Job/JobList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Job Portal</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Sign Up</a></li>
            <li><a href="/jobs">Job Listings</a></li>
          </ul>
        </nav>

        {/* Toast Notifications */}
        <ToastContainer position="top-right" autoClose={3000} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<JobList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
