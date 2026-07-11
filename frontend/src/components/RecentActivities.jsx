import {
    FaExclamationTriangle,
    FaHandsHelping,
    FaBoxOpen,
    FaBuilding,
    FaHospital
} from "react-icons/fa";

import "../styles/RecentActivities.css";

function RecentActivities() {

    const activities = [

        {
            id:1,
            icon:<FaExclamationTriangle/>,
            color:"#EF4444",
            title:"Flood reported in Chennai",
            time:"2 min ago"
        },

        {
            id:2,
            icon:<FaHandsHelping/>,
            color:"#16A34A",
            title:"Volunteer assigned",
            time:"8 min ago"
        },

        {
            id:3,
            icon:<FaBoxOpen/>,
            color:"#2563EB",
            title:"Food resources allocated",
            time:"12 min ago"
        },

        {
            id:4,
            icon:<FaBuilding/>,
            color:"#F59E0B",
            title:"NGO joined operation",
            time:"30 min ago"
        },

        {
            id:5,
            icon:<FaHospital/>,
            color:"#9333EA",
            title:"New shelter opened",
            time:"1 hour ago"
        }

    ];

    return(

        <div className="activity-card">

            <h2>

                Recent Activities

            </h2>

            {

                activities.map((item)=>(

                    <div
                        key={item.id}
                        className="activity-item"
                    >

                        <div
                            className="activity-icon"
                            style={{
                                background:item.color
                            }}
                        >

                            {item.icon}

                        </div>

                        <div className="activity-text">

                            <h4>

                                {item.title}

                            </h4>

                            <span>

                                {item.time}

                            </span>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default RecentActivities;