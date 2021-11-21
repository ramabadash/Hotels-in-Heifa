import React from 'react';

export const themes = {
  dark: {
    color: 'whitesmoke',
    backgroundColor: '#222',
  },
  light: {
    color: '#222',
    backgroundColor: 'whitesmoke',
  },
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
