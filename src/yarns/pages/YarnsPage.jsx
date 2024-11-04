import React from 'react'

export default function YarnsPage() {
    const { cards, filterCards, error, isLoading, getAllCards, handleDelete } =
        useCards();

    useEffect(() => {
        getAllCards();
    }, []);

    return (
        <div>
            <PageHeader
                title="Cards"
                subtitle="On this page you can find all bussines cards from all categories"
            />
            <CardsFeedback
                cards={filterCards}
                isLoading={isLoading}
                error={error}
                handleDelete={handleDelete}
                handleLike={handleLike}
            />
        </div>
    );
}
