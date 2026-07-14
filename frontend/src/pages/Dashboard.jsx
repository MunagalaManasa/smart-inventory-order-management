import { useEffect, useState } from "react";
import "./Dashboard.css";

import { getDashboard } from "../services/dashboardService";

import DashboardChart from "../components/DashboardChart";
import StockPieChart from "../components/StockPieChart";


function Dashboard() {


    const [dashboard, setDashboard] = useState({


        totalProducts:0,

        totalOrders:0,

        totalStock:0,

        lowStockProducts:0,

        outOfStockProducts:0,


        recentOrders:[],

        recentProducts:[],

        lowStockList:[]


    });



    const [loading,setLoading] = useState(true);





    useEffect(()=>{


        loadDashboard();


    },[]);







    const loadDashboard = async()=>{


        try{


            const data = await getDashboard();


            console.log("Dashboard Data:",data);



            setDashboard({


                totalProducts:data?.totalProducts || 0,

                totalOrders:data?.totalOrders || 0,

                totalStock:data?.totalStock || 0,

                lowStockProducts:data?.lowStockProducts || 0,

                outOfStockProducts:data?.outOfStockProducts || 0,



                recentOrders:data?.recentOrders || [],

                recentProducts:data?.recentProducts || [],

                lowStockList:data?.lowStockList || []



            });



        }

        catch(error){


            console.log(
                "Dashboard Error:",
                error
            );


        }

        finally{


            setLoading(false);


        }


    };







    if(loading){


        return(

            <div className="dashboard text-center mt-5">


                <div className="spinner-border text-primary">

                </div>


                <h3 className="mt-3">

                    Loading Dashboard...

                </h3>


            </div>

        );


    }







    return(


        <div className="dashboard">





            <div className="dashboard-header">


                <h1>

                    📊 Smart Inventory Dashboard

                </h1>



                <button

                    className="btn btn-primary"

                    onClick={loadDashboard}

                >

                    🔄 Refresh

                </button>


            </div>







            {/* Dashboard Cards */}


            <div className="card-container">


                <div className="card">

                    <h3>
                        📦 Total Products
                    </h3>

                    <p>
                        {dashboard.totalProducts}
                    </p>

                </div>



                <div className="card">

                    <h3>
                        🛒 Total Orders
                    </h3>

                    <p>
                        {dashboard.totalOrders}
                    </p>

                </div>




                <div className="card">

                    <h3>
                        📚 Total Stock
                    </h3>

                    <p>
                        {dashboard.totalStock}
                    </p>

                </div>




                <div className="card">

                    <h3>
                        ⚠️ Low Stock
                    </h3>

                    <p>
                        {dashboard.lowStockProducts}
                    </p>

                </div>



            </div>







            {/* Charts */}


            <DashboardChart

                dashboard={dashboard}

            />



            <StockPieChart

                dashboard={dashboard}

            />









            {/* Tables */}


            <div className="dashboard-tables">





                <div className="table-card">


                    <h2>

                        🛒 Recent Orders

                    </h2>




                    <table>


                        <thead>

                            <tr>

                                <th>ID</th>

                                <th>Product</th>

                                <th>Quantity</th>

                                <th>Status</th>


                            </tr>

                        </thead>




                        <tbody>


                        {

                            dashboard.recentOrders.length > 0 ?


                            dashboard.recentOrders.map((order)=>(


                                <tr key={order.id}>


                                    <td>
                                        {order.id}
                                    </td>


                                    <td>
                                        {order.productName}
                                    </td>


                                    <td>
                                        {order.quantity}
                                    </td>


                                    <td>


                                        <span className="badge bg-success">

                                            {order.status}

                                        </span>


                                    </td>


                                </tr>


                            ))


                            :


                            <tr>

                                <td colSpan="4" className="text-center">

                                    No Recent Orders

                                </td>

                            </tr>


                        }


                        </tbody>


                    </table>



                </div>









                <div className="table-card">


                    <h2>

                        ⚠️ Low Stock Products

                    </h2>



                    <table>


                        <thead>


                            <tr>

                                <th>Name</th>

                                <th>Quantity</th>

                                <th>Status</th>


                            </tr>


                        </thead>



                        <tbody>


                        {


                            dashboard.lowStockList.length > 0 ?


                            dashboard.lowStockList.map((product)=>(


                                <tr key={product.id}>


                                    <td>
                                        {product.name}
                                    </td>


                                    <td>
                                        {product.quantity}
                                    </td>


                                    <td>

                                        <span className="badge bg-danger">

                                            {product.stockStatus}

                                        </span>

                                    </td>


                                </tr>


                            ))


                            :


                            <tr>

                                <td colSpan="3" className="text-center">

                                    No Low Stock Products

                                </td>

                            </tr>


                        }


                        </tbody>


                    </table>


                </div>





            </div>





        </div>


    );


}


export default Dashboard;