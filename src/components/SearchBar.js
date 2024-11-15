// src/components/SearchBar.js
import React from 'react';
import { Input, Button, Box, Flex } from '@chakra-ui/react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box mb={4}>
      <Flex>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Suche nach Produkten..."
          mr={2}
        />
        <Button onClick={handleSearch} colorScheme="primary">
          Suchen
        </Button>
      </Flex>
    </Box>
  );
}

export default SearchBar;
