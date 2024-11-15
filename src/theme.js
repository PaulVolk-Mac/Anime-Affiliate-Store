// src/theme.js
import { extendTheme } from '@chakra-ui/react';  // Importiere 'extendTheme' direkt oder von '@chakra-ui/theme-tools'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#E5E5E5',
      200: '#C4C4C4',
      300: '#A2A2A2',
      400: '#818181',
      500: '#5F5F5F',
    },
    primary: {
      500: '#FF6F61', // Deine bevorzugte Farbe für Buttons und Links
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        lg: {
          height: '48px',
          fontSize: 'lg',
        },
      },
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'white',
          _hover: {
            bg: 'primary.400',
          },
        },
      },
    },
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
});

export default theme;
