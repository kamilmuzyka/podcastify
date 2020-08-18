import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/themes';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [currentTheme, updateCurrentTheme] = useState('dark');

    const toggleTheme = () => {
        currentTheme === 'dark' ? updateCurrentTheme('dark') : updateCurrentTheme('light');
    }

    return (
        <ThemeContext.Provider value={{
            toggleTheme
        }}>
            <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;