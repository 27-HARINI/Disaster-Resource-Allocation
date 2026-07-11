import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";

import {
    FaExclamationTriangle,
    FaBoxOpen,
    FaHandsHelping,
    FaBuilding,
    FaHospital,
    FaExchangeAlt
} from "react-icons/fa";

import { getDashboardData } from "../services/dashboardService";

import "../styles/dashboard.css";
import DashboardCharts from "../components/DashboardCharts";
import RecentActivities from "../components/RecentActivities";
import DisasterMap from "../components/DisasterMap";
import EmergencyPanel from "../components/EmergencyPanel";
function Dashboard() {

    const [dashboard, setDashboard] = useState({

        totalDisasters:0,

        totalResources:0,

        totalVolunteers:0,

        totalNgos:0,

        totalShelters:0,

        totalAllocations:0

    });

    useEffect(()=>{

        loadDashboard();

    },[]);

    const loadDashboard=()=>{

        getDashboardData()

        .then((res)=>{

            setDashboard(res.data);

        })

        .catch(console.error);

    };

    const cards=[

        {

            title:"Disasters",

            value:dashboard.totalDisasters,

            icon:<FaExclamationTriangle/>,

            color:"#EF4444"

        },

        {

            title:"Resources",

            value:dashboard.totalResources,

            icon:<FaBoxOpen/>,

            color:"#2563EB"

        },

        {

            title:"Volunteers",

            value:dashboard.totalVolunteers,

            icon:<FaHandsHelping/>,

            color:"#16A34A"

        },

        {

            title:"NGOs",

            value:dashboard.totalNgos,

            icon:<FaBuilding/>,

            color:"#F59E0B"

        },

        {

            title:"Shelters",

            value:dashboard.totalShelters,

            icon:<FaHospital/>,

            color:"#9333EA"

        },

        {

            title:"Allocations",

            value:dashboard.totalAllocations,

            icon:<FaExchangeAlt/>,

            color:"#06B6D4"

        }

    ];

    return(

        <AdminLayout>
            <EmergencyPanel dashboard={dashboard}/>
            <div className="dashboard">

                <div className="hero-card">

                    <h1>

                        Disaster Resource Allocation System

                    </h1>

                    <p>

                        Real-Time Emergency Management Dashboard

                    </p>

                </div>

                <div className="dashboard-grid">

                    {

                        cards.map((card,index)=>(

                            <div

                                key={index}

                                className="dashboard-card"

                            >

                                <div

                                    className="dashboard-icon"

                                    style={{

                                        background:card.color

                                    }}

                                >

                                    {card.icon}

                                </div>

                                <h2>{card.value}</h2>

                                <p>{card.title}</p>

                            </div>

                        ))

                    }

                </div>
                <DashboardCharts dashboard={dashboard}/>
                <RecentActivities/>
                <DisasterMap/>

            </div>

        </AdminLayout>

    );

}

export default Dashboard;