import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../user/providers/UserProvider";
import useOrders from "../hooks/useOrders";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function MyOrders({ orders }) {
    const navigate = useNavigate();
    const [yarnItems, setyarnItems] = useState();
    const { user } = useCurrentUser();

    const { } = useOrders();

    const calcOrderTotalPrice = (order) => {
        const orderTotalPrice = order.yarns.reduce((total, item) => total + (item.price * item.quantity), 0);
        return orderTotalPrice;
    }


    return (
        <Box>
            <Box>
                {orders?.map(order => {

                    order.yarns?.map(item => {
                        return (
                            <Box>
                                <Card key={item._id} sx={{ display: 'flex', marginBottom: 2 }}>
                                    <CardMedia component="img"
                                        height="140"
                                        image={"http://localhost:8185/" + item.image.imageurl}
                                        alt={item.image.alt}
                                        sx={{ width: 140 }} />
                                    <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                        <Box sx={{ display: "flex", flexDirection: 'column', flex: 1 }}>

                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                                                <Typography variant="body2" color="textSecondary">
                                                    Quantity:{item.quantity}
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
                                {/* total price*/}

                                <Box mt={2} display="flex" justifyContent="flex-end">
                                    <Typography variant="h5">
                                        Total Price: ${calcOrderTotalPrice(order)}
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })
                })}

            </Box>
        </Box>

    );
}