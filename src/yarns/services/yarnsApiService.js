import axios from "axios";


/
const apiUrl = "http://localhost:8185";

export const createYarn = async (yarn) => {

    try {
        const { data } = await axios.post(`${apiUrl}/yarns`, yarn);
        return data;
    } catch (error) {
        console.log("in create yarn:" + error.message);
        console.error("Error making request:", error.message); // Log error message
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
    return null;
};

export const getMyCards = async () => {

    try {
        const response = await axios.get(`${apiUrl}/cards/my-cards`);


        const data = response.data;
        return data;
    } catch (error) {
        console.log("in getMyCard:" + error.message);
        console.error("Error making request:", error.message); // Log error message
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
};

export const deleteCard = async (cardId) => {
    try {
        const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
        return data;
    } catch (error) {
        console.log("in deleteCard:" + error.message);
        console.error("Error making request:", error.message); // Log error message
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
};

export const editCard = async (cardId, normalaizedCard) => {
    try {
        const { data } = await axios.put(
            `${apiUrl}/cards/${cardId}`,
            normalaizedCard
        );
        return data;
    } catch (error) {
        console.log("in editCard normalizedCard is:" + normalaizedCard + " cardId is:" + cardId)
        console.log("in editCard:" + error.message);
        console.error("Error making request:", error.message); // Log error message
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
};

export const getCard = async (cardId) => {
    try {
        const { data } = await axios.get(`${apiUrl}/cards/${cardId}`);
        return data;
    } catch (error) {
        console.log("in getCard:" + error.message);
        console.error("Error making request:", error.message); // Log error message
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
};

export const getCards = async () => {
    try {
        const response = await axios.get(`${apiUrl}/cards`);
        const data = response.data;
        return data;
    } catch (error) {
        console.log("in getCards:" + error.message);
        console.error("Error making request:", error.message); // Log error message
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
};

export const changeLikeStatus = async (cardId) => {
    try {
        const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
        return data;
    } catch (error) {
        console.log("in changeLikeStatus:" + error.message);
        console.error("Error making request:", error.message); // Log error message
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
};