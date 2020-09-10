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
        positive: '#FFFFFF',
        negative: '#000000',
        specific: '#AAAAAA',
        attention: '#5AD54F',
        accent: '#4BB043'
    }
}

const lightTheme = {
    typography,
    colors: {}
}

export {
    darkTheme,
    lightTheme
}