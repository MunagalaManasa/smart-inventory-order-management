import axios from "axios";

const API_URL = "http://localhost:8080/products";

const getToken = () => {
    return localStorage.getItem("token");
};

const getConfig = () => ({
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
});

// Get All Products
export const getProducts = async () => {
    const response = await axios.get(API_URL, getConfig());
    return response.data;
};

// Pagination
export const getProductsWithPagination = async (page, size) => {
    const response = await axios.get(
        `${API_URL}/page?page=${page}&size=${size}`,
        getConfig()
    );
    return response.data;
};

// Search Products
export const searchProducts = async (keyword) => {
    const response = await axios.get(
        `${API_URL}/search?keyword=${keyword}`,
        getConfig()
    );
    return response.data;
};

// Add Product
export const addProduct = async (product) => {
    const response = await axios.post(
        API_URL,
        product,
        getConfig()
    );
    return response.data;
};

// Update Product
export const updateProduct = async (id, product) => {
    const response = await axios.put(
        `${API_URL}/${id}`,
        product,
        getConfig()
    );
    return response.data;
};

// Delete Product
export const deleteProduct = async (id) => {
    const response = await axios.delete(
        `${API_URL}/${id}`,
        getConfig()
    );
    return response.data;
};