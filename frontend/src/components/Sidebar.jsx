import {
    FaHome,
    FaExclamationTriangle,
    FaBoxOpen,
    FaHandsHelping,
    FaBuilding,
    FaHome as FaShelter,
    FaExchangeAlt,
    FaSignOutAlt
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import "../styles/sidebar.css";

function Sidebar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("isLoggedIn");

        navigate("/");

    };

    return (

        <div className="sidebar">

            <div className="logo">

                <h2>🌍 ResQNet</h2>

                <p>Emergency Platform</p>

            </div>

            <nav>

                <Link to="/dashboard">

                    <FaHome />

                    Dashboard

                </Link>

                <Link to="/disaster">

                    <FaExclamationTriangle />

                    Disaster

                </Link>

                <Link to="/resource">

                    <FaBoxOpen />

                    Resources

                </Link>

                <Link to="/volunteer">

                    <FaHandsHelping />

                    Volunteers

                </Link>

                <Link to="/ngo">

                    <FaBuilding />

                    NGOs

                </Link>

                <Link to="/shelter">

                    <FaShelter />

                    Shelters

                </Link>

                <Link to="/allocation">

                    <FaExchangeAlt />

                    Allocation

                </Link>

            </nav>

            <div
                className="logout"
                onClick={logout}
                style={{ cursor: "pointer" }}
            >

                <FaSignOutAlt />

                Logout

            </div>

        </div>

    );

}

export default Sidebar;