import React from 'react'
import { useCurrentUser } from '../../../user/providers/UserProvider';
import { IconButton, Typography } from '@mui/material';
import useUsers from '../../../user/hooks/useUsers';

export default function Logout() {
    const { handleLogout } = useUsers();
    const { email } = useCurrentUser();
    return (
        <IconButton sx={{ p: 0, display: "inline-flex", flexDirection: "column", marginLeft: 2 }} onClick={() => { handleLogout(); }}>
            <Typography>Logout</Typography>
            <Typography>{email}</Typography>
        </IconButton>

    );
}
