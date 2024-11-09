import { useState } from "react";
import { useCurrentUser } from "../../user/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { useSnack } from "../../utils/providers/SnackbarProvider";
import { createOrder } from "../services/ordersApiService";

export default function useOrders() {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [order, setOrder] = useState();
    const { user, setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();
    const setSnack = useSnack();

    const apiUrl = "http://localhost:8185/orders";

    const handleMvCartToOrders = async (cart) => {
        setIsLoading(true);
        try {
            const order = await createOrder(user._id, cart);
            setOrder(order);
        } catch (error) {
            setSnack("error", error)
        }
        setIsLoading(false);
    }
    return {
        isLoading,
        error,
        order,
        handleMvCartToOrders
    }
}