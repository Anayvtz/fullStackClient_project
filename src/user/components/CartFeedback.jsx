import React from 'react'
import Spinner from '../../utils/others/Spinner';
import Error from '../../utils/others/Error';
import { Typography } from '@mui/material';
import Cart from './Cart';

export default function CartFeedback({
    isLoading,
    cart,
    error
}) {
    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;
    if (cart && cart.length === 0)
        return (
            <Typography m={2}>
                Oops... it seems there are no yarns in the cart
            </Typography>
        );

    if (cart)
        return (
            <Cart
                cart={cart}
            />
        );

    return null;
}
