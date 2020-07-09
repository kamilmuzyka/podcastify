import React from 'react';
import styled from 'styled-components';
import Show from './Show/Show';

const Element = styled.article`
    display grid;
    gap: 2em;
    padding: 2em;

    @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3em;
        padding: 3em;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1600px) {
        grid-template-columns: repeat(6, 1fr);
    }
`;

function ShowList(props) {
    return (
        <Element>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet"/>
        </Element>
    );
}

export default ShowList;