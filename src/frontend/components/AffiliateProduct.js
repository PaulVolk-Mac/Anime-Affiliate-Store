import React, { useState, useEffect } from 'react';

const AffiliateProduct = ({ affiliateLink }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/product-info?url=${encodeURIComponent(affiliateLink)}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, [affiliateLink]);

    if (!product) {
        return <p>Loading product...</p>;
    }

    return (
        <div className="product">
            <a href={product.url} target="_blank" rel="noopener noreferrer">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price ? `${product.price} €` : 'Price unavailable'}</p>
            </a>
        </div>
    );
};

export default AffiliateProduct;
