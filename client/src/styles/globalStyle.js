import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
        background-color: ${({ theme }) => theme.colors.primary};
        font-family: ${({ theme }) => theme.typography.family};
        font-size: ${({ theme }) => theme.typography.default};
        color: ${({ theme }) => theme.colors.positive};
        line-height: 1.5;
    }

    h1, h2, h3, h4, p {
        max-width: 100%;

        @media (min-width: 500px) {
            max-width: calc(1em * 50);
        }
    }
`;

export default GlobalStyle;