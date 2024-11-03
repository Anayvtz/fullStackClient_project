import React from 'react'
import { useCurrentUser } from '../../../user/providers/UserProvider';
import { useTheme } from '../../../utils/providers/CustomThemeProvider';
import { Box, IconButton } from '@mui/material';
import SearchBar from './SearchBar';
import Logged from './Logged';
import NotLogged from './NotLogged';
import Logout from './Logout';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoreButton from './MoreButton';

export default function RightNavBar() {
    const { user } = useCurrentUser();
    const { isDark, toggleDarkMode } = useTheme();
    return (
        <>
            <Box
                sx={{
                    display: { xs: "none", md: "inline-flex" },
                    alignItems: "center",
                }}
            >
                <SearchBar />
                <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
                    {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>

                {user ? <Logged /> : <NotLogged />}
                {user ? <Logout /> : null}
            </Box>
            <MoreButton />
        </>
    );
}

