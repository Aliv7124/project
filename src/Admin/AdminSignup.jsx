/*
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminSignup({ setIsAdminLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // For now, just simulate signup
    if (email && username && password) {
      localStorage.setItem("isAdminLoggedIn", "true");
      setIsAdminLoggedIn(true);
      navigate("/admin/dashboard");
    } else {
      alert("Enter username and password and email");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Signup</h2>
      <form onSubmit={handleSignup} className="w-50 mx-auto">

         <div className="mb-3">
          
          <input type="email"  placeholder="email"
            value={email}
            onChange={(e) => setUsername(e.target.value)} className="form-control" required />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Signup
        </button>
      </form>
      <p className="mt-3 text-center">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default AdminSignup;
*/


// src/Admin/AdminSignup.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminSignup({ setIsAdminLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && username && password) {
      setIsAdminLoggedIn(true); // ✅ Only admin state
      localStorage.setItem("isAdminLoggedIn", "true");
      localStorage.removeItem("isLoggedIn"); // clear any user session
      navigate("/admin/dashboard"); // redirect to admin dashboard
    } else {
      alert("Enter email, username, and password");
    }
  };

  
   return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ background: 'linear-gradient(135deg, #FF512F, #DD2476)' }}>
      <div className="card p-5 shadow-lg rounded-4" style={{ minWidth: "400px" }}>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#DD2476", textShadow: "1px 1px 5px rgba(0,0,0,0.3)" }}>Admin Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger w-100 fw-bold" style={{ transition: "0.3s" }}>
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-muted">
          Already have an account? <Link to="/admin/login" className="text-decoration-none fw-bold text-danger">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default AdminSignup;
