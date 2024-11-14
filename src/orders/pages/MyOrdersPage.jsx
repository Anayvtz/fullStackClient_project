import React, { useEffect } from 'react'
import PageHeader from '../../utils/pages/PageHeader';
import { useCurrentUser } from '../../user/providers/UserProvider';
import useOrders from '../hooks/useOrders';
import MyOrdersFeedback from '../components/MyOrdersFeedback';

export default function MyOrdersPage() {
    const { orders, setOrders, isLoading, error, handleGetMyOrders } = useOrders();
    const { user } = useCurrentUser();

    useEffect(() => {
        async function fetchOrders() {
            await handleGetMyOrders(user?._id);
        }
        fetchOrders();
    }, [user._id]);

    return (
        <div>
            <PageHeader
                title="MyOrders"
                subtitle="On this page you can find all the orders you made"
            />
            <MyOrdersFeedback
                orders={orders}
                isLoading={isLoading}
                error={error}
            />
        </div>
    );
}
