import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';
import { THEMES } from '../constants/themes';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [currentTheme, updateCurrentTheme] = useState(THEMES.default);

    const getPreferredTheme = () => {
        return localStorage.getItem('theme');
    }

    const setPreferredTheme = (theme) => {
        localStorage.setItem('theme', theme);
    }

    const toggleTheme = () => {
        if (currentTheme === THEMES.dark) {
            updateCurrentTheme(THEMES.light);
            setPreferredTheme(THEMES.light);
            return;
        }
        updateCurrentTheme(THEMES.dark);
        setPreferredTheme(THEMES.dark);
    }

    useEffect(() => {
        const preferredTheme = getPreferredTheme();
        if (preferredTheme) {
            updateCurrentTheme(preferredTheme);
            return;
        }
    }, []);

    return (
        <ThemeContext.Provider value={{
            currentTheme,
            toggleTheme
        }}>
            <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;