import { Box } from '@mui/material';
import React from 'react'
import NavBarItem from '../../../routes/NavBarItem';
import ROUTES from '../../../routes/routesModel';

export default function NotLogged() {
    return (
        <Box>
            <NavBarItem label="Signup" to={ROUTES.SIGNUP} />
            <NavBarItem label="Login" to={ROUTES.LOGIN} />
        </Box>
    );
}
