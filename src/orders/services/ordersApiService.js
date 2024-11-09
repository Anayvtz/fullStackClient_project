import axios from "axios";

const apiUrl = "http://localhost:8185/orders";

export const createOrder = async (userId, cart) => {
    try {
        const order = await axios.post(`${apiUrl}/${userId}`, cart);
        return order;
    } catch (error) {
        console.error("Error createOrder making request:", error.message); // Log error message
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Error response data:", error.response.data);
            console.error("Error response status:", error.response.status);
            console.error("Error response headers:", error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received for the request:", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error setting up the request:", error.message);
        }
        throw new Error(error.message);
    }
}