import {
    FaBell,
    FaSearch,
    FaUserCircle
} from "react-icons/fa";

import "../styles/Topbar.css";

function Topbar() {

    const today = new Date();

    const date = today.toLocaleDateString("en-IN",{
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    });

    return(

        <div className="topbar">

            <div>

                <h2>Emergency Operations Center</h2>

                <p>{date}</p>

            </div>

            <div className="topbar-right">

                <div className="search">

                    <FaSearch/>

                    <input
                        placeholder="Search..."
                    />

                </div>

                <div className="notify">

                    <FaBell/>

                    <span>3</span>

                </div>

                <div className="profile">

                    <FaUserCircle/>

                    <div>

                        <h4>Administrator</h4>

                        <small>Control Center</small>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Topbar;