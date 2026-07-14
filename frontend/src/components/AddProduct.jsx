import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
    addProduct,
    updateProduct
} from "../services/productService";

import "./AddProduct.css";



function AddProduct({

    loadProducts,
    editingProduct,
    closeForm

}) {



    const initialState = {

        name:"",
        description:"",
        price:"",
        quantity:"",
        category:"",
        stockStatus:""

    };



    const [product,setProduct] = useState(initialState);


    const [loading,setLoading] = useState(false);







    useEffect(()=>{


        if(editingProduct){


            setProduct({

                name: editingProduct.name || "",

                description: editingProduct.description || "",

                price: editingProduct.price || "",

                quantity: editingProduct.quantity || "",

                category: editingProduct.category || "",

                stockStatus: editingProduct.stockStatus || ""

            });


        }
        else{


            setProduct(initialState);


        }



    },[editingProduct]);










    const handleChange=(e)=>{


        const {name,value}=e.target;



        let updatedProduct={

            ...product,

            [name]:value

        };




        if(name==="quantity"){


            const qty = Number(value);



            if(qty<=0){

                updatedProduct.stockStatus="OUT OF STOCK";

            }

            else if(qty<=5){

                updatedProduct.stockStatus="LOW STOCK";

            }

            else{

                updatedProduct.stockStatus="IN STOCK";

            }


        }



        setProduct(updatedProduct);



    };











    const handleSubmit=async(e)=>{


        e.preventDefault();




        if(!product.name.trim()){


            toast.error(
                "Product name required"
            );

            return;

        }




        if(Number(product.price)<=0){


            toast.error(
                "Price must be greater than zero"
            );

            return;

        }




        if(Number(product.quantity)<0){


            toast.error(
                "Quantity cannot be negative"
            );

            return;

        }






        try{


            setLoading(true);



            if(editingProduct){



                await updateProduct(

                    editingProduct.id,

                    product

                );



                toast.success(
                    "Product updated successfully"
                );


            }
            else{


                await addProduct(product);



                toast.success(
                    "Product added successfully"
                );


            }




            await loadProducts();



            setProduct(initialState);



            closeForm();



        }
        catch(error){


            console.log(
                "Product Error:",
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









    return(



        <div className="product-form-card">





            <div className="product-form-header">


                <h4>


                    {
                        editingProduct
                        ?
                        "✏️ Edit Product"
                        :
                        "➕ Add Product"
                    }


                </h4>


            </div>








            <form onSubmit={handleSubmit}>


                <div className="row">





                    <div className="col-md-6 mb-3">


                        <label>
                            Product Name
                        </label>


                        <input

                            className="form-control"

                            type="text"

                            name="name"

                            value={product.name}

                            onChange={handleChange}

                            required

                        />


                    </div>









                    <div className="col-md-6 mb-3">


                        <label>
                            Category
                        </label>


                        <input

                            className="form-control"

                            type="text"

                            name="category"

                            value={product.category}

                            onChange={handleChange}

                            required

                        />


                    </div>









                    <div className="col-md-12 mb-3">


                        <label>
                            Description
                        </label>


                        <textarea

                            className="form-control"

                            rows="3"

                            name="description"

                            value={product.description}

                            onChange={handleChange}

                        />


                    </div>









                    <div className="col-md-4 mb-3">


                        <label>
                            Price
                        </label>


                        <input

                            type="number"

                            className="form-control"

                            name="price"

                            value={product.price}

                            onChange={handleChange}

                            required

                        />


                    </div>








                    <div className="col-md-4 mb-3">


                        <label>
                            Quantity
                        </label>


                        <input

                            type="number"

                            className="form-control"

                            name="quantity"

                            value={product.quantity}

                            onChange={handleChange}

                            required

                        />


                    </div>









                    <div className="col-md-4 mb-3">


                        <label>
                            Stock Status
                        </label>


                        <input

                            className="form-control"

                            value={product.stockStatus}

                            readOnly

                        />


                    </div>



                </div>









                <div className="form-buttons">



                    <button

                        type="submit"

                        disabled={loading}

                        className="add-product-btn"

                    >


                        {

                            loading

                            ?

                            "Saving..."

                            :

                            editingProduct

                            ?

                            "Update Product"

                            :

                            "Save Product"

                        }


                    </button>







                    <button

                        type="button"

                        className="cancel-product-btn"

                        onClick={closeForm}

                    >

                        Cancel


                    </button>



                </div>





            </form>





        </div>



    );


}



export default AddProduct;