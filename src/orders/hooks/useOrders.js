import { useState } from "react";
import { useCurrentUser } from "../../user/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { useSnack } from "../../utils/providers/SnackbarProvider";
import { createOrder, getMyOrders } from "../services/ordersApiService";

export default function useOrders() {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [order, setOrder] = useState();
    const [orders, setOrders] = useState();
    const { user, setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();
    const setSnack = useSnack();

    const apiUrl = "http://localhost:8185/orders";

    const handleMvCartToOrders = async (cart) => {
        setIsLoading(true);
        console.log("handleMvCartToOrders. cart is:", cart);

        try {
            const order = await createOrder(user._id, cart);
            setOrder(order);
            setSnack("success", "your order has been created");
        } catch (error) {
            setSnack("error", error.message)
        }
        setIsLoading(false);
    }

    const handleGetMyOrders = async (userId) => {
        setIsLoading(true);
        try {
            const orders = await getMyOrders(userId);
            setOrders(orders);
            setSnack("success", "your order has been retrieved");
        } catch (error) {
            setSnack("error", error.message)
        }
        setIsLoading(false);
    }
    return {
        isLoading,
        error,
        order,
        orders,
        setOrders,
        handleMvCartToOrders,
        handleGetMyOrders,

    }
}