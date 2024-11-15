import React, { useEffect } from 'react'
import useOrders from '../hooks/useOrders';
import { useCurrentUser } from '../../user/providers/UserProvider';
import PageHeader from '../../utils/pages/PageHeader';
import AllOrdersFeedback from '../components/AllOrdersFeedback';

export default function AllOrdersPage() {
    const { orders, setOrders, isLoading, error, handleGetAllOrders } = useOrders();
    const { user } = useCurrentUser();

    useEffect(() => {
        async function fetchMyOrders() {
            await handleGetAllOrders();
        }
        fetchMyOrders();
        console.log("after handleGetAllOrders. orders:", orders);

    }, []);

    return (
        <div>
            <PageHeader
                title="AllOrders"
                subtitle="On this page you can find all the orders of all users"
            />
            <AllOrdersFeedback
                orders={orders}
                isLoading={isLoading}
                error={error}
            />
        </div>
    );
}
