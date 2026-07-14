import "./OrderSearch.css";


function OrderSearch({

    keyword,

    setKeyword,

    onSearch

}) {



    const handleKeyDown = (e)=>{


        if(e.key === "Enter"){


            onSearch();


        }


    };






    return (



        <div className="order-search-container">





            <input


                type="text"


                placeholder="🔍 Search orders by customer name..."


                value={keyword}


                onChange={(e)=>


                    setKeyword(e.target.value)

                }


                onKeyDown={handleKeyDown}


            />






            <button


                className="order-search-btn"


                onClick={onSearch}


            >


                Search


            </button>







            {

                keyword &&


                <button


                    className="clear-search-btn"


                    onClick={()=>{


                        setKeyword("");


                        onSearch();


                    }}


                >


                    Clear


                </button>


            }







        </div>


    );


}



export default OrderSearch;