import {
    FaBell,
    FaHandsHelping,
    FaBoxOpen,
    FaHospital,
    FaExclamationTriangle
} from "react-icons/fa";

import "../styles/emergencyPanel.css";

function EmergencyPanel({dashboard}){

    return(

        <div className="emergency-panel">

            <div className="alert-banner">

                <FaBell/>

                <span>

                    Emergency Response Command Center

                </span>

            </div>

            <div className="emergency-grid">

                <div className="emergency-card red">

                    <FaExclamationTriangle/>

                    <h2>{dashboard.totalDisasters}</h2>

                    <p>Active Disasters</p>

                </div>

                <div className="emergency-card blue">

                    <FaBoxOpen/>

                    <h2>{dashboard.totalResources}</h2>

                    <p>Resources</p>

                </div>

                <div className="emergency-card green">

                    <FaHandsHelping/>

                    <h2>{dashboard.totalVolunteers}</h2>

                    <p>Volunteers</p>

                </div>

                <div className="emergency-card purple">

                    <FaHospital/>

                    <h2>{dashboard.totalShelters}</h2>

                    <p>Shelters</p>

                </div>

            </div>

        </div>

    );

}

export default EmergencyPanel;