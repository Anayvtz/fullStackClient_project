import axios from "axios";



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



export const deleteYarn = async (yarnId) => {
    try {
        const { data } = await axios.delete(`${apiUrl}/yarns/${yarnId}`);
        return data;
    } catch (error) {
        console.log("in deleteYarn:" + error.message);
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

export const editYarn = async (yarnId, normalaizedYarn) => {
    try {

        const { data } = await axios.put(
            `${apiUrl}/yarns/${yarnId}`,
            normalaizedYarn
        );
        return data;
    } catch (error) {
        console.log("in editYarn normalizedYarn is:" + normalaizedYarn + " yarnId is:" + yarnId)
        console.log("in editYarn:" + error.message);
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

export const getYarn = async (yarnId) => {
    try {
        const { data } = await axios.get(`${apiUrl}/yarns/${yarnId}`);
        return data;
    } catch (error) {
        console.log("in getYarn:" + error.message);
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

export const getYarns = async () => {
    try {
        const response = await axios.get(`${apiUrl}/yarns`);
        const data = response.data;
        return data;
    } catch (error) {
        console.log("in getYarns:" + error.message);
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

export const getYarnBySize = async (size) => {
    try {
        const { data } = await axios.get(`${apiUrl}/yarns/search?size=${size}`);
        return data;
    } catch (error) {
        console.log("in getYarnBySize:" + error.message);
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