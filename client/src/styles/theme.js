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
        accent: '#4BB043',
        touch: '#414141'
    }
}

const lightTheme = {
    typography,
    colors: {
        primary: '#FFFFFF',
        secondary: '#F7F8F9',
        tertiary: '#EBECEF',
        subtle: '#CCCCCC',
        positive: '#000000',
        negative: '#FFFFFF',
        specific: '#555555',
        attention: '#232323',
        accent: '#000000',
        touch: '#BABABA'
    }
}

export {
    darkTheme,
    lightTheme
}