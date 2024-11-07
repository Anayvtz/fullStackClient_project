import React, { useEffect } from 'react'
import useYarns from '../hooks/useYarns';
import YarnsFeedback from '../components/YarnsFeedback';
import PageHeader from '../../utils/pages/PageHeader';

export default function YarnsPage() {
    const { yarns, filterYarns, error, isLoading, getAllYarns, handleDelete } =
        useYarns();

    useEffect(() => {
        getAllYarns();
    }, []);

    return (
        <div>
            <PageHeader
                title="Yarns"
                subtitle="On this page you can find all the yarns in the shop"
            />
            <YarnsFeedback
                yarns={filterYarns}
                isLoading={isLoading}
                error={error}
                handleDelete={handleDelete}
            />
        </div>
    );
}
