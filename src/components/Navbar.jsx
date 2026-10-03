function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h3>Cloud Operations</h3>
        <p>Monitor and manage your cloud infrastructure</p>
      </div>

      <div className="navbar-user">
        <div className="user-avatar">V</div>

        <div>
          <strong>Admin</strong>
          <span>Cloud Administrator</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;