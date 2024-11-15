// src/components/ProductCard.js
import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

function ProductCard({ product }) {
  return (
    <Box p={4} boxShadow="md" borderRadius="lg" borderWidth="1px">
      <Image src={product.image} alt={product.name} />
      <Text mt={2} fontWeight="bold" fontSize="lg">
        {product.name}
      </Text>
      <Text mt={2}>{product.description}</Text>
      <Text mt={2} fontWeight="bold">
        {product.price}€
      </Text>
      <Button mt={4} colorScheme="primary">
        Zum Produkt
      </Button>
    </Box>
  );
}

export default ProductCard;
