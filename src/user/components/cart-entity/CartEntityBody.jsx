import { CardContent, Typography } from "@mui/material";
import React from "react";

export default function CartEntityBody({ quantity }) {
    return (
        <>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <strong>Quantity: </strong>
                    {quantity}
                </Typography>

            </CardContent>
        </>
    );
}