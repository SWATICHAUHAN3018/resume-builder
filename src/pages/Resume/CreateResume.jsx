// Import CSS
import { useState } from "react";
import "./CreateResume.css";
import Education from "./Education";
import Skills from "./Skills";

// Create Resume Page
function CreateResume() {
    // ======================================
    // Current Form Step
    // ======================================

    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        "Personal",
        "Education",
        "Skills",
        "Experience",
        "Projects",
        "Certificates",
        "Preview"
    ];


    // ======================================
    // Personal Details State
    // ======================================

    // ✅ Single form state for all steps
    // ✅ Single form state for all steps
    const [formData, setFormData] = useState({

        // ======================================
        // Personal Details
        // ======================================

        fullName: "",
        email: "",
        phone: "",
        address: "",
        linkedIn: "",
        github: "",
        portfolio: "",
        objective: "",

        // ======================================
        // Education Details
        // ======================================

        collegeName: "",
        degree: "",
        branch: "",
        startYear: "",
        endYear: "",
        cgpa: "",

        // ======================================
        // Skills
        // ======================================

        technicalSkills: [],
        softSkills: []



    });

    // Store validation error
    const [showError, setShowError] = useState(false);
    // Track completed steps
    const [completedSteps, setCompletedSteps] = useState([]);

    // Track incomplete steps
    const [errorSteps, setErrorSteps] = useState([]);

    // ======================================
    // Handle Input Change
    // ======================================

    // ✅ Handles all form inputs dynamically
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    // ======================================
    // Next Step
    // ======================================

    // Check required fields before moving next
    // ======================================
    // Next Step
    // ======================================

    const handleNext = () => {

        let isValid = true;

        // ======================================
        // Step 1 Validation (Personal)
        // ======================================

        if (currentStep === 1) {

            isValid =
                formData.fullName.trim() !== "" &&
                formData.email.trim() !== "" &&
                formData.phone.trim() !== "" &&
                formData.address.trim() !== "";

        }

        // ======================================
        // Step 2 Validation (Education)
        // ======================================

        if (currentStep === 2) {

            isValid =
                formData.collegeName.trim() !== "" &&
                formData.degree.trim() !== "" &&
                formData.branch.trim() !== "" &&
                formData.startYear.trim() !== "" &&
                formData.endYear.trim() !== "";

        }

        // ======================================
        // Show Warning or Complete Step
        // ======================================

        if (!isValid) {

            setShowError(true);

            // Mark current step as incomplete
            setErrorSteps((prev) =>
                prev.includes(currentStep)
                    ? prev
                    : [...prev, currentStep]
            );

        } else {

            setShowError(false);

            // Remove error if completed
            setErrorSteps((prev) =>
                prev.filter((step) => step !== currentStep)
            );

            // Mark current step as completed
            setCompletedSteps((prev) =>
                prev.includes(currentStep)
                    ? prev
                    : [...prev, currentStep]
            );

        }

        // ======================================
        // Always Go To Next Step
        // ======================================

        setCurrentStep((prev) => prev + 1);

    };

    // ======================================
    // Previous Step
    // ======================================

    const handlePrevious = () => {

        if (currentStep > 1) {

            setCurrentStep(currentStep - 1);

        }

    };

    return (

        <div className="resume-page">

            {/* Background Blur Circle */}
            <div className="bg-circle circle-one"></div>
            <div className="bg-circle circle-two"></div>

            {/* Main Container */}
            <div className="resume-container">

                {/* Page Heading */}
                <div className="resume-header">
                    {/* Validation Warning */}

                    {showError && (


                        <div className="warning-box">

                            ⚠ Please complete all required fields before continuing.

                        </div>

                    )}

                    <span className="resume-badge">
                        ✨ Resume Builder
                    </span>

                    <h1>
                        Create Your Professional Resume
                    </h1>

                    <p>
                        Build an ATS-friendly resume step by step with a clean and modern interface.
                    </p>

                </div>

                {/* Step Navigation */}

                {/* Step Navigation (Dynamic) */}
                {/* Progress Stepper */}
                <div className="progress-stepper">

                    {steps.map((step, index) => {
                        return (
                            <div className="step-wrapper" key={index}>

                                {/* Circle */}
                                <div
                                    className={`circle ${completedSteps.includes(index + 1)
                                            ? "completed"
                                            : errorSteps.includes(index + 1)
                                                ? "error"
                                                : currentStep === index + 1
                                                    ? "active"
                                                    : ""
                                        }`}
                                >
                                    {/* Completed tick */}
                                    {
                                        completedSteps.includes(index + 1)
                                            ? "✔"
                                            : index + 1
                                    }
                                </div>

                                {/* Step label */}
                                <span>{step}</span>

                                {/* Line (except last step) */}
                                {index !== steps.length - 1 && (
                                    <div
                                        className={`line ${completedSteps.includes(index + 1)
                                            ? "filled"
                                            : ""
                                            }`}
                                    ></div>
                                )}

                            </div>
                        );
                    })}

                </div>

                {/* Empty Card (Form will come in Reply 3) */}

                <div className="resume-card">

                    {/* ===============================
    Personal Details Form
================================ */}
                    {currentStep === 1 && (
                        <>

                            <div className="form-header">

                                <h2>

                                    👤 Personal Details

                                </h2>

                                <p>

                                    Fill in your basic information to start building your professional resume.

                                </p>

                            </div>


                            <div className="resume-form">

                                {/* Full Name */}

                                <div className="input-group">

                                    <label>

                                        Full Name

                                    </label>

                                    {/* Input with icon wrapper */}
                                    <div className="input-wrapper">

                                        {/* Icon */}
                                        <span className="input-icon">👤</span>

                                        {/* Input field */}
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                        />

                                    </div>

                                </div>


                                {/* Email */}

                                <div className="input-group">

                                    <label>

                                        Email Address

                                    </label>

                                    <div className="input-wrapper">
                                        <span className="input-icon">📧</span>
                                        <input
                                            type="text"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your Email Address"
                                        />
                                    </div>
                                </div>


                                {/* Phone */}

                                <div className="input-group">

                                    <label>

                                        Phone Number

                                    </label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">📞</span>

                                        <input

                                            type="text"

                                            name="phone"

                                            value={formData.phone}

                                            onChange={handleChange}

                                            placeholder="Enter your Phone Number"

                                        />
                                    </div>

                                </div>


                                {/* Address */}

                                <div className="input-group full-width">

                                    <label>

                                        Address

                                    </label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">📍</span>

                                        <input

                                            type="text"

                                            name="address"

                                            value={formData.address}

                                            onChange={handleChange}

                                            placeholder="Enter your Address"

                                        />
                                    </div>

                                </div>


                                {/* LinkedIn */}

                                <div className="input-group">

                                    <label>

                                        LinkedIn

                                    </label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">🔗</span>

                                        <input

                                            type="text"

                                            name="linkedIn"

                                            value={formData.linkedIn}

                                            onChange={handleChange}

                                            placeholder="Enter your LinkedIn"

                                        />
                                    </div>
                                </div>


                                {/* GitHub */}

                                <div className="input-group">

                                    <label>

                                        GitHub

                                    </label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">💻</span>
                                        <input

                                            type="text"

                                            name="github"

                                            value={formData.github}

                                            onChange={handleChange}

                                            placeholder="Enter your GitHub"

                                        />
                                    </div>

                                </div>


                                {/* Portfolio */}

                                <div className="input-group full-width">

                                    <label>

                                        Portfolio Website

                                    </label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">🌐</span>

                                        <input

                                            type="text"

                                            name="portfolio"

                                            value={formData.portfolio}

                                            onChange={handleChange}

                                            placeholder="Enter your Portfolio Website"

                                        />
                                    </div>
                                </div>


                                {/* Career Objective */}

                                <div className="input-group full-width">

                                    <label>

                                        Career Objective

                                    </label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">✨</span>

                                        <textarea

                                            rows="5"

                                            name="objective"

                                            value={formData.objective}

                                            onChange={handleChange}

                                            placeholder="Write your career objective..."

                                        ></textarea>
                                    </div>

                                </div>

                            </div>
                        </>
                    )}
                    {/* ======================================
   Step 2 - Education
====================================== */}

                    {currentStep === 2 && (
                        <Education
                            formData={formData}
                            handleChange={handleChange}
                            handleNext={handleNext}
                            handlePrevious={handlePrevious}
                        />
                    )}
                    {/* ======================================
   Step 2 - Skills====================================== */}

                    {currentStep === 3 && (
                        <Skills />
                    )}

                    {/* ======================================
   Step 4 - Experience
====================================== */}

                    {currentStep === 4 && (
                        <Experience />
                    )}

                    {/* ======================================
   Step 5 - Projects
====================================== */}

                    {currentStep === 5 && (
                        <Projects />
                    )}

                    {/* ======================================
   Step 6 - Certificates
====================================== */}

                    {currentStep === 6 && (
                        <Certificates />
                    )}

                    {/* ======================================
   Step 7 - Preview
====================================== */}

                    {currentStep === 7 && (
                        <Preview />
                    )}


                    {/* Navigation */}

                    {/* ======================================
    Navigation Buttons
====================================== */}

                    <div className="form-buttons">

                        {/* Previous Button */}

                        {currentStep > 1 && (

                            <button
                                className="previous-btn"
                                onClick={handlePrevious}
                            >
                                ← Previous
                            </button>

                        )}

                        {/* Next Button */}

                        <button
                            className="next-btn"
                            onClick={handleNext}
                        >
                            {currentStep === steps.length ? "Finish ✓" : "Next →"}
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default CreateResume;