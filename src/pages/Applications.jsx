import "./Applications.css";

function Applications() {
  const applications = [
    {
      company: "Google",
      role: "Software Engineer Intern",
      appliedDate: "Oct 02, 2026",
      status: "Interview",
      statusClass: "interview",
      interview: "Oct 14, 2026",
      progress: 75,
    },
    {
      company: "Microsoft",
      role: "Frontend Developer",
      appliedDate: "Oct 01, 2026",
      status: "Under Review",
      statusClass: "review",
      interview: "Not scheduled",
      progress: 45,
    },
    {
      company: "Amazon",
      role: "SDE Intern",
      appliedDate: "Sep 28, 2026",
      status: "Applied",
      statusClass: "applied",
      interview: "Not scheduled",
      progress: 25,
    },
    {
      company: "Zoho",
      role: "Product Developer",
      appliedDate: "Sep 25, 2026",
      status: "Selected",
      statusClass: "selected",
      interview: "Completed",
      progress: 100,
    },
    {
      company: "TCS",
      role: "Graduate Software Engineer",
      appliedDate: "Sep 22, 2026",
      status: "Rejected",
      statusClass: "rejected",
      interview: "Completed",
      progress: 100,
    },
  ];

  const statusSummary = [
    {
      label: "Total Applications",
      value: "12",
      icon: "📋",
    },
    {
      label: "Under Review",
      value: "5",
      icon: "⏳",
    },
    {
      label: "Interviews",
      value: "3",
      icon: "🎯",
    },
    {
      label: "Selected",
      value: "1",
      icon: "🎉",
    },
  ];

  return (
    <div className="applications-page">

      <header className="applications-header">
        <div>
          <p className="page-label">APPLICATION TRACKER</p>
          <h1>My Applications 📋</h1>
          <p>
            Keep track of every opportunity and know exactly where you stand.
          </p>
        </div>

        <div className="application-rate">
          <span>Application Success Rate</span>
          <strong>8.3%</strong>
          <small>1 selected from 12 applications</small>
        </div>
      </header>

      <section className="application-summary">
        {statusSummary.map((item) => (
          <div className="summary-card" key={item.label}>
            <div className="summary-icon">{item.icon}</div>

            <div>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          </div>
        ))}
      </section>

      <section className="pipeline-card">
        <div className="section-heading">
          <div>
            <h2>Application Pipeline</h2>
            <p>Your current placement journey</p>
          </div>
        </div>

        <div className="pipeline">
          <div className="pipeline-step active">
            <span>12</span>
            <p>Applied</p>
          </div>

          <div className="pipeline-line"></div>

          <div className="pipeline-step active">
            <span>5</span>
            <p>Under Review</p>
          </div>

          <div className="pipeline-line"></div>

          <div className="pipeline-step active">
            <span>3</span>
            <p>Interview</p>
          </div>

          <div className="pipeline-line"></div>

          <div className="pipeline-step selected-step">
            <span>1</span>
            <p>Selected</p>
          </div>
        </div>
      </section>

      <section className="applications-card">

        <div className="section-heading">
          <div>
            <h2>Recent Applications</h2>
            <p>Track the progress of your applications</p>
          </div>

          <button className="filter-button">
            ⚙ Filter
          </button>
        </div>

        <div className="applications-list">

          {applications.map((application) => (
            <article
              className="application-item"
              key={`${application.company}-${application.role}`}
            >

              <div className="company-logo">
                {application.company.charAt(0)}
              </div>

              <div className="application-main">

                <div className="application-title">
                  <div>
                    <span className="company-name">
                      {application.company}
                    </span>

                    <h3>{application.role}</h3>
                  </div>

                  <span
                    className={`status-badge ${application.statusClass}`}
                  >
                    {application.status}
                  </span>
                </div>

                <div className="application-info">
                  <span>
                    📅 Applied: {application.appliedDate}
                  </span>

                  <span>
                    🎯 Interview: {application.interview}
                  </span>
                </div>

                <div className="progress-section">
                  <div className="progress-label">
                    <span>Application Progress</span>
                    <strong>{application.progress}%</strong>
                  </div>

                  <div className="progress-track">
                    <div
                      className={`progress-bar ${application.statusClass}`}
                      style={{
                        width: `${application.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>

              </div>

              <button className="view-button">
                View →
              </button>

            </article>
          ))}

        </div>
      </section>

      <section className="placement-tip">
        <div className="tip-icon">💡</div>

        <div>
          <h3>Placement Tip</h3>
          <p>
            Don't wait for companies to respond. Use the waiting time to
            improve your resume, practice DSA and prepare for mock interviews.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Applications;