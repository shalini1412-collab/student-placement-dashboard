import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [editing, setEditing] = useState(false);

  const [student, setStudent] = useState({
    name: "Shalini",
    email: "shalini@student.com",
    phone: "+91 98765 43210",
    department: "Computer Science Engineering",
    year: "3rd Year",
    college: "Student College",
    careerGoal: "Software Engineer → AI Engineer",
  });

  const [skills, setSkills] = useState([
    "Java",
    "Python",
    "React",
    "DSA",
    "SQL",
    "Git & GitHub",
  ]);

  const [newSkill, setNewSkill] = useState("");

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const addSkill = () => {
    const skill = newSkill.trim();

    if (!skill) {
      return;
    }

    if (skills.includes(skill)) {
      alert("Skill already added.");
      return;
    }

    setSkills([...skills, skill]);
    setNewSkill("");
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const saveProfile = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div>
          <p className="page-label">STUDENT PROFILE</p>
          <h1>My Profile 👤</h1>
          <p>
            Keep your profile updated to improve your placement opportunities.
          </p>
        </div>

        <button
          className="edit-profile-button"
          onClick={() => {
            if (editing) {
              saveProfile();
            } else {
              setEditing(true);
            }
          }}
        >
          {editing ? "Save Profile ✓" : "Edit Profile ✏️"}
        </button>
      </header>

      <section className="profile-overview">
        <div className="profile-avatar">S</div>

        <div className="profile-identity">
          <h2>{student.name}</h2>
          <p>{student.department}</p>
          <span>🎓 {student.year}</span>
        </div>

        <div className="profile-completion">
          <div className="completion-header">
            <span>Profile Completion</span>
            <strong>85%</strong>
          </div>

          <div className="completion-track">
            <div className="completion-bar"></div>
          </div>

          <small>Almost there! Add your resume to reach 100%.</small>
        </div>
      </section>

      <section className="profile-grid">
        <div className="profile-card">
          <div className="card-title">
            <div>
              <h2>Personal Information</h2>
              <p>Your basic student details</p>
            </div>
          </div>

          <div className="profile-form">
            <div className="form-group">
              <label>Full Name</label>

              {editing ? (
                <input
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">{student.name}</div>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>

              {editing ? (
                <input
                  name="email"
                  type="email"
                  value={student.email}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">{student.email}</div>
              )}
            </div>

            <div className="form-group">
              <label>Phone</label>

              {editing ? (
                <input
                  name="phone"
                  value={student.phone}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">{student.phone}</div>
              )}
            </div>

            <div className="form-group">
              <label>Department</label>

              {editing ? (
                <input
                  name="department"
                  value={student.department}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">{student.department}</div>
              )}
            </div>

            <div className="form-group">
              <label>Year</label>

              {editing ? (
                <select
                  name="year"
                  value={student.year}
                  onChange={handleChange}
                >
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              ) : (
                <div className="profile-value">{student.year}</div>
              )}
            </div>

            <div className="form-group">
              <label>College</label>

              {editing ? (
                <input
                  name="college"
                  value={student.college}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">{student.college}</div>
              )}
            </div>
          </div>
        </div>

        <div className="profile-card">
          <div className="card-title">
            <div>
              <h2>Career Goal 🎯</h2>
              <p>Where you want to go next</p>
            </div>
          </div>

          <div className="career-goal">
            <div className="career-icon">🚀</div>

            {editing ? (
              <input
                name="careerGoal"
                value={student.careerGoal}
                onChange={handleChange}
              />
            ) : (
              <h3>{student.careerGoal}</h3>
            )}

            <p>
              Build strong software engineering fundamentals and gradually
              transition into AI engineering.
            </p>
          </div>

          <div className="resume-box">
            <div className="resume-icon">📄</div>

            <div>
              <strong>Resume</strong>
              <span>Resume uploaded • ATS analysis available</span>
            </div>

            <button>View</button>
          </div>
        </div>
      </section>

      <section className="profile-card skills-card">
        <div className="card-title">
          <div>
            <h2>Technical Skills 💻</h2>
            <p>Skills recruiters can see on your profile</p>
          </div>
        </div>

        <div className="skills-list">
          {skills.map((skill) => (
            <div className="profile-skill" key={skill}>
              <span>{skill}</span>

              {editing && (
                <button onClick={() => removeSkill(skill)}>×</button>
              )}
            </div>
          ))}
        </div>

        {editing && (
          <div className="add-skill">
            <input
              type="text"
              placeholder="Add a skill..."
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addSkill();
                }
              }}
            />

            <button onClick={addSkill}>+ Add Skill</button>
          </div>
        )}
      </section>

      <section className="readiness-card">
        <div className="readiness-score">
          <div className="score-circle">
            <strong>78%</strong>
            <span>Ready</span>
          </div>
        </div>

        <div className="readiness-content">
          <p className="page-label">PLACEMENT READINESS</p>
          <h2>You're on the right track! 🔥</h2>

          <p>
            Your profile is strong, but completing your resume and improving
            interview preparation can increase your readiness score.
          </p>

          <div className="readiness-items">
            <span>✓ Profile Complete</span>
            <span>✓ Skills Added</span>
            <span>✓ Applications Active</span>
            <span>○ Resume ATS Analysis</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;