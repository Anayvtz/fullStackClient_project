import React, { useEffect } from 'react'
import PageHeader from '../../utils/pages/PageHeader';
import useStocks from '../hooks/useStocks';
import StocksFeedback from '../components/StocksFeedback';

export default function StocksPage() {
    const { stocks, error, isLoading, getAllStocks } =
        useStocks();

    useEffect(() => {
        getAllStocks();
    }, []);

    return (
        <div>
            <PageHeader
                title="Stocks"
                subtitle="On this page you can find all yarns stocks"
            />
            <StocksFeedback
                stocks={stocks}
                isLoading={isLoading}
                error={error}
            />
        </div>
    );
}

