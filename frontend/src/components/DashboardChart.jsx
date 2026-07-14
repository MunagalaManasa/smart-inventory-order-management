import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

import "./DashboardChart.css";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



function DashboardChart({ dashboard }) {



    const data = {


        labels:[

            "Products",
            "Orders",
            "Stock",
            "Low Stock"

        ],



        datasets:[


            {

                label:"Inventory",

                data:[

                    dashboard?.totalProducts || 0,

                    dashboard?.totalOrders || 0,

                    dashboard?.totalStock || 0,

                    dashboard?.lowStockProducts || 0

                ],



                backgroundColor:[

                    "#2563eb",

                    "#16a34a",

                    "#f59e0b",

                    "#dc2626"

                ],



                borderRadius:10,


                barThickness:35


            }


        ]


    };







    const options={


        responsive:true,


        maintainAspectRatio:false,



        plugins:{


            legend:{


                display:false


            },


            title:{


                display:false


            }


        },



        scales:{


            y:{


                beginAtZero:true,


                ticks:{


                    precision:0


                }


            }


        }



    };







    return(


        <div className="chart-card">


            <h4>

                📊 Inventory Overview

            </h4>



            <div className="bar-chart">


                <Bar

                    data={data}

                    options={options}

                />


            </div>



        </div>


    );


}



export default DashboardChart;