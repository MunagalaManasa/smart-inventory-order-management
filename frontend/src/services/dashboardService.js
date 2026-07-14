import api from "./api";


const API_URL = "/dashboard";


export const getDashboard = async () => {

    try {


        const response = await api.get(API_URL);


        console.log(
            "Dashboard API Response:",
            response.data
        );


        return response.data;


    } catch (error) {


        console.error(
            "Dashboard API Error:",
            error.response?.data || error.message
        );


        throw error;

    }

};