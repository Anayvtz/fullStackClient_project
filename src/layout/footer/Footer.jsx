import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import InfoIcon from "@mui/icons-material/Info";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <Paper
            elevation={3}
            sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
        >
            <BottomNavigation showLabels>
                <BottomNavigationAction
                    label="About"
                    icon={<InfoIcon />}
                    onClick={() => navigate(ROUTES.ABOUT)}
                />

            </BottomNavigation>
        </Paper>
    );
}