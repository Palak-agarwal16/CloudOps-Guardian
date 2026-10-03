import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>CloudOps</h2>
        <span>Guardian</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end>
          Dashboard
        </NavLink>

        <NavLink to="/resources">
          Resources
        </NavLink>

        <NavLink to="/incidents">
          Incidents
        </NavLink>

        <NavLink to="/monitoring">
          Monitoring
        </NavLink>

        <NavLink to="/remediation">
          Remediation
        </NavLink>

        <NavLink to="/history">
          History
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/login">
          Logout
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;