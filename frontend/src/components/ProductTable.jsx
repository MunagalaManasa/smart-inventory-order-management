function ProductTable({ products = [], onDelete, onEdit }) {


    const getStatusClass = (status) => {


        if(status === "IN STOCK"){

            return "badge bg-success";

        }


        if(status === "LOW STOCK"){

            return "badge bg-warning text-dark";

        }


        if(status === "OUT OF STOCK"){

            return "badge bg-danger";

        }


        return "badge bg-secondary";


    };







    return (


        <table className="table table-bordered table-hover shadow-sm">


            <thead className="table-dark">


                <tr>


                    <th>ID</th>

                    <th>Name</th>

                    <th>Category</th>

                    <th>Price</th>

                    <th>Quantity</th>

                    <th>Status</th>

                    <th>Actions</th>


                </tr>


            </thead>







            <tbody>



                {

                    products.length === 0 ?


                    (


                        <tr>


                            <td

                                colSpan="7"

                                className="text-center"

                            >

                                📦 No Products Found


                            </td>


                        </tr>


                    )

                    :


                    products.map((product)=>(



                        <tr key={product.id}>


                            <td>

                                {product.id}

                            </td>





                            <td>

                                {product.name}

                            </td>





                            <td>

                                {product.category}

                            </td>






                            <td>

                                ₹ {Number(product.price).toFixed(2)}

                            </td>






                            <td>

                                {product.quantity}

                            </td>






                            <td>


                                <span

                                    className={
                                        getStatusClass(
                                            product.stockStatus
                                        )
                                    }

                                >

                                    {product.stockStatus}


                                </span>


                            </td>









                            <td>



                                <button


                                    className="btn btn-primary btn-sm me-2"


                                    onClick={()=>onEdit(product)}


                                >


                                    ✏️ Edit


                                </button>







                                <button


                                    className="btn btn-danger btn-sm"


                                    onClick={()=>onDelete(product.id)}


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



export default ProductTable;