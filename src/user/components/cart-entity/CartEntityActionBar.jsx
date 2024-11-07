import React from 'react';
import useUsers from '../../hooks/useUsers';
import { Box, CardActions, IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import { useCurrentUser } from '../../providers/UserProvider';

export default function CartEntityActionBar({
    yarnId
}) {
    const { user } = useCurrentUser();
    const { handleGetUserCart, handleRmvYarnFromCart } = useUsers();


    return (
        <CardActions sx={{ justifyContent: "space-between" }}>

            {!user?.user?.isAdmin ? (
                <Box>
                    <IconButton onClick={async () => {
                        let mycart = await handleRmvYarnFromCart(yarnId);
                        await handleGetUserCart();
                    }}>
                        <DeleteIcon />
                    </IconButton>

                </Box>) : null}
        </CardActions >
    );
}