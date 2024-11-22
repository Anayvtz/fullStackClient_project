import React, { useEffect } from 'react'
import { useCurrentUser } from '../../../user/providers/UserProvider';
import { IconButton, Typography } from '@mui/material';
import useUsers from '../../../user/hooks/useUsers';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';

export default function Logout() {
    const { handleLogout } = useUsers();
    const { email, setEmail } = useCurrentUser();
    const navigate = useNavigate();

    return (
        <IconButton sx={{ p: 0, display: "inline-flex", flexDirection: "column", marginLeft: 2 }} onClick={() => { handleLogout(); navigate(ROUTES.ROOT); }}>
            <Typography>Logout</Typography>
            <Typography>{email}</Typography>
        </IconButton>

    );
}
