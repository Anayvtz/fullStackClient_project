import React, { useEffect, useState } from 'react';
import useYarns from '../hooks/useYarns';
import YarnsFeedback from '../components/YarnsFeedback';
import PageHeader from '../../utils/pages/PageHeader';

export default function YarnsPage() {
    const { yarns, filterYarns, error, isLoading, getAllYarns, handleGetYarnBySize, handleDelete } = useYarns();

    const [selectedSize, setSelectedSize] = useState(""); // Track the selected size

    // Fetch all yarns when the page loads
    useEffect(() => {
        getAllYarns();
    }, []);

    // Handle size change in dropdown
    const handleSizeChange = (event) => {
        const size = event.target.value;
        setSelectedSize(size);
        if (size) {
            handleGetYarnBySize(size); // Fetch yarns by selected size
        } else {
            getAllYarns(); // Fetch all yarns if no size is selected
        }
    };

    return (
        <div>
            <PageHeader
                title="Yarns"
                subtitle="On this page you can find all the yarns in the shop"
            />
            {/* Yarn Size Filter Dropdown */}
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="yarn-size">Filter by Yarn Size: </label>
                <select
                    id="yarn-size"
                    value={selectedSize}
                    onChange={handleSizeChange}
                    style={{ padding: '10px', marginLeft: '10px' }}
                >
                    <option value="">All Sizes</option>
                    {/* Numeric sizes from 0 to 7 */}
                    {[...Array(8).keys()].map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>

            {/* Display Yarn Feedback */}
            <YarnsFeedback
                yarns={filterYarns}
                isLoading={isLoading}
                error={error}
                handleDelete={handleDelete}
            />
        </div>
    );
}
