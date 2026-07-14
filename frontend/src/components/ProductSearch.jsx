import "./ProductSearch.css";


function ProductSearch({

    keyword,

    setKeyword,

    onSearch

}) {



    const handleClear = () => {


        setKeyword("");

        onSearch();


    };





    return (


        <div className="search-container">





            <div className="search-box">



                <input


                    type="text"


                    placeholder="🔍 Search products by name..."


                    value={keyword}


                    onChange={(e)=>

                        setKeyword(e.target.value)

                    }



                    onKeyDown={(e)=>{


                        if(e.key === "Enter"){

                            onSearch();

                        }


                    }}



                />



            </div>







            <button


                className="search-btn"


                onClick={onSearch}


            >


                🔍 Search


            </button>









            {

                keyword &&


                <button


                    className="clear-btn"


                    onClick={handleClear}


                >


                    ❌ Clear


                </button>


            }





        </div>



    );


}


export default ProductSearch;