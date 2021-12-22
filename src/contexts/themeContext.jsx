import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();
export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error(
      'you are not into Provider of the contexts, make sure the component wrapped in the Provider',
    );
  }

  return ctx;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark(!isDark);
  }, [isDark]);

  const value = useMemo(() => ({
    toggleTheme,
  }));

  return (
    <ThemeContext.Provider value={value}>
      <div className={`theme-${isDark ? 'light' : 'dark'}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
