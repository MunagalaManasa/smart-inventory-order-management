import "./OrderTable.css";


function OrderTable({ 
    orders = [], 
    onDelete, 
    onEdit 
}) {



    const getStatusClass = (status)=>{


        switch(status){


            case "COMPLETED":

                return "status-badge completed";


            case "CANCELLED":

                return "status-badge cancelled";


            case "PENDING":

                return "status-badge pending";


            default:

                return "status-badge";


        }


    };





    return (


        <table className="order-table">



            <thead>


                <tr>


                    <th>ID</th>


                    <th>Customer</th>


                    <th>Product ID</th>


                    <th>Product</th>


                    <th>Quantity</th>


                    <th>Total Price</th>


                    <th>Status</th>


                    <th>Actions</th>


                </tr>


            </thead>







            <tbody>



            {


                orders.length === 0 ?



                (



                    <tr>


                        <td 
                            colSpan="8"
                            className="text-center"
                        >


                            No Orders Found


                        </td>


                    </tr>



                )



                :




                orders.map((order)=>(



                    <tr key={order.id}>


                        <td>

                            {order.id}


                        </td>





                        <td>

                            {order.customerName || "-"}


                        </td>





                        <td>

                            {order.productId || "-"}


                        </td>





                        <td>

                            {order.productName || "Unknown"}


                        </td>






                        <td>

                            {order.quantity || 0}


                        </td>






                        <td>


                            ₹ { 

                                order.totalPrice 

                                ? 

                                Number(order.totalPrice)
                                .toFixed(2)

                                :

                                "0.00"

                            }


                        </td>








                        <td>


                            <span

                                className={
                                    getStatusClass(
                                        order.status
                                    )
                                }

                            >


                                {
                                    order.status 
                                    || 
                                    "PENDING"
                                }



                            </span>


                        </td>









                        <td>



                            <button


                                className="edit-btn"


                                onClick={()=>


                                    onEdit && 
                                    onEdit(order)

                                }


                            >


                                ✏️ Edit


                            </button>








                            <button


                                className="delete-btn"


                                onClick={()=>


                                    onDelete &&

                                    onDelete(order.id)

                                }


                            >


                                🗑 Delete


                            </button>





                        </td>






                    </tr>



                ))



            }



            </tbody>





        </table>


    );


}



export default OrderTable;