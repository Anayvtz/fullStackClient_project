import React from 'react'
import { useCurrentUser } from '../../user/providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import { Box, CardActions, IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import ROUTES from '../../routes/routesModel';
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function StockActionBar({
    stockId,

}) {
    const { user } = useCurrentUser();
    const navigate = useNavigate();

    return (
        <CardActions sx={{ justifyContent: "space-between" }}>
            {user?.isAdmin ? (
                <Box>

                    <IconButton onClick={() => navigate(`${ROUTES.EDIT_STOCK}/${stockId}`)}>
                        <ModeEditIcon />
                    </IconButton>
                </Box>) : null}

        </CardActions >
    );
}
