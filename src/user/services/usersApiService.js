import axios from "axios";

const apiUrl = "http://localhost:8185/users";

export const login = async (userLogin) => {
    try {
        const response = await axios.post(apiUrl + "/login", userLogin);
        const data = response.data;
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const signup = async (normalizeUser) => {
    try {
        console.log("signup. normalizeUser is:", normalizeUser);

        const { data } = await axios.post(apiUrl, normalizeUser);
        return data;
    }
    catch (error) {
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

export const addYarnToCart = async (yarnInfo, userId) => {
    try {
        const { data } = await axios.put(`${apiUrl}/${userId}/cart`, yarnInfo);
        return data;
    } catch (error) {
        console.error("Error addYarnToCart making request:", error.message); // Log error message
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

export const rmvYarnFromCart = async (yarnId, userId) => {
    try {
        const { data } = await axios.delete(`${apiUrl}/${userId}/cart/${yarnId}`);
        return data;
    } catch (error) {
        console.error("Error rmvYarnFromCart making request:", error.message); // Log error message
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

export const getUserCart = async (userId) => {
    try {
        const { data } = await axios.get(`${apiUrl}/${userId}/cart`);
        return data;
    } catch (error) {
        console.error("Error rmvYarnFromCart making request:", error.message); // Log error message
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
export const getUserByEmail = async (userEmail) => {
    try {
        const { data } = await axios.get(`${apiUrl}/search?email=${userEmail}`);
        return data;
    } catch (error) {
        console.error("Error rmvYarnFromCart making request:", error.message); // Log error message
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