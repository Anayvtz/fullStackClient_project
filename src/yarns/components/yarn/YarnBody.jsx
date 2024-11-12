import { CardContent, Typography } from "@mui/material";
import React from "react";

export default function YarnBody({ quantity }) {
    return (
        <>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <strong>QuantityInStock: </strong>
                    {quantity}
                </Typography>
            </CardContent>
        </>
    );
}
