import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../user/providers/UserProvider";
import useOrders from "../hooks/useOrders";
import { Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";

export default function MyOrders({ orders }) {
    const navigate = useNavigate();
    const { user } = useCurrentUser();

    console.log("AllOrders. orders:", orders.data);

    const calcOrderTotalPrice = (order) => {
        // Calculate the total price for the entire order by summing the individual item prices
        return order.yarns.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    return (
        <Box>

            {orders?.data.map((order) => {
                console.log("AllOrders. currentOrder:", order);

                // Render each order
                return (
                    <Box key={order._id} sx={{ marginBottom: 4 }}>
                        <Divider />
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
                            console.log("AllOrders. yarn item:", item);

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
            })}

        </Box>
    );
}
