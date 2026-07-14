import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";


import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";



import Login from "./pages/Login";

import Register from "./pages/Register";


import Dashboard from "./pages/Dashboard";

import Products from "./pages/Products";

import Orders from "./pages/Orders";

import Reports from "./pages/Reports";


import ProtectedLayout from "./components/ProtectedLayout";





function App() {



    return (



        <BrowserRouter>





            <ToastContainer


                position="top-right"


                autoClose={2000}


                newestOnTop={true}


                closeOnClick


                pauseOnHover


                draggable


                theme="colored"


            />







            <Routes>







                {/* Default */}


                <Route


                    path="/"


                    element={

                        <Navigate

                            to="/login"

                            replace

                        />

                    }


                />









                {/* Public Routes */}



                <Route


                    path="/login"


                    element={<Login />}


                />





                <Route


                    path="/register"


                    element={<Register />}


                />









                {/* Protected Routes */}




                <Route


                    path="/dashboard"


                    element={


                        <ProtectedLayout>


                            <Dashboard />


                        </ProtectedLayout>


                    }


                />







                <Route


                    path="/products"


                    element={


                        <ProtectedLayout>


                            <Products />


                        </ProtectedLayout>


                    }


                />







                <Route


                    path="/orders"


                    element={


                        <ProtectedLayout>


                            <Orders />


                        </ProtectedLayout>


                    }


                />







                <Route


                    path="/reports"


                    element={


                        <ProtectedLayout>


                            <Reports />


                        </ProtectedLayout>


                    }


                />










                {/* Wrong URL */}



                <Route


                    path="*"


                    element={


                        <Navigate

                            to="/login"

                            replace

                        />


                    }


                />





            </Routes>





        </BrowserRouter>


    );



}



export default App;