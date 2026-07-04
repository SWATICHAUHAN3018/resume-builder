const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    personalInfo: {
      fullName: String,
      email: String,
      phone: String,
      address: String,
      linkedin: String,
      github: String,
    },

    professionalSummary: {
      type: String,
    },

    education: [
      {
        institute: String,
        degree: String,
        fieldOfStudy: String,
        startYear: String,
        endYear: String,
      },
    ],

    skills: [
      {
        name: String,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
        technologies: String,
        link: String,
      },
    ],

    experience: [
      {
        company: String,
        role: String,
        startDate: String,
        endDate: String,
        description: String,
      },
    ],

    certifications: [
      {
        title: String,
        organization: String,
        year: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);