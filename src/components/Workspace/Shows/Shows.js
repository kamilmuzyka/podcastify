import React from 'react';
import styled from 'styled-components';
import Show from './Show/Show';

const Element = styled.article`
    display grid;
    gap: 2em;

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
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/250"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/251"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/252"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/253"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/254"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/255"/>
        </Element>
    );
}

export default Shows;