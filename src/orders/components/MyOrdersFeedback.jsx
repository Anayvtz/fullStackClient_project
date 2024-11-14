import Error from "../../utils/others/Error";
import Spinner from "../../utils/others/Spinner";
import MyOrders from "./MyOrders";

export default function MyOrdersFeedback({
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

    if (orders)
        return (
            <MyOrders
                orders={orders}
            />
        );

    return null;
}
