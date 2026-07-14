import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { registerUser } from "../services/authService";

import "./Register.css";



function Register() {


    const navigate = useNavigate();



    const [name,setName] = useState("");

    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const [role,setRole] = useState("USER");


    const [loading,setLoading] = useState(false);







    const handleRegister = async(e)=>{


        e.preventDefault();




        const userData = {


            name,

            email,

            password,

            role


        };







        try{


            setLoading(true);



            await registerUser(userData);




            toast.success(

                "Registration Successful!"

            );





            setName("");

            setEmail("");

            setPassword("");

            setRole("USER");





            setTimeout(()=>{


                navigate("/login");


            },1500);





        }



        catch(error){



            console.log(

                "Register Error:",

                error.response?.data || error.message

            );



            toast.error(

                "Registration Failed!"

            );


        }




        finally{


            setLoading(false);


        }



    };









    return(



        <div className="register-container">






            <div className="register-card">





                <div className="register-logo">

                    📦

                </div>





                <h1>

                    Smart Inventory

                </h1>





                <p>

                    Create your account

                </p>







                <form onSubmit={handleRegister}>


                    



                    <div className="input-group">


                        <label>

                            Name

                        </label>



                        <input


                            type="text"


                            placeholder="Enter name"


                            value={name}


                            onChange={(e)=>

                                setName(e.target.value)

                            }


                            required


                        />


                    </div>









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









                    <div className="input-group">


                        <label>

                            Role

                        </label>




                        <select


                            value={role}


                            onChange={(e)=>

                                setRole(e.target.value)

                            }


                        >


                            <option value="USER">

                                USER

                            </option>



                            <option value="ADMIN">

                                ADMIN

                            </option>



                        </select>



                    </div>









                    <button

                        type="submit"

                        disabled={loading}


                    >



                    {

                        loading

                        ?

                        "Creating Account..."

                        :

                        "Register"

                    }



                    </button>





                </form>









                <p className="login-link">


                    Already have an account?



                    <Link to="/login">


                        Login


                    </Link>



                </p>






            </div>





        </div>


    );



}



export default Register;