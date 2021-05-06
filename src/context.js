import React, { createContext, useState } from 'react';

export const FoodContext = createContext(); // izvoz za komponente

const FoodProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const LightTheme = {
    pageBackground: '#f5f5f5',
    linkColor: '#fff',
    divColor: '#e22255',
    toggleColor: '#e22255',
  };

  const DarkTheme = {
    pageBackground: '#333',
    linkColor: '#f5f5f5',
    divColor: '#bc3e5f',
    toggleColor: '#bc3e5f',
  };

  const themes = {
    light: LightTheme,
    dark: DarkTheme,
  };

  return (
    <FoodContext.Provider
      value={{ LightTheme, DarkTheme, themes, theme, setTheme }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export { FoodProvider }; // izvoz za index.js
