import React from 'react';
import styled from 'styled-components';
import Show from './Show/Show';

const Element = styled.ul`
    display grid;
    gap: 2em;
    list-style-type: none;

    @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3em;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1600px) {
        grid-template-columns: repeat(6, 1fr);
    }
`;

function Shows(props) {
    return (
        <Element>
            {props.children}
        </Element>
    );
}

export default Shows;