import "./Dashboard.css";

function Dashboard() {
  const stats = [
    {
      title: "Jobs Applied",
      value: "12",
      icon: "💼",
    },
    {
      title: "Under Review",
      value: "5",
      icon: "📋",
    },
    {
      title: "Interviews",
      value: "3",
      icon: "🎯",
    },
    {
      title: "Selected",
      value: "1",
      icon: "🎉",
    },
  ];

  const upcomingDeadlines = [
    {
      company: "Google",
      role: "Software Engineer",
      deadline: "Oct 12, 2026",
    },
    {
      company: "Microsoft",
      role: "Frontend Developer",
      deadline: "Oct 15, 2026",
    },
    {
      company: "Amazon",
      role: "SDE Intern",
      deadline: "Oct 18, 2026",
    },
  ];

  const placementData = [
    { year: "2023", placements: 68 },
    { year: "2024", placements: 76 },
    { year: "2025", placements: 84 },
    { year: "2026", placements: 92 },
  ];

  return (
    <div className="dashboard-page">

      <header className="dashboard-header">
        <div>
          <h1>Student Placement Dashboard</h1>
          <p>Track your placement journey in one place.</p>
        </div>

        <div className="student-info">
          <div className="student-avatar">S</div>

          <div>
            <strong>Student</strong>
            <span>Computer Science</span>
          </div>
        </div>
      </header>

      <section className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <div className="stat-icon">{stat.icon}</div>

            <div>
              <p>{stat.title}</p>
              <h2>{stat.value}</h2>
            </div>
          </div>
        ))}
      </section>

      <section className="dashboard-grid">

        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h2>Placement Trends</h2>
              <p>Students placed over recent years</p>
            </div>
          </div>

          <div className="trend-chart">
            {placementData.map((item) => (
              <div className="chart-column" key={item.year}>

                <div className="chart-value">
                  {item.placements}
                </div>

                <div
                  className="chart-bar"
                  style={{
                    height: `${item.placements * 2}px`,
                  }}
                ></div>

                <span>{item.year}</span>

              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Upcoming Deadlines</h2>
              <p>Don't miss these opportunities</p>
            </div>
          </div>

          <div className="deadline-list">

            {upcomingDeadlines.map((job) => (
              <div
                className="deadline-item"
                key={job.company}
              >
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>

                <span>{job.deadline}</span>
              </div>
            ))}

          </div>
        </div>

      </section>

      <section className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="action-grid">
          <button>🔍 Find Jobs</button>
          <button>📋 My Applications</button>
          <button>🎯 Interview Schedule</button>
          <button>👤 My Profile</button>
        </div>

      </section>

    </div>
  );
}

export default Dashboard;