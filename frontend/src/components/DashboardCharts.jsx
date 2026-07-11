import {

    Chart as ChartJS,

    ArcElement,

    CategoryScale,

    LinearScale,

    BarElement,

    Title,

    Tooltip,

    Legend

} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

import "../styles/dashboardCharts.css";

ChartJS.register(

    ArcElement,

    CategoryScale,

    LinearScale,

    BarElement,

    Title,

    Tooltip,

    Legend

);

function DashboardCharts({dashboard}){

    const pieData={

        labels:[

            "Resources",

            "Volunteers",

            "NGOs",

            "Shelters"

        ],

        datasets:[{

            data:[

                dashboard.totalResources,

                dashboard.totalVolunteers,

                dashboard.totalNgos,

                dashboard.totalShelters

            ],

            backgroundColor:[

                "#2563EB",

                "#16A34A",

                "#F59E0B",

                "#9333EA"

            ]

        }]

    };

    const barData={

        labels:[

            "Disasters",

            "Resources",

            "Volunteers",

            "NGOs",

            "Shelters",

            "Allocations"

        ],

        datasets:[{

            label:"Total",

            data:[

                dashboard.totalDisasters,

                dashboard.totalResources,

                dashboard.totalVolunteers,

                dashboard.totalNgos,

                dashboard.totalShelters,

                dashboard.totalAllocations

            ],

            backgroundColor:"#0A2540"

        }]

    };

    return(

        <div className="chart-grid">

            <div className="chart-card">

                <h3>

                    Resource Distribution

                </h3>

                <Pie data={pieData}/>

            </div>

            <div className="chart-card">

                <h3>

                    Overall Statistics

                </h3>

                <Bar data={barData}/>

            </div>

        </div>

    );

}

export default DashboardCharts;