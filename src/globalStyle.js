import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    :root {
        // Colours
        --primary: #1E1E1E;
        --secondary: #131313;
        --dark: #0F0F0F;
        --light: #FFFFFF;
        --gray: #AAAAAA;
        --accent: #4BB043;
        --attention: #5AD54F;

        // Fonts
        --default: 16px;
        --small: 14px;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--primary);
        font-family: 'Montserrat', sans-serif;
        line-height: 125%;
        font-size: 16px;
        color: var(--light);
    }
`;

export default GlobalStyle;