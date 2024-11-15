import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';

const ProDetPage = () => {
  const { id } = useParams();

  return (
    <Box padding={5}>
      <Image src={`https://example.com/images/${id}.jpg`} alt="Product Image" />
      <Heading as="h2" size="lg" marginTop={5}>
        Produktname
      </Heading>
      <Text marginTop={3}>Beschreibung des Produkts...</Text>
      <Button colorScheme="pink" marginTop={5}>Zum Produkt</Button>
    </Box>
  );
};

export default ProDetPage;
