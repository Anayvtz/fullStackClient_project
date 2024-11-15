import { useState } from "react";
import { useCurrentUser } from "../../user/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { useSnack } from "../../utils/providers/SnackbarProvider";
import { createOrder, getAllOrders, getAllOrdersByEmail, getMyOrders } from "../services/ordersApiService";

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
    const handleGetAllOrders = async () => {
        setIsLoading(true);
        try {
            const allorders = await getAllOrders();
            console.log("in handleGetAllOrders. orders.data:", allorders.data);
            setOrders(allorders.data);
            console.log("in handleGetAllOrders. orders:", orders);
            setSnack("success", "all orders has been retrieved");
        } catch (error) {
            setSnack("error", error.message)
        }
        setIsLoading(false);
    }

    const handleGetOrdersByEmail = async (userEmail, setFilteredOrders) => {
        setIsLoading(true);
        try {
            const orders = await getAllOrdersByEmail(userEmail);
            setOrders(orders.data);
            setFilteredOrders(orders.data);
            console.log("after getAllOrdersByEmail:orders:", orders.data);

            setSnack("success", `all orders of user ${userEmail} has been retrieved`);
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
        handleGetAllOrders,
        handleGetOrdersByEmail
    }
}