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

const Title = styled.h2`
    margin-bottom: 1em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #414141;
    font-size: 2em;
    font-weight: 700;
`;

function Tiles({ title, children }) {
    return (
        <Container>
            { title ?
                <Title>{title}</Title>
                :
                null
            }
            <Element>
                { children }
            </Element>
        </Container>
    );
}

export default Tiles;