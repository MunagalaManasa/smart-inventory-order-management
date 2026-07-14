import api from "../api/axiosConfig";


// Register API call
export const registerUser = async (userData) => {

    return await api.post("/api/auth/register", userData);

};


// Login API call
export const loginUser = async (loginData) => {

    return await api.post("/api/auth/login", loginData);

};