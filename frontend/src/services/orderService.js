import api from "./api";


const API_URL = "/orders";





// ===============================
// Get All Orders
// ===============================

export const getOrders = async()=>{


    try{


        const response = await api.get(

            API_URL

        );


        return response.data.data || [];


    }
    catch(error){


        console.log(

            "Get Orders Error:",
            error

        );


        throw error;


    }


};








// ===============================
// Get Order By ID
// ===============================

export const getOrderById = async(id)=>{


    try{


        const response = await api.get(

            `${API_URL}/${id}`

        );


        return response.data.data;


    }
    catch(error){


        console.log(

            "Get Order Error:",
            error

        );


        throw error;


    }


};









// ===============================
// Create Order
// ===============================

export const createOrder = async(order)=>{


    try{


        const response = await api.post(

            API_URL,

            order

        );


        return response.data;


    }
    catch(error){


        console.log(

            "Create Order Error:",
            error

        );


        throw error;


    }


};









// ===============================
// Update Order
// ===============================

export const updateOrder = async(

    id,

    order

)=>{


    try{


        const response = await api.put(

            `${API_URL}/${id}`,

            order

        );



        return response.data;



    }
    catch(error){


        console.log(

            "Update Order Error:",
            error

        );


        throw error;


    }


};









// ===============================
// Delete Order
// ===============================

export const deleteOrder = async(id)=>{


    try{


        const response = await api.delete(

            `${API_URL}/${id}`

        );



        return response.data;



    }
    catch(error){


        console.log(

            "Delete Order Error:",
            error

        );


        throw error;


    }


};









// ===============================
// Search Orders
// ===============================

export const searchOrders = async(keyword)=>{


    try{


        const response = await api.get(

            `${API_URL}/search?keyword=${encodeURIComponent(keyword)}`

        );



        return response.data.data || [];



    }
    catch(error){


        console.log(

            "Search Order Error:",
            error

        );


        throw error;


    }


};