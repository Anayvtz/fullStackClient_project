import { Typography } from "@mui/material";
import Error from "../../utils/others/Error";
import Spinner from "../../utils/others/Spinner";
import AllOrders from "./AllOrders";

export default function AllOrdersFeedback({
    isLoading,
    orders,
    error
}) {
    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;
    if (orders && orders.length === 0)
        return (
            <Typography m={2}>
                Oops... it seems there are no orders in the account
            </Typography>
        );

    if (orders) {
        console.log("AllOrdersFeedback. orders:", orders);

        return (
            <AllOrders
                ordersRtrvd={orders}
            />
        );
    }

    { console.log("AllOrdersFeedback. after returnAllOrders") }
    return null;
}
