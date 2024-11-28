import React from 'react';
import AffiliateProduct from './AffiliateProduct';

const ProductGrid = () => {
    const affiliateLinks = [
        'https://www.amazon.de/dp/B08N5WRWNW?tag=deintag-21',
        'https://www.amazon.de/dp/B09XYZ1234?tag=deintag-21',
    ];

    return (
        <div className="product-grid">
            {affiliateLinks.map((link, index) => (
                <AffiliateProduct key={index} affiliateLink={link} />
            ))}
        </div>
    );
};

export default ProductGrid;
