import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Welcome Back 👋</h1>
        <p className="login-subtitle">Login to your account</p>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button className="login-btn">
          Login
        </button>

        <div className="forgot-password">
          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </div>

        <div className="divider"></div>

        <p className="register-text">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;