import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title
} from "chart.js";

import { Pie } from "react-chartjs-2";

import "./StockPieChart.css";


ChartJS.register(

    ArcElement,
    Tooltip,
    Legend,
    Title

);





function StockPieChart({ dashboard }) {



    const data = {


        labels:[

            "Available Stock",

            "Low Stock",

            "Out Of Stock"

        ],



        datasets:[


            {

                label:"Stock Status",


                data:[


                    dashboard?.totalStock || 0,


                    dashboard?.lowStockProducts || 0,


                    dashboard?.outOfStockProducts || 0


                ],



                backgroundColor:[


                    "#16a34a",

                    "#f59e0b",

                    "#dc2626"


                ],



                borderWidth:2


            }


        ]


    };







    const options={


        responsive:true,


        maintainAspectRatio:false,



        plugins:{


            legend:{


                position:"bottom"


            },



            title:{


                display:true,


                text:"Stock Distribution"


            }


        }



    };







    return(


        <div className="pie-card">



            <h4>

                📦 Stock Analysis

            </h4>





            <div className="pie-chart">


                <Pie

                    data={data}

                    options={options}

                />


            </div>



        </div>


    );



}



export default StockPieChart;