
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminLogin({ setIsAdminLoggedIn  }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
    const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsAdminLoggedIn(true);
      localStorage.setItem("isAdminLoggedIn", "true");
      localStorage.removeItem("isLoggedIn"); // remove user login flag
      navigate("/admin/dashboard");
    } else {
      alert("Enter username and password");
    }
  };

return(
 <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ background: 'linear-gradient(135deg, #FF512F, #DD2476)' }}>
      <div className="card p-5 shadow-lg rounded-4" style={{ minWidth: "400px" }}>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#DD2476", textShadow: "1px 1px 5px rgba(0,0,0,0.3)" }}>Admin Login</h2>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-muted">
          Don’t have an account? <Link to="/admin/signup" className="text-decoration-none fw-bold text-danger">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;