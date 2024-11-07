import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../../providers/UserProvider';
import { Card, CardActionArea } from '@mui/material';
import ROUTES from '../../../routes/routesModel';
import CartEntityHeaderComponent from './CartEntityHeaderComponent';
import CartEntityBody from './CartEntityBody';
import CartEntityActionBar from './CartEntityActionBar';

export default function CartEntityComponent({
    cartEntity, key, cart
}) {
    const navigate = useNavigate();
    const { user } = useCurrentUser();
    console.log("CartEntityComponent. userid:", user._id);

    return (
        <Card sx={{ width: 250, m: 2 }}>
            <CardActionArea
                onClick={() => navigate(ROUTES.YARN_INFO + "/" + cartEntity.yarnId)}
            >
                <CartEntityHeaderComponent
                    image={cartEntity.image.url}
                    alt={cartEntity.image.alt}

                />
                <CartEntityBody quantity={cartEntity.quantity} />

            </CardActionArea>
            <CartEntityActionBar
                yarnId={cartEntity.yarnId}
                cart={cart}
            />
        </Card>
    );
}