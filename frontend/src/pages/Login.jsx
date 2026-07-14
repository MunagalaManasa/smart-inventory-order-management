import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { loginUser } from "../services/authService";

import "./Login.css";


function Login() {


    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const [loading,setLoading] = useState(false);


    const navigate = useNavigate();







    const handleLogin = async(e)=>{


        e.preventDefault();



        const loginData = {

            email,
            password

        };





        try{


            setLoading(true);



            const response = await loginUser(loginData);



            console.log(
                "Login Response:",
                response.data
            );







            if(response.data.token){



                // Clear previous login data

                localStorage.clear();






                // Store JWT Token

                localStorage.setItem(

                    "token",

                    response.data.token

                );







                // Store User Details

                localStorage.setItem(

                    "name",

                    response.data.name || ""

                );



                localStorage.setItem(

                    "email",

                    response.data.email || email

                );



                localStorage.setItem(

                    "role",

                    response.data.role || "USER"

                );







                toast.success(

                    "Login successful!"

                );





                setEmail("");

                setPassword("");





                navigate("/dashboard");



            }

            else{


                toast.error(

                    "Login failed!"

                );


            }





        }


        catch(error){



            console.log(

                "Login Error:",

                error.response?.data || error.message

            );



            toast.error(

                "Invalid email or password!"

            );



        }


        finally{


            setLoading(false);


        }



    };











    return(



        <div className="login-container">



            <div className="login-card">





                <div className="login-logo">

                    📦

                </div>






                <h1>

                    Smart Inventory

                </h1>




                <p>

                    Login to manage your inventory

                </p>









                <form onSubmit={handleLogin}>






                    <div className="input-group">



                        <label>

                            Email

                        </label>




                        <input


                            type="email"


                            placeholder="Enter email"


                            value={email}


                            onChange={(e)=>

                                setEmail(e.target.value)

                            }


                            required


                        />



                    </div>









                    <div className="input-group">



                        <label>

                            Password

                        </label>






                        <input


                            type="password"


                            placeholder="Enter password"


                            value={password}


                            onChange={(e)=>

                                setPassword(e.target.value)

                            }


                            required


                        />



                    </div>









                    <button


                        type="submit"


                        disabled={loading}


                    >



                        {

                            loading

                            ?

                            "Logging in..."

                            :

                            "Login"

                        }



                    </button>







                </form>





            </div>




        </div>


    );



}


export default Login;