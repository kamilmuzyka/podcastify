const typography = {
    family: 'Montserrat, sans-serif',
    default: '16px',
    small: '14px'
}

const darkTheme = {
    typography,
    colors: {
        primary: '#1E1E1E',
        secondary: '#131313',
        tertiary: '#0F0F0F',
        subtle: '#303030',
        positive: '#FFFFFF',
        negative: '#000000',
        specific: '#AAAAAA',
        attention: '#5AD54F',
        accent: '#4BB043'
    }
}

const lightTheme = {
    typography,
    colors: {
        primary: '#E1E1E1',
        secondary: '#ECECEC',
        tertiary: '#F0F0F0',
        subtle: '#CCCCCC',
        positive: '#000000',
        negative: '#FFFFFF',
        specific: '#555555',
        attention: '#5AD54F',
        accent: '#4BB043'
    }
}

export {
    darkTheme,
    lightTheme
}