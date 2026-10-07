import { useState } from "react";
import "./Jobs.css";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [jobType, setJobType] = useState("All Types");

  const jobs = [
    {
      id: 1,
      company: "Google",
      role: "Software Engineer Intern",
      location: "Bangalore",
      type: "Internship",
      package: "₹12 LPA",
      skills: ["Java", "DSA", "React"],
      deadline: "Oct 12, 2026",
      featured: true,
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Frontend Developer",
      location: "Hyderabad",
      type: "Full Time",
      package: "₹14 LPA",
      skills: ["React", "JavaScript", "CSS"],
      deadline: "Oct 15, 2026",
      featured: true,
    },
    {
      id: 3,
      company: "Amazon",
      role: "SDE Intern",
      location: "Chennai",
      type: "Internship",
      package: "₹10 LPA",
      skills: ["Java", "Python", "DSA"],
      deadline: "Oct 18, 2026",
      featured: false,
    },
    {
      id: 4,
      company: "TCS",
      role: "Graduate Software Engineer",
      location: "Chennai",
      type: "Full Time",
      package: "₹7 LPA",
      skills: ["Java", "SQL", "Python"],
      deadline: "Oct 20, 2026",
      featured: false,
    },
    {
      id: 5,
      company: "Infosys",
      role: "System Engineer",
      location: "Pune",
      type: "Full Time",
      package: "₹6.5 LPA",
      skills: ["Java", "SQL", "Cloud"],
      deadline: "Oct 22, 2026",
      featured: false,
    },
    {
      id: 6,
      company: "Zoho",
      role: "Product Developer",
      location: "Chennai",
      type: "Full Time",
      package: "₹8 LPA",
      skills: ["Java", "React", "DSA"],
      deadline: "Oct 25, 2026",
      featured: true,
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    const matchesLocation =
      location === "All Locations" || job.location === location;

    const matchesType =
      jobType === "All Types" || job.type === jobType;

    return matchesSearch && matchesLocation && matchesType;
  });

  const handleApply = (company, role) => {
    alert(`Application started for ${role} at ${company}!`);
  };

  return (
    <div className="jobs-page">

      <header className="jobs-header">
        <div>
          <p className="page-label">PLACEMENT OPPORTUNITIES</p>
          <h1>Find Your Next Opportunity 🚀</h1>
          <p>
            Discover internships and jobs that match your skills and career
            goals.
          </p>
        </div>

        <div className="readiness-box">
          <span>Placement Readiness</span>
          <strong>78%</strong>
          <small>Keep preparing!</small>
        </div>
      </header>

      <section className="job-tools">

        <div className="search-box">
          🔍
          <input
            type="text"
            placeholder="Search company, role or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option>All Locations</option>
          <option>Chennai</option>
          <option>Bangalore</option>
          <option>Hyderabad</option>
          <option>Pune</option>
        </select>

        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option>All Types</option>
          <option>Internship</option>
          <option>Full Time</option>
        </select>

      </section>

      <div className="jobs-summary">
        <div>
          <strong>{filteredJobs.length}</strong>
          <span> opportunities found</span>
        </div>

        <span className="tip">
          💡 Tip: Apply early to improve your chances
        </span>
      </div>

      <section className="jobs-list">

        {filteredJobs.length === 0 ? (
          <div className="no-jobs">
            <div>🔎</div>
            <h2>No matching opportunities</h2>
            <p>Try changing your search or filters.</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <article className="job-card" key={job.id}>

              <div className="company-logo">
                {job.company.charAt(0)}
              </div>

              <div className="job-main">

                <div className="job-title-row">
                  <div>
                    <div className="company-name">
                      {job.company}

                      {job.featured && (
                        <span className="featured-badge">
                          ⭐ Featured
                        </span>
                      )}
                    </div>

                    <h2>{job.role}</h2>
                  </div>

                  <span className="package">
                    {job.package}
                  </span>
                </div>

                <div className="job-details">
                  <span>📍 {job.location}</span>
                  <span>💼 {job.type}</span>
                  <span>⏳ Deadline: {job.deadline}</span>
                </div>

                <div className="skills">
                  {job.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="job-footer">

                  <div className="match-score">
                    <span>Skill Match</span>
                    <strong>
                      {job.id === 1
                        ? "92%"
                        : job.id === 2
                        ? "88%"
                        : job.id === 3
                        ? "84%"
                        : "76%"}
                    </strong>
                  </div>

                  <button
                    className="apply-button"
                    onClick={() =>
                      handleApply(job.company, job.role)
                    }
                  >
                    Apply Now →
                  </button>

                </div>

              </div>

            </article>
          ))
        )}

      </section>

    </div>
  );
}

export default Jobs;