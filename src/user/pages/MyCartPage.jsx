import React, { useEffect } from 'react'
import useUsers from '../hooks/useUsers';
import PageHeader from '../../utils/pages/PageHeader';
import CartFeedback from '../components/CartFeedback';

export default function MyCartPage() {
    const { cart, setCart, isLoading, error, handleGetUserCart } = useUsers();

    useEffect(() => {
        handleGetUserCart();
    }, []);

    return (
        <div>
            <PageHeader
                title="Cart"
                subtitle="On this page you can find all the yarns you added to your cart"
            />
            <CartFeedback
                cart={cart}
                isLoading={isLoading}
                error={error}
            />
        </div>
    );
}

