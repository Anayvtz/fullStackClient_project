import React from 'react'
import { useCurrentUser } from '../../user/providers/UserProvider';
import { Container } from '@mui/material';
import StockComponent from './StockComponent';


export default function Stocks({ stocks }) {
    const { user } = useCurrentUser();

    return (
        <Container sx={{ display: "flex", flexWrap: "wrap" }}>
            {stocks.map((stock) => (
                <StockComponent
                    stock={stock}
                    key={stock._id}

                />
            ))}

        </Container>
    );
}
