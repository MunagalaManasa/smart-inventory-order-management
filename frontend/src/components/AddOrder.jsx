import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
    createOrder,
    updateOrder
} from "../services/orderService";

import {
    getProducts
} from "../services/productService";

import "./AddOrder.css";


function AddOrder({

    loadOrders,

    editingOrder,

    closeForm

}) {



    const [products,setProducts] = useState([]);


    const [loading,setLoading] = useState(false);




    const [order,setOrder] = useState({

        customerName:"",
        productId:"",
        quantity:1,
        status:"PENDING"

    });









    useEffect(()=>{

        loadProducts();

    },[]);








    useEffect(()=>{


        if(editingOrder){


            setOrder({

                customerName:
                editingOrder.customerName || "",


                productId:
                editingOrder.productId || "",


                quantity:
                editingOrder.quantity || 1,


                status:
                editingOrder.status || "PENDING"


            });


        }

        else{


            setOrder({

                customerName:"",

                productId:"",

                quantity:1,

                status:"PENDING"

            });


        }


    },[editingOrder]);









    const loadProducts = async()=>{


        try{


            const response = await getProducts();


            setProducts(

                Array.isArray(response)

                ?

                response

                :

                response.data || []

            );


        }

        catch(error){


            console.log(error);


            toast.error(
                "Unable to load products"
            );


            setProducts([]);


        }


    };









    const handleChange=(e)=>{


        setOrder({

            ...order,

            [e.target.name]:

            e.target.value

        });


    };









    const handleSubmit=async(e)=>{


        e.preventDefault();





        if(!order.customerName.trim()){


            toast.error(
                "Customer name required"
            );


            return;

        }






        if(!order.productId){


            toast.error(
                "Select product"
            );


            return;


        }






        if(Number(order.quantity)<=0){


            toast.error(
                "Quantity must be greater than zero"
            );


            return;


        }








        const orderData={


            customerName:

            order.customerName,


            productId:

            Number(order.productId),


            quantity:

            Number(order.quantity),


            status:

            order.status


        };








        try{


            setLoading(true);




            if(editingOrder){


                await updateOrder(

                    editingOrder.id,

                    orderData

                );


                toast.success(
                    "Order updated successfully"
                );


            }

            else{


                await createOrder(

                    orderData

                );


                toast.success(
                    "Order created successfully"
                );


            }






            await loadOrders();


            closeForm();



        }

        catch(error){


            console.log(
                "Order Error:",
                error
            );


            toast.error(
                "Operation failed"
            );


        }

        finally{


            setLoading(false);


        }


    };









    return (

        <div className="order-form-card">



            <div className="order-form-header">

                <h4>

                    {

                        editingOrder

                        ?

                        "✏️ Update Order"

                        :

                        "➕ Add Order"

                    }

                </h4>

            </div>







            <form onSubmit={handleSubmit}>


                <div className="mb-3">

                    <label>
                        Customer Name
                    </label>


                    <input

                        type="text"

                        className="form-control"

                        name="customerName"

                        value={order.customerName}

                        onChange={handleChange}

                        placeholder="Enter customer name"

                        required

                    />

                </div>








                <div className="mb-3">


                    <label>
                        Product
                    </label>


                    <select

                        className="form-select"

                        name="productId"

                        value={order.productId}

                        onChange={handleChange}

                        required

                    >

                        <option value="">

                            Select Product

                        </option>


                        {
                            Array.isArray(products) &&
                            products.map((product)=>(

                                <option

                                    key={product.id}

                                    value={product.id}

                                >

                                    {product.name}

                                </option>

                            ))

                        }


                    </select>


                </div>








                <div className="mb-3">


                    <label>
                        Quantity
                    </label>


                    <input

                        type="number"

                        className="form-control"

                        name="quantity"

                        min="1"

                        value={order.quantity}

                        onChange={handleChange}

                        required

                    />


                </div>








                {/* Status */}

                <div className="mb-3">


                    <label>
                        Status
                    </label>


                    <select

                        className="form-select"

                        name="status"

                        value={order.status}

                        onChange={handleChange}

                    >

                        <option value="PENDING">

                            PENDING

                        </option>


                        <option value="COMPLETED">

                            COMPLETED

                        </option>


                        <option value="CANCELLED">

                            CANCELLED

                        </option>


                    </select>


                </div>









                <button

                    type="submit"

                    disabled={loading}

                    className={

                        editingOrder

                        ?

                        "update-btn"

                        :

                        "create-btn"

                    }

                >


                    {

                        loading

                        ?

                        "Saving..."

                        :


                        editingOrder

                        ?

                        "Update Order"

                        :

                        "Create Order"

                    }


                </button>







                <button

                    type="button"

                    className="cancel-btn ms-2"

                    onClick={closeForm}

                >

                    Cancel

                </button>





            </form>



        </div>

    );


}


export default AddOrder;