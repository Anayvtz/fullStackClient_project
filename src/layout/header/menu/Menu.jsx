import React from 'react'
import MuiMenu from "@mui/material/Menu";
import { useCurrentUser } from '../../../user/providers/UserProvider';
import useUsers from '../../../user/hooks/useUsers';
import { Box } from '@mui/material';
import MenuLink from '../../../routes/MenuLink';
import ROUTES from '../../../routes/routesModel';

export default function Menu({ isOpen, anchorEl, onClose }) {
    const { user, email } = useCurrentUser();
    const { handleLogout } = useUsers();
    const logoutHeader = "logout " + email;

    const onLogout = () => {
        handleLogout();
        onClose();
    };

    return (
        <MuiMenu
            open={isOpen}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <Box>
                {!user && (
                    <>
                        <MenuLink
                            text="login"
                            navigateTo={ROUTES.LOGIN}
                            onClick={onClose}
                            styles={{ display: { xs: "block", md: "none" } }}
                        />
                        <MenuLink
                            text="signup"
                            navigateTo={ROUTES.SIGNUP}
                            onClick={onClose}
                            styles={{ display: { xs: "block", md: "none" } }}
                        />

                    </>
                )}
                {user?._id &&
                    <MenuLink
                        text={logoutHeader}
                        onClick={onLogout}
                        styles={{ display: { xs: "block", md: "none" } }}
                    />}

            </Box>
        </MuiMenu>
    );
}
