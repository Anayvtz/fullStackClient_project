import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import { useCurrentUser } from '../providers/UserProvider';
import useUsers from '../hooks/useUsers';
import ROUTES from '../../routes/routesModel';

export default function Cart({ cart }) {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(cart);
    const { user } = useCurrentUser();
    const { handleGetUserCart, handleRmvYarnFromCart } = useUsers();
    const { handleMvCartToOrders } = useOrders();
    console.log("CartEntityComponent. userid:", user._id);

    const handleDelete = async (cartItemId, yarnId) => {
        await handleRmvYarnFromCart(yarnId);
        setCartItems((prevItems) => prevItems.filter(item => item._id != cartItemId))
    }

    const handlePayment = async () => {
        await handleMvCartToOrders(cartItems);
    }

    const handleContinueShopping = () => {
        navigate(ROUTES.YARNS);
    }

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <Box>
            <Box>

                {cartItems.map(item => {
                    console.log("cart item", item);
                    return (
                        <Card key={item._id} sx={{ display: 'flex', marginBottom: 2 }}>
                            <CardMedia component="img"
                                height="140"
                                image={item.image.url}
                                alt={item.image.alt}
                                sx={{ width: 140 }} />
                            <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <Box sx={{ display: "flex", flexDirection: 'column', flex: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                        <IconButton onClick={() => handleDelete(item._id, item.yarnId)} color="error">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
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

                    );

                })}
            </Box>

            {/* total price*/}
            <Box mt={2} display="flex" justifyContent="flex-end">
                <Typography variant="h5">
                    Total Price: ${totalPrice}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" onClick={async () => handlePayment()}>
                    Proceed to payment
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleContinueShopping}>
                    Continue shopping
                </Button>
            </Box>
        </Box>

    );
}

