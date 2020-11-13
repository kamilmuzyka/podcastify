import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 2em;

    &:first-child {
        margin-top: 0;
    }
`;

const Element = styled.ul`
    list-style-type: none;

    @media (min-width: 500px) {
        display grid;
        gap: 2em;
        grid-auto-rows: minmax(100px, 1fr);
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        gap: 3em;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, minmax(100px, 1fr));
    }

    @media (min-width: 1600px) {
        grid-template-columns: repeat(6, minmax(100px, 1fr));
    }
`;

function Tiles({ children }) {
    return (
        <Container>
            <Element>
                { children }
            </Element>
        </Container>
    );
}

export default Tiles;