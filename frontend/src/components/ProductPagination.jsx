import "./Pagination.css";


function ProductPagination({

    page,

    totalPages,

    setPage


}) {



    const goToPage = (newPage)=>{


        if(newPage >= 0 && newPage < totalPages){

            setPage(newPage);

        }


    };






    return (


        <div className="pagination-container">





            <button


                className="page-btn"


                disabled={page === 0}


                onClick={()=>goToPage(0)}


            >


                ⏮ First


            </button>








            <button


                className="page-btn"


                disabled={page === 0}


                onClick={()=>goToPage(page-1)}


            >


                ← Previous


            </button>









            <span className="page-number">


                Page 

                <strong>

                    {page + 1}

                </strong>


                {" "}of{" "}


                <strong>

                    {totalPages || 1}

                </strong>


            </span>









            <button


                className="page-btn"


                disabled={page + 1 >= totalPages}


                onClick={()=>goToPage(page+1)}


            >


                Next →

            </button>








            <button


                className="page-btn"


                disabled={page + 1 >= totalPages}


                onClick={()=>goToPage(totalPages-1)}


            >


                Last ⏭


            </button>





        </div>



    );


}



export default ProductPagination;