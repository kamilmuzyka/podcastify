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

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
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
        font-size: 16px;
        color: var(--light);
    }

    p {
        line-height: 125%;
    }
`;

export default GlobalStyle;