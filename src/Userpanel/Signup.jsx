
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup({ setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.removeItem("isAdminLoggedIn"); // ensure admin flag is cleared
      setTimeout(() => navigate("/home"), 0);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" 
         style={{ background: 'linear-gradient(135deg, #FF512F, #DD2476)' }}>
      <div className="card p-5 shadow-lg rounded-4" style={{ minWidth: "400px" }}>
        <h2 className="text-center mb-4 fw-bold" 
            style={{ color: "#DD2476", textShadow: "1px 1px 5px rgba(0,0,0,0.3)" }}>
          User Signup
        </h2>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          Already have an account? <Link to="/login" className="text-decoration-none fw-bold text-danger">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
