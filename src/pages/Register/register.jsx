import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import API from "../../api/axios";
import "./Register.css";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const res = await API.post("/auth/register", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      alert(res.data.message);

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }

  };

  return (

    <div className="register-container">

      <div className="register-card">

        <div className="register-logo">
          RB
        </div>

        <h1>Create Account ✨</h1>

        <p className="register-subtitle">
          Join Resume Builder and create your professional resume.
        </p>

        <form onSubmit={handleRegister}>

          {/* Full Name */}

          <div className="input-box">

            <FaUser className="input-icon" />

            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

          </div>

          {/* Email */}

          <div className="input-box">

            <MdEmail className="input-icon" />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          {/* Password */}

          <div className="input-box">

            <FaLock className="input-icon" />

            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          {/* Confirm Password */}

          <div className="input-box">

            <FaLock className="input-icon" />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

          </div>

          <button
            className="register-btn"
            type="submit"
          >
            Create Account
            <FaArrowRight />
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <p className="login-text">
          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;