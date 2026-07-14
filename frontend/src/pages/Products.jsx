import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import "./Products.css";

import AddProduct from "../components/AddProduct";
import ProductSearch from "../components/ProductSearch";
import ProductTable from "../components/ProductTable";
import ProductPagination from "../components/ProductPagination";

import {
    getProductsWithPagination,
    searchProducts,
    deleteProduct
} from "../services/productService";


function Products() {


    const [products, setProducts] = useState([]);

    const [page, setPage] = useState(0);

    const [totalPages, setTotalPages] = useState(1);

    const [keyword, setKeyword] = useState("");

    const [showForm, setShowForm] = useState(false);

    const [editingProduct, setEditingProduct] = useState(null);





    useEffect(() => {

        loadProducts();

    }, [page]);








    const loadProducts = async () => {


        try {


            const response =
                await getProductsWithPagination(page,5);



            setProducts(
                response.data.content || []
            );


            setTotalPages(
                response.data.totalPages || 1
            );


        }
        catch(error) {


            console.log(
                "Load Product Error:",
                error
            );


            toast.error(
                "Unable to load products"
            );


        }


    };








    const handleSearch = async () => {


        try {


            if(keyword.trim()==="") {


                loadProducts();

                return;

            }




            const response =
                await searchProducts(keyword);



            setProducts(
                response.data.data || response.data || []
            );


            setTotalPages(1);



        }
        catch(error){


            console.log(error);


            toast.error(
                "Search failed"
            );


        }


    };









    const handleEdit = (product)=>{


        setEditingProduct(product);


        setShowForm(true);



        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    };









    const handleDelete = async(id)=>{


        const confirm =
            window.confirm(
                "Delete this product?"
            );



        if(!confirm){

            return;

        }





        try{


            await deleteProduct(id);



            toast.success(
                "Product deleted successfully"
            );



            loadProducts();


        }
        catch(error){


            console.log(error);


            toast.error(
                "Delete failed"
            );


        }


    };









    const closeForm = ()=>{


        setShowForm(false);


        setEditingProduct(null);


    };









    return (

        <div className="products-page">



            <div className="products-header">


                <h2>

                    📦 Products Management

                </h2>




                <button

                    className="add-btn"

                    onClick={()=>{


                        setShowForm(true);


                        setEditingProduct(null);


                    }}

                >

                    + Add Product


                </button>



            </div>









            {
                showForm &&


                <AddProduct


                    loadProducts={loadProducts}


                    editingProduct={editingProduct}


                    setEditingProduct={setEditingProduct}


                    closeForm={closeForm}


                />


            }









            <ProductSearch


                keyword={keyword}


                setKeyword={setKeyword}


                onSearch={handleSearch}


            />









            <div className="product-table-card">


                <ProductTable


                    products={products}


                    onEdit={handleEdit}


                    onDelete={handleDelete}


                />


            </div>









            <ProductPagination


                page={page}


                totalPages={totalPages}


                setPage={setPage}


            />





        </div>


    );


}


export default Products;