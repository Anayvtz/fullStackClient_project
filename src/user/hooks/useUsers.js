import { useCallback, useEffect, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { useSnack } from "../../utils/providers/SnackbarProvider";
import useAxios from "../../utils/hooks/useAxios";
import { addYarnToCart, getUserCart, login, rmvYarnFromCart, signup } from "../services/usersApiService";
import { getUser, removeEmail, removeToken, setEmailInLocalStorage, setTokenInLocalStorage } from "../services/localStorageService";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";

export default function useUsers() {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [cart, setCart] = useState([]);
    const { user, setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();
    const setSnack = useSnack();
    useEffect(() => {
        handleGetUserCart();
    }, []);

    useAxios();
    const handleLogin = useCallback(async (userLogin) => {
        setIsLoading(true);
        try {
            const token = await login(userLogin);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            setEmailInLocalStorage(userLogin.email);
            navigate(ROUTES.YARNS);
        } catch (error) {
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
            setError(error.message);
            setSnack("error", error.message);
        }
        setIsLoading(false);
    }, []);

    const handleLogout = () => {
        removeEmail();
        removeToken();
        setUser(null);
    }

    const handleRegister = useCallback(async (userInfo) => {
        setIsLoading(true);
        try {
            const normalizeUserInfo = normalizeUser(userInfo);
            const signupData = signup(normalizeUserInfo);

            await handleLogin({ email: userInfo.email, password: userInfo.password });
        } catch (error) {

            console.error("Error handleRegister making request:", error.message); // Log error message
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
            setError(error.message);
            setSnack("error", error.message);
        }
        setIsLoading(false);
    }, []);

    const handleAddYarnToCart = useCallback(async (userId, yarnInfo) => {
        setIsLoading(true);
        try {
            console.log("handleAddYarnToCart. B4 addYarnToCart to userid:", userId);

            const mycart = await addYarnToCart(yarnInfo, userId);
            setCart(mycart);
            return cart;
        } catch (error) {

            console.error("Error handleAddYarnToCart making request:", error.message); // Log error message
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
            setError(error.message);
            setSnack("error", error.message);
        }
        setIsLoading(false);
    }, []);

    const handleRmvYarnFromCart = useCallback(async (yarnId) => {
        setIsLoading(true);
        try {
            let mycart = await rmvYarnFromCart(yarnId, user._id);
            setCart(mycart);
            setIsLoading(false);
            return cart;
        } catch (error) {

            console.error("Error handleRmvYarnFromCart making request:", error.message); // Log error message
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
            setError(error.message);
            setSnack("error", error.message);
        }
        setIsLoading(false);
    }, []);
    const handleGetUserCart = useCallback(async () => {
        setIsLoading(true);
        try {
            let mycart = await getUserCart(user?._id);
            setCart(mycart);
            setIsLoading(false);
            return cart;
        } catch (error) {

            console.error("Error handleGetUserCart making request:", error.message); // Log error message
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
            setError(error.message);
            setSnack("error", error.message);
        }
        setIsLoading(false);
    }, []);

    return ({ cart, setCart, isLoading, error, handleLogin, handleLogout, handleRegister, handleAddYarnToCart, handleRmvYarnFromCart, handleGetUserCart });
}