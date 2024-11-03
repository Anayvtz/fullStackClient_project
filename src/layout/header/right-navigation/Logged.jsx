import { Avatar, IconButton } from '@mui/material';
import React from 'react'

export default function Logged() {
    return (

        <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
            <Avatar alt="avatar" src="/images/avatar.png" />
        </IconButton>

    );
}
