import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const themes = {
  dark: {
    backgroundColor: '#1E1C37',
    mainBackground: '#1a1833',
    burgerBackground: '#25233D',
    burgerMenuLine: 'rgb(39, 70, 115)',
    color: '#F0F2F4',
    loginBtn: 'transparent',
    toggleBtn: '#FFFFFF',
    tableBackground: '#25233D',
    tableBorder: '5px solid #2D3B59',
    tableLine: '#274673CC',
    tableHeaders: '#FFFFFF',
    pagination: '#FFFFFF',
    homeBtn: '#F0F2F4',
    homeBtnColor: '#2D3B59',
    formBtn: '#1E1C37E5',
  },
  light: {
    backgroundColor: '#274673',
    mainBackground: '#ecf0f9',
    burgerBackground: '#FFFFFF',
    burgerMenuLine: 'rgb(217, 223, 248)',
    color: '#2D3B59',
    loginBtn: '#FFFFFF',
    toggleBtn: '#274673',
    tableBackground: '#FFFFFF',
    tableBorder: '5px solid #D9DFF8',
    tableLine: '#D9DFF8',
    tableHeaders: '#536DFB',
    pagination: '#536DFB',
    homeBtn: '#274673',
    homeBtnColor: '#F0F2F4',
    formBtn: '#274673E5',
  },
};

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const isDark = localStorage.getItem('isDark') === 'true';
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
