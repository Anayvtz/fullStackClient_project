import { Typography } from "@mui/material";
import Error from "../../utils/others/Error";
import Spinner from "../../utils/others/Spinner";
import Stocks from "./Stocks";

export default function StocksFeedback({
    isLoading,
    stocks,
    error,

}) {
    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;
    if (stocks && stocks.length === 0)
        return (
            <Typography m={2}>
                Oops... it seems there are no stocks in the shop
            </Typography>
        );

    if (stocks)
        return (
            <Stocks
                stocks={stocks}

            />
        );

    return null;
}