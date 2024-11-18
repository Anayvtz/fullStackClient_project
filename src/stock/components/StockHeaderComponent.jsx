import { CardMedia, Divider } from '@mui/material';
import React from 'react'

export default function StockHeaderComponent({ image, alt }) {
    return (
        <>
            <CardMedia sx={{ height: 140 }} image={image} alt={alt} />

            <Divider variant="middle" />
        </>
    );
}
