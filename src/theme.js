// src/theme.js

import { createTheme } from '@chakra-ui/react';

const theme = createTheme({
  colors: {
    primary: '#FF007F',
    secondary: '#00B0FF',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '12px',
        fontWeight: 'bold',
      },
      variants: {
        solid: {
          bg: 'primary',
          color: 'white',
        },
        outline: {
          border: '2px solid',
          borderColor: 'primary',
          color: 'primary',
        },
      },
    },
    // Weitere Anpassungen können hier hinzugefügt werden
  },
});

export default theme;
