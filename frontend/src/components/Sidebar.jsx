import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";


function Sidebar() {


    const location = useLocation();

    const navigate = useNavigate();


    const email = localStorage.getItem("email") || "Guest User";



    const handleLogout = () => {


        const confirmLogout = window.confirm(
            "Are you sure you want to logout?"
        );


        if(!confirmLogout) {

            return;

        }



        localStorage.removeItem("token");

        localStorage.removeItem("email");


        navigate("/login", {

            replace:true

        });


    };





    const menuItems = [


        {
            path:"/dashboard",
            name:"Dashboard",
            icon:"📊"
        },


        {
            path:"/products",
            name:"Products",
            icon:"📦"
        },


        {
            path:"/orders",
            name:"Orders",
            icon:"🛒"
        },


        {
            path:"/reports",
            name:"Reports",
            icon:"📈"
        }


    ];






    return (


        <div className="sidebar">



            {/* Logo */}


            <div className="sidebar-title">


                <span className="logo-icon">

                    📦

                </span>


                Smart Inventory


            </div>







            {/* User Profile */}


            <div className="user-section">


                <div className="user-avatar">

                    👤

                </div>



                <p className="welcome-text">

                    Welcome

                </p>



                <h6 className="user-email">

                    {email}

                </h6>


            </div>







            {/* Navigation Menu */}


            <ul className="sidebar-menu">


                {


                    menuItems.map((item)=>(


                        <li key={item.path}>


                            <Link


                                to={item.path}


                                className={

                                    location.pathname === item.path

                                    ?

                                    "menu-link active"

                                    :

                                    "menu-link"

                                }


                            >



                                <span className="menu-icon">

                                    {item.icon}

                                </span>



                                {item.name}



                            </Link>



                        </li>


                    ))


                }


            </ul>







            {/* Logout Button */}


            <button


                className="logout-btn"


                onClick={handleLogout}


            >


                🚪 Logout


            </button>





        </div>


    );


}


export default Sidebar;