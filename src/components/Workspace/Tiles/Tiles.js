import React, { Fragment } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 3em;

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
    font-size: 2em;
    margin-bottom: 1.5em;
    font-weight: 600;
    border-bottom: 1px solid #414141;
    padding-bottom: 1em;
`;

function Tiles(props) {
    return (
        <Wrapper>
            { (props.title) ?
                <Title>{props.title}</Title>
                :
                null
            }
            <Element>
                {props.children}
            </Element>
        </Wrapper>
    );
}

export default Tiles;