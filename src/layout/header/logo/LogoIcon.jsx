import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import ROUTES from '../../../routes/routesModel';
import NavBarLink from '../../../routes/NavBarLink';

export default function LogoIcon() {
    return (
        <>
            <NavBarLink to={ROUTES.ROOT}>
                <IconButton>
                    <Avatar src="/images/logo.jpg" alt="Yarn shop icon" />
                </IconButton>
            </NavBarLink>
        </>
    );
}
