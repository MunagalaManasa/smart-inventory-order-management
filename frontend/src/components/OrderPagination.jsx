import "./Pagination.css";


function OrderPagination({

    page,

    totalPages,

    setPage

}) {



    if(totalPages <= 1){

        return null;

    }





    const goPrevious = ()=>{


        if(page > 0){


            setPage(page - 1);


        }


    };






    const goNext = ()=>{


        if(page < totalPages - 1){


            setPage(page + 1);


        }


    };






    return (



        <div className="pagination-container">





            <button


                className="page-btn"


                disabled={page === 0}


                onClick={goPrevious}


            >


                ← Previous


            </button>









            <span className="page-number">


                Page <strong>{page + 1}</strong>


                {" "}of{" "}


                <strong>{totalPages}</strong>


            </span>









            <button


                className="page-btn"


                disabled={page === totalPages - 1}


                onClick={goNext}


            >


                Next →


            </button>







        </div>



    );


}



export default OrderPagination;