import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock, FaArrowRight } from "react-icons/fa";
import API from "../../api/axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", formData);

      alert(res.data.message);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-logo">
          RB
        </div>

        <h1>
          Welcome Back 👋
        </h1>

        <p className="login-subtitle">
          Login to your account and continue your journey
        </p>

        {/* Email */}

        <div className="input-box">
          <MdEmail className="input-icon" />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}

        <div className="input-box">
          <FaLock className="input-icon" />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Login Button */}

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
          <FaArrowRight />
        </button>

        {/* Forgot Password */}

        <div className="forgot-password">
          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </div>

        {/* Divider */}

        <div className="divider">
          <span>OR</span>
        </div>

        {/* Register */}

        <p className="register-text">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;