import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        // Colours
        --primary: #1E1E1E;
        --secondary: #131313;
        --dark: #0F0F0F;
        --light: #FFFFFF;
        --gray: #AAAAAA;
        --accent: #4BB043;
        --attention: #5AD54F;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        min-height: 100vh;
        position: relative;
        background-color: var(--primary);
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        color: var(--light);
    }
`;

export default GlobalStyle;