import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react'
import useUsers from '../../../user/hooks/useUsers';
import { useSnack } from '../../../utils/providers/SnackbarProvider';

export default function YarnAmountControl({ userId, yarnId, yarnImage, yarnPrice }) {
    const [amount, setAmount] = useState(0);
    const { handleAddYarnToCart } = useUsers();
    const setSnack = useSnack();


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
            quantity: amount,
            price: yarnPrice
        };
    }, [yarnId, yarnImage, amount]);

    const addYarnToCart = async (userId, yarnInfo) => {
        try {
            const cart = await handleAddYarnToCart(userId, yarnInfo);
            if (cart) {
                setSnack("success", "Yarn was added to cart")
            }
        } catch (error) {
            setSnack("error", "failed to ass yarn to cart");
        }

    }


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #000',
            padding: '10px',
            borderRadius: '5px',
            width: '200px'
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
            {console.log("YarnsAmountControl: userId:", !!userId)}
            {!!userId ? (
                <Button sx={{ marginLeft: 2 }} onClick={async () => await addYarnToCart(userId, yarnInfo)} variant="contained" color="primary" disabled={amount <= 0}>
                    Add
                </Button>) : null}
        </Box>
    )
}
