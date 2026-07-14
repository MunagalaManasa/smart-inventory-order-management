import api from "./api";

const API_URL = "/reports";

export const getInventoryReport = async () => {

    try {

        const response = await api.get(`${API_URL}/inventory`);

        console.log("Inventory Report Response:", response.data);

        // Return only the report data
        return response.data.data;

    } catch (error) {

        console.error(
            "Inventory Report Error:",
            error.response?.data || error.message
        );

        throw error;
    }
};