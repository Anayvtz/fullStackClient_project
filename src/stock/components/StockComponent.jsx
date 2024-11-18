import React from 'react'
import { useNavigate } from 'react-router-dom';
import StockHeaderComponent from './StockHeaderComponent';
import StockBody from './StockBody';
import { Card } from '@mui/material';
import StockActionBar from './StockActionBar';

export default function StockComponent({
    stock,

}) {
    const navigate = useNavigate();
    return (
        <Card sx={{ width: 250, m: 2 }}>

            <StockHeaderComponent
                image={"http://localhost:8185" + stock.image.imageurl}
                alt={stock.image.alt}
            />

            <StockBody
                quantity={stock.quantity}
            />

            <StockActionBar
                stockId={stock._id}

            />
        </Card>
    );
}

