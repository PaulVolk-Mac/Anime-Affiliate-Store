// src/pages/HomePage.js
import React, { useState } from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = (query) => {
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={6}>
        Anime Affiliate Store
      </Heading>
      <SearchBar onSearch={handleSearch} />
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default HomePage;
