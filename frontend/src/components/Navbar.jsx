import { useNavigate } from "react-router-dom";
import "./Navbar.css";


function Navbar() {


    const navigate = useNavigate();



    const name = localStorage.getItem("name");

    const email = localStorage.getItem("email");

    const role = localStorage.getItem("role");







    const handleLogout = () => {



        const confirmLogout = window.confirm(

            "Are you sure you want to logout?"

        );



        if(!confirmLogout){

            return;

        }







        // Clear user data

        localStorage.removeItem("token");

        localStorage.removeItem("name");

        localStorage.removeItem("email");

        localStorage.removeItem("role");





        navigate("/login");


    };









    return (



        <nav className="navbar">





            {/* Brand */}


            <div className="brand-section">



                <h2 className="logo">


                    📦 Smart Inventory System


                </h2>





                <p className="subtitle">


                    Inventory & Order Management Dashboard


                </p>



            </div>












            {/* User Profile */}


            <div className="user-section">





                <div className="avatar">


                    👤


                </div>







                <div className="user-info">



                    <h6>


                        {name || "User"}


                    </h6>





                    <small>


                        📧 {email}


                    </small>





                    <small>


                        🔐 {role}


                    </small>



                </div>









                <button


                    className="logout-btn"


                    onClick={handleLogout}


                >


                    🚪 Logout


                </button>






            </div>







        </nav>



    );


}



export default Navbar;