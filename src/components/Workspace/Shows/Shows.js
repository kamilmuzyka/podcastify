import React from 'react';
import styled from 'styled-components';
import Show from './Show/Show';

const Element = styled.ul`
    display grid;
    gap: 2em;
    list-style-type: none;
    grid-auto-rows: minmax(100px, 1fr);

    @media (min-width: 500px) {
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

function Shows(props) {
    return (
        <Element>
            {props.children}
        </Element>
    );
}

export default Shows;