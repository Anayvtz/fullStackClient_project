import React from 'react'
import { useCurrentUser } from '../providers/UserProvider';
import { Container } from '@mui/material';
import CartEntityComponent from './cart-entity/CartEntityComponent';

export default function Cart({ cart }) {
    const user = useCurrentUser();

    return (
        <Container sx={{ display: "flex", flexWrap: "wrap" }}>
            {cart.map((cartEntity) => (
                <CartEntityComponent
                    cartEntity={cartEntity}
                    key={cartEntity._id}
                    cart={cart}
                />
            ))}

        </Container>
    );
}
