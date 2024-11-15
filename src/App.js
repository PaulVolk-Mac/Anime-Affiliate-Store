// src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme'; // Importiere das benutzerdefinierte Thema
import HomePage from './pages/HomePage';

function App() {
  return (
    <ChakraProvider theme={theme}> {/* ChakraProvider mit dem benutzerdefinierten Thema */}
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
