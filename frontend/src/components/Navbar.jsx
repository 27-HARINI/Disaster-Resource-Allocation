import { FaBell, FaUserCircle } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="top-navbar">

      <div>
        <h2>Dashboard</h2>
        <p>Welcome back, Harini 👋</p>
      </div>

      <div className="navbar-right">

        <FaBell className="nav-icon" />

        <div className="user-profile">
          <FaUserCircle className="user-icon" />
          <span>Admin</span>
        </div>

      </div>

    </div>
  );
}

export default Navbar;