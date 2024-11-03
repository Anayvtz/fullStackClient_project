import React from 'react'
import { MenuProvider } from './menu/MenuProvider';
import { AppBar, Toolbar } from '@mui/material';
import LeftNavBar from './left-navigation/LeftNavBar';
import RightNavBar from './right-navigation/RightNavBar';

export default function Header() {
    return (
        <MenuProvider>
            <AppBar position="sticky" color="primary" elevation={10}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <LeftNavBar />
                    <RightNavBar />
                </Toolbar>
            </AppBar>
        </MenuProvider>


    );
}
