import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function YarnAmountControl(handleAddToCart, yarnId, yarnImage) {
    const [amount, setAmount] = useState(0);

    const inc = () => {
        setAmount(prev => prev + 1);
    }
    const dec = () => {
        if (amount > 0) {
            setAmount(prev => prev - 1);
        }

    }
    const yarnInfo = useMemo(() => {
        return {
            yarnId: yarnId,
            image: yarnImage,
            quantity: amount
        };
    }, [yarnId, yarnImage, amount]);



    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #000',
            padding: '10px',
            borderRadius: '5px',
            width: '100px'
        }}>
            <Button sx={{ minWidth: '40px' }} onClick={inc} variant="outlined" size="small">
                <ArrowUpward />
            </Button>
            <Typography variant="h6" sx={{ my: 1 }}>
                {amount}
            </Typography>
            <Button sx={{ minWidth: '40px' }} onClick={dec} variant="outlined" size="small">
                <ArrowDownward />
            </Button>
            <Button sx={{ marginTop: 2 }} onClick={() => handleAddToCart(yarnInfo)} variant="contained" color="primary" disabled={amount <= 0}>
                Add to Cart
            </Button>
        </Box>
    )
}
