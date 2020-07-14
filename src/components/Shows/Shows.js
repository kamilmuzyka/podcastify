import React from 'react';
import styled from 'styled-components';
import Show from './Show/Show';

const Element = styled.article`
    display grid;
    gap: 2em;
    flex: 1;
    padding: 2em;
    max-height: calc(100vh - 83px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        background: transparent;
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--accent);
    }

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

function Shows(props) {
    return (
        <Element>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/300"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/301"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/302"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/303"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/304"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/305"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/306"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/307"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/308"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/309"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/310"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/311"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/312"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/313"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/314"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/315"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/316"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/317"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/318"/>
            <Show title="Lorem Ipsum" description="Lorem ipsum dolor sit amet" image="https://picsum.photos/319"/>
        </Element>
    );
}

export default Shows;