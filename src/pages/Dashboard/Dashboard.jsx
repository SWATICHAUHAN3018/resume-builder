// Import Dashboard CSS
import "./Dashboard.css";

// Import React Hooks
import { useEffect, useState } from "react";

// Import React Router
import { useNavigate } from "react-router-dom";

// Import Icons
import {
    FaHome,
    FaFileAlt,
    FaFolderOpen,
    FaUserCircle,
    FaCog,
    FaSignOutAlt,
} from "react-icons/fa";

function Dashboard() {
    // React Router Navigation
    const navigate = useNavigate();

    // Store logged-in user's name
    const [userName, setUserName] = useState("User");

    // Load username from Local Storage
    useEffect(() => {

        const savedUser = localStorage.getItem("user");

        if (savedUser) {

            const user = JSON.parse(savedUser);

            if (user.fullName) {

                setUserName(user.fullName);

            }

        }

    }, []);

    // Logout User

    const handleLogout = () => {

        const confirmLogout = window.confirm(

            "Are you sure you want to logout?"

        );

        if (!confirmLogout) {

            return;

        }

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        navigate("/login", { replace: true });

    };
    return (
        // Main Dashboard
        <div className="dashboard">

            {/* Sidebar */}
            <aside className="sidebar">

                {/* Logo Section */}
                <div className="logo-section">

                    <div className="logo-circle">
                        RB
                    </div>

                    <div>
                        <h2>Resume Builder</h2>
                        <p>Create Smart Resume</p>
                    </div>

                </div>

                {/* Sidebar Menu */}
                <div className="menu">

                    <div className="menu-item active">
                        <FaHome />
                        <span>Dashboard</span>
                    </div>

                    <div className="menu-item">
                        <FaFileAlt />
                        <span>Create Resume</span>
                    </div>

                    <div className="menu-item">
                        <FaFolderOpen />
                        <span>My Resumes</span>
                    </div>

                    <div className="menu-item">
                        <FaUserCircle />
                        <span>Profile</span>
                    </div>

                    <div className="menu-item">
                        <FaCog />
                        <span>Settings</span>
                    </div>

                </div>

                {/* Logout */}
                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >

                    <FaSignOutAlt />

                    Logout

                </button>

            </aside>

            {/* Main Content */}

            <main className="main-content">
                {/* ==========================================Welcome Section========================================== */}

                <section className="welcome-card">

                    {/* Left Content */}

                    <div className="welcome-left">

                        {/* Small Badge */}

                        <span className="welcome-badge">

                            👋 Welcome Back

                        </span>

                        {/* Dashboard Greeting */}

                        <h1>

                            Hello, {userName || "User"} 👋

                        </h1>

                        {/* Description */}

                        <p>

                            Welcome to your Resume Builder Dashboard.
                            Create professional ATS-friendly resumes,
                            manage your resumes, and achieve your dream job.

                        </p>

                        {/* Buttons */}

                        <div className="welcome-buttons">

                            <button className="create-btn">

                                Create Resume

                            </button>

                            <button className="resume-btn">

                                My Resumes

                            </button>

                        </div>

                    </div>


                    {/* Right Side */}

                    <div className="welcome-right">

                        <div className="resume-preview">

                            <div className="resume-icon">

                                📄

                            </div>

                            <h2>

                                Resume Ready

                            </h2>

                            <p>

                                Create beautiful resumes
                                using modern templates.

                            </p>

                        </div>

                    </div>

                </section>

                {/* ==========================================
    Dashboard Feature Cards
========================================== */}

                <section className="feature-section">

                    {/* Card 1 */}

                    <div className="feature-card">

                        <div className="feature-icon purple">

                            📄

                        </div>

                        <h3>

                            Create Resume

                        </h3>

                        <p>

                            Build a professional ATS-friendly resume in just a few minutes.

                        </p>

                        <button>

                            Get Started →

                        </button>

                    </div>


                    {/* Card 2 */}

                    <div className="feature-card">

                        <div className="feature-icon blue">

                            📂

                        </div>

                        <h3>

                            My Resumes

                        </h3>

                        <p>

                            View, edit, download and manage all your saved resumes.

                        </p>

                        <button>

                            Open →

                        </button>

                    </div>


                    {/* Card 3 */}

                    <div className="feature-card">

                        <div className="feature-icon pink">

                            👤

                        </div>

                        <h3>

                            Profile

                        </h3>

                        <p>

                            Update your personal information and account settings.

                        </p>

                        <button>

                            Edit →

                        </button>

                    </div>


                    {/* Card 4 */}

                    <div className="feature-card">

                        <div className="feature-icon orange">

                            ⚙

                        </div>

                        <h3>

                            Settings

                        </h3>

                        <p>

                            Customize dashboard preferences and application settings.

                        </p>

                        <button>

                            Configure →

                        </button>

                    </div>

                </section>
                {/* ==========================================
    Bottom Dashboard Section
========================================== */}

                <section className="bottom-section">

                    {/* Resume Progress Card */}

                    <div className="progress-card">

                        <h2>

                            📊 Resume Progress

                        </h2>

                        <p>

                            Your profile is almost complete.

                        </p>

                        {/* Progress Bar */}

                        <div className="progress-bar">

                            <div className="progress-fill">

                                80%

                            </div>

                        </div>

                        <span>

                            Profile Completion : 80%

                        </span>

                    </div>


                    {/* Recent Activity */}

                    <div className="activity-card">

                        <h2>

                            🕒 Recent Activity

                        </h2>

                        <ul>

                            <li>

                                ✅ Logged into your account

                            </li>

                            <li>

                                📄 Resume created successfully

                            </li>

                            <li>

                                ✏ Profile updated

                            </li>

                            <li>

                                ⬇ Resume downloaded

                            </li>

                        </ul>

                    </div>

                </section>


                {/* ==========================================
    Footer
========================================== */}

                <footer className="dashboard-footer">

                    © 2026 Resume Builder • Designed with ❤️ by Swati Chauhan and Insha Nahid khan

                </footer>
            </main>

        </div>

    );
}

export default Dashboard;