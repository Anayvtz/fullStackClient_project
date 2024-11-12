import React, { useState, useEffect } from 'react';

const apiUrl = "http://localhost:8185";

const FetchImage = ({ imageFullName }) => {
    const [imagePath, setImagePath] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(`${apiUrl}/${imageFullName}`);
                const data = await response.json();

                if (data && data.imageurl) {
                    setImagePath(data.imageurl);  // Store the relative image URL
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, [imageId]);

    return imagePath ? (
        <div>
            <img src={imagePath} alt="Fetched Image" />
        </div>
    ) : (
        <div>Loading...</div>
    );
};

export default FetchImage;
