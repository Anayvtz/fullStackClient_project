import React from 'react'
import NavBarLink from '../../../routes/NavBarLink';
import ROUTES from '../../../routes/routesModel';
import { Typography } from '@mui/material';

export default function Logo() {
    return (
        <>
            <NavBarLink to={ROUTES.ROOT}>
                <Typography
                    variant="h4"
                    sx={{
                        marginRight: 2,
                        fontFamily: "fantasy",
                        display: { xs: "none", md: "inline-flex" },
                    }}
                >
                    Yarniee
                </Typography>
            </NavBarLink>
        </>
    );
}

