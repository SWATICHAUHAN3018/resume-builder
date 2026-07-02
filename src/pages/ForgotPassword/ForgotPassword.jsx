import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock, FaArrowRight } from "react-icons/fa";
import API from "../../api/axios";
import "./ForgotPassword.css";

function ForgotPassword() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Password match validation
        if (formData.newPassword !== formData.confirmPassword) {
            alert("Password do not match");
            return;
        }

        try {
            const res = await API.post(
                "/auth/forgot-password",
                {
                    email: formData.email,
                    newPassword: formData.newPassword
                }
            );

            alert(res.data.message);
            navigate("/login");

        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Something went wrong"
            );
        }
    };

    return (
        <div className="forgot-container">

            <div className="forgot-card">

                <div className="forgot-logo">RB</div>

                <h1>Forgot Password</h1>

                <p className="forgot-subtitle">
                    Enter your registered email and create a new password.
                </p>

                <form onSubmit={handleSubmit}>

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

                    <div className="input-box">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="Enter New Password"
                            value={formData.newPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* ✅ Confirm Password Field */}
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

                    <button className="forgot-btn" type="submit">
                        Update Password <FaArrowRight />
                    </button>

                </form>

                <div className="divider">
                    <span>OR</span>
                </div>

                <p className="login-text">
                    Back to <Link to="/login">Login</Link>
                </p>

            </div>

        </div>
    );
}

export default ForgotPassword;