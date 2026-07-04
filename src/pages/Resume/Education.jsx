import React from "react";

function Education({
    formData,
    handleChange,
    handleNext,
    handlePrevious
}) {

    return (

        <>
            {/* ===============================
                Education Details Form
            ================================ */}

            <div className="form-header">

                <h2>
                    🎓 Education Details
                </h2>

                <p>
                    Enter your education details to build a stronger resume.
                </p>

            </div>

            <div className="resume-form">

                {/* ======================================
    College / University
====================================== */}

                <div className="input-group">

                    <label>

                        College / University

                    </label>

                    <div className="input-wrapper">

                        <span className="input-icon">🏫</span>

                        <input
                            type="text"
                            name="collegeName"
                            value={formData.collegeName}
                            onChange={handleChange}
                            placeholder="Enter your College / University Name"
                        />

                    </div>

                </div>
                {/* ======================================
    Degree
====================================== */}

                <div className="input-group">

                    <label>

                        Degree

                    </label>

                    <div className="input-wrapper">

                        <span className="input-icon">🎓</span>

                        <input
                            type="text"
                            name="degree"
                            value={formData.degree}
                            onChange={handleChange}
                            placeholder="Enter your Degree (BCA, B.Tech, B.Sc...)"
                        />

                    </div>

                </div>
                {/* ======================================
    Branch / Stream
====================================== */}

                <div className="input-group">

                    <label>

                        Branch / Stream

                    </label>

                    <div className="input-wrapper">

                        <span className="input-icon">📚</span>

                        <input
                            type="text"
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            placeholder="Enter your Branch / Stream"
                        />

                    </div>

                </div>
                {/* ======================================
    Start Year
====================================== */}

                <div className="input-group">

                    <label>

                        Start Year

                    </label>

                    <div className="input-wrapper">

                        <span className="input-icon">📅</span>

                        <input
                            type="text"
                            name="startYear"
                            value={formData.startYear}
                            onChange={handleChange}
                            placeholder="2023"
                        />

                    </div>

                </div>

                {/* ======================================
    End Year
====================================== */}

                <div className="input-group">

                    <label>

                        End Year

                    </label>

                    <div className="input-wrapper">

                        <span className="input-icon">🏁</span>

                        <input
                            type="text"
                            name="endYear"
                            value={formData.endYear}
                            onChange={handleChange}
                            placeholder="2027"
                        />

                    </div>

                </div>
                {/* ======================================
    CGPA / Percentage
====================================== */}

                <div className="input-group">

                    <label>

                        CGPA / Percentage

                    </label>

                    <div className="input-wrapper">

                        <span className="input-icon">⭐</span>

                        <input
                            type="text"
                            name="cgpa"
                            value={formData.cgpa}
                            onChange={handleChange}
                            placeholder="8.5 CGPA / 85%"
                        />

                    </div>

                </div>

            </div>

        </>

    );

}

export default Education;