import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import "./Orders.css";

import Sidebar from "../components/Sidebar";
import AddOrder from "../components/AddOrder";
import OrderSearch from "../components/OrderSearch";
import OrderTable from "../components/OrderTable";
import OrderPagination from "../components/OrderPagination";

import {
    getOrders,
    searchOrders,
    deleteOrder
} from "../services/orderService";



function Orders() {


    const [orders,setOrders] = useState([]);

    const [keyword,setKeyword] = useState("");

    const [showForm,setShowForm] = useState(false);

    const [editingOrder,setEditingOrder] = useState(null);

    const [page,setPage] = useState(0);

    const [loading,setLoading] = useState(false);


    const pageSize = 5;



    useEffect(()=>{

        loadOrders();

    },[]);





    const loadOrders = async()=>{


        try{


            setLoading(true);


            const response = await getOrders();


            console.log(
                "Orders Response:",
                response
            );


            setOrders(

                Array.isArray(response)

                ?

                response

                :

                []

            );


        }
        catch(error){


            console.log(
                "Load Orders Error:",
                error
            );


            toast.error(
                "Failed to load orders"
            );


            setOrders([]);


        }
        finally{


            setLoading(false);


        }


    };








    const handleSearch = async()=>{


        try{


            if(keyword.trim()===""){


                loadOrders();

                return;

            }



            const response = await searchOrders(keyword);



            setOrders(

                Array.isArray(response)

                ?

                response

                :

                []

            );


            setPage(0);



        }
        catch(error){


            console.log(error);


            toast.error(
                "Search failed"
            );


        }


    };










    const handleEdit = (order)=>{


        console.log(
            "Editing Order:",
            order
        );


        setEditingOrder(order);


        setShowForm(true);


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    };











    const handleDelete = async(id)=>{


        if(!window.confirm(
            "Delete this order?"
        )){

            return;

        }




        try{


            await deleteOrder(id);



            toast.success(
                "Order deleted successfully"
            );


            loadOrders();



        }
        catch(error){


            console.log(
                error
            );


            toast.error(
                "Delete failed"
            );


        }


    };









    const closeForm = ()=>{


        setShowForm(false);

        setEditingOrder(null);


    };









    const totalPages = Math.ceil(

        orders.length / pageSize

    );



    const currentOrders = orders.slice(

        page * pageSize,

        page * pageSize + pageSize

    );







    return(


        <>


            <Sidebar />


            <div className="orders-page">



                <div className="orders-header">


                    <h2>
                        🛒 Orders Management
                    </h2>



                    <button

                        className="add-order-btn"

                        onClick={()=>{

                            setEditingOrder(null);

                            setShowForm(true);

                        }}

                    >

                        + Add Order


                    </button>


                </div>






                {

                    showForm &&

                    <AddOrder

                        loadOrders={loadOrders}

                        editingOrder={editingOrder}

                        closeForm={closeForm}

                    />

                }






                <OrderSearch

                    keyword={keyword}

                    setKeyword={setKeyword}

                    onSearch={handleSearch}

                />







                {

                    loading ?


                    <div className="text-center mt-5">


                        <div className="spinner-border text-primary">

                        </div>


                        <h4>

                            Loading Orders...

                        </h4>


                    </div>



                    :


                    <div className="order-table-card">


                        <OrderTable

                            orders={currentOrders}

                            onDelete={handleDelete}

                            onEdit={handleEdit}

                        />


                    </div>


                }






                {

                    !loading && totalPages > 1 &&


                    <OrderPagination

                        page={page}

                        totalPages={totalPages}

                        setPage={setPage}

                    />


                }




            </div>



        </>


    );


}


export default Orders;