import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../user/providers/UserProvider";
import { Box, Card, CardContent, CardMedia, Divider, Typography, TextField, Button } from "@mui/material";
import useOrders from "../hooks/useOrders";

export default function AllOrders({ ordersRtrvd }) {
    const navigate = useNavigate();
    const { user } = useCurrentUser();
    const [searchEmail, setSearchEmail] = useState("");
    const { orders, setOrders, handleGetOrdersByEmail } = useOrders();
    const [filteredOrders, setFilteredOrders] = useState(ordersRtrvd);

    console.log("ALL ORDERS. filteredOrders: ", filteredOrders);
    console.log("ALL ORDERS. ordersRtrvd: ", ordersRtrvd);
    console.log("ALL ORDERS. orders: ", orders);

    // This function will be triggered when the user enters an email and clicks search
    const handleSearch = async () => {
        if (searchEmail) {
            // Call the fetchOrdersByEmail function passed as a prop with the entered email
            await handleGetOrdersByEmail(searchEmail);
            // setFilteredOrders(orders);
            console.log("after handleGetOrdersByEmail. filteredOrders:", filteredOrders);
            console.log("after handleGetOrdersByEmail. orders:", orders)
        }
    };

    // Calculate the total price for each order
    const calcOrderTotalPrice = (order) => {
        return order.yarns.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // UseEffect to update filtered orders if `orders` prop changes
    useEffect(() => {
        setFilteredOrders(prev => orders ?? prev);
        console.log("after useEffect. filteredOrders:", filteredOrders);
    }, [orders]);

    return (
        <Box>
            {/* Search Bar */}
            <Box sx={{ marginBottom: 3, display: 'flex', alignItems: 'center' }}>
                <TextField
                    label="Search by Customer Email"
                    variant="outlined"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                    fullWidth
                    sx={{ marginRight: 2 }}
                />
                <Button variant="contained" onClick={() => handleSearch()}>Search</Button>
            </Box>

            {/* Display Orders */}
            {filteredOrders?.length > 0 ? (
                filteredOrders.map((order) => {
                    return (
                        <Box key={order._id} sx={{ marginBottom: 4 }}>
                            <Divider sx={{ marginBottom: 2 }} />
                            {/* Order Headline */}
                            <Box sx={{ marginBottom: 2 }}>
                                <Typography variant="h6" color="primary">
                                    Order ID: {order._id}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Customer Email: {order.customerEmail}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Customer Address: {`${order.customerAddress.city}, ${order.customerAddress.state}, ${order.customerAddress.country} , ${order.customerAddress.street} ${order.customerAddress.houseNumber}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Created At: {new Date(order.createdAt).toLocaleString()}
                                </Typography>
                            </Box>

                            {/* Render yarn items */}
                            {order.yarns?.map((item) => {
                                return (
                                    <Box key={item._id}>
                                        <Card sx={{ display: 'flex', marginBottom: 2 }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={"http://localhost:8185/" + item.image.imageurl}
                                                alt={item.image.alt}
                                                sx={{ width: 140 }}
                                            />
                                            <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                                <Box sx={{ display: "flex", flexDirection: 'column', flex: 1 }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                                                        <Typography variant="body2" color="textSecondary">
                                                            Quantity: {item.quantity}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary">
                                                            Price: ${item.price} each
                                                        </Typography>
                                                        <Typography variant="h6" color="primary">
                                                            Total: ${item.price * item.quantity}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                );
                            })}

                            {/* Render the total price for the entire order after all yarn items */}
                            <Box mt={2} display="flex" justifyContent="flex-end">
                                <Typography variant="h5">
                                    Total Price for Order: ${calcOrderTotalPrice(order)}
                                </Typography>
                            </Box>
                        </Box>
                    );
                })
            ) : (
                <Typography variant="body1" color="textSecondary">No orders found</Typography>
            )}
        </Box>
    );
}
