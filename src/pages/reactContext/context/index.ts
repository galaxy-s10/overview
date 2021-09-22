import { createContext } from 'react';

export const themes = {
  current: 'light',
  light: {
    foreground: 'white',
    background: '#448ef7',
  },
  dark: {
    foreground: 'white',
    background: 'gray',
  },
  setCurrentTheme(v) {
    this.current = v;
  },
};

export const ThemeContext = createContext(themes);
