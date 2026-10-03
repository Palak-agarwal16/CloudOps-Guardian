const stats = [
  {
    title: "Total Resources",
    value: "12",
    change: "Across connected AWS services",
    icon: "☁️",
    color: "blue",
  },
  {
    title: "Healthy Resources",
    value: "9",
    change: "Resources operating normally",
    icon: "✓",
    color: "green",
  },
  {
    title: "Warnings",
    value: "2",
    change: "Require attention",
    icon: "⚠",
    color: "orange",
  },
  {
    title: "Critical Issues",
    value: "1",
    change: "Needs immediate review",
    icon: "!",
    color: "red",
  },
];

const incidents = [
  {
    name: "High EC2 CPU Utilization",
    resource: "i-0a12bc34",
    severity: "Critical",
    time: "10 minutes ago",
  },
  {
    name: "High Memory Utilization",
    resource: "EC2 Instance",
    severity: "Warning",
    time: "25 minutes ago",
  },
  {
    name: "S3 Access Error",
    resource: "cloudops-storage",
    severity: "Warning",
    time: "1 hour ago",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <div>
          <h1>Dashboard</h1>
          <p>
            Monitor your AWS infrastructure and operational health.
          </p>
        </div>

        <button className="refresh-button" onClick={() => window.location.reload()}>
          ↻ Refresh
        </button>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <div className="stat-top">
              <span>{stat.title}</span>
              <div className={`stat-icon ${stat.color}`}>
                {stat.icon}
              </div>
            </div>

            <h2>{stat.value}</h2>
            <p>{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <section className="panel health-panel">
          <div className="panel-heading">
            <div>
              <h2>Infrastructure Health</h2>
              <p>Current resource status</p>
            </div>

            <span className="live-badge">
              <span className="live-dot"></span>
              Demo Data
            </span>
          </div>

          <div className="health-content">
            <div className="health-ring">
              <div className="health-ring-inner">
                <strong>75%</strong>
                <span>Healthy</span>
              </div>
            </div>

            <div className="health-legend">
              <div>
                <span className="legend-dot green-dot"></span>
                <span>Healthy</span>
                <strong>9</strong>
              </div>

              <div>
                <span className="legend-dot orange-dot"></span>
                <span>Warning</span>
                <strong>2</strong>
              </div>

              <div>
                <span className="legend-dot red-dot"></span>
                <span>Critical</span>
                <strong>1</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="panel incidents-panel">
          <div className="panel-heading">
            <div>
              <h2>Recent Incidents</h2>
              <p>Latest detected issues</p>
            </div>

            <a href="/incidents">View all →</a>
          </div>

          <div className="incident-list">
            {incidents.map((incident) => (
              <div className="incident-item" key={incident.name}>
                <div className="incident-indicator">
                  {incident.severity === "Critical" ? "!" : "⚠"}
                </div>

                <div className="incident-info">
                  <strong>{incident.name}</strong>
                  <span>{incident.resource}</span>
                  <small>{incident.time}</small>
                </div>

                <span
                  className={`severity ${
                    incident.severity === "Critical"
                      ? "critical"
                      : "warning"
                  }`}
                >
                  {incident.severity}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="panel activity-panel">
        <div className="panel-heading">
          <div>
            <h2>Recent Remediation Activities</h2>
            <p>Automated recovery workflow status</p>
          </div>

          <a href="/remediation">View all →</a>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Workflow</th>
                <th>Resource</th>
                <th>Triggered</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>EC2 Recovery Workflow</td>
                <td>i-0a12bc34</td>
                <td>10 minutes ago</td>
                <td>
                  <span className="status-badge pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>Storage Access Check</td>
                <td>cloudops-storage</td>
                <td>1 hour ago</td>
                <td>
                  <span className="status-badge completed">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <p className="demo-notice">
        Demo mode — displayed values are sample data, not live AWS metrics.
      </p>
    </div>
  );
}

export default Dashboard;