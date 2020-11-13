import React from 'react';
import styled from 'styled-components';

const Element = styled.h2`
    margin-bottom: 1em;
    padding-bottom: 0.5em;
    font-size: 2em;
    font-weight: 700;

    &:not(:first-child) {
        margin-top: 1em;
    }
`;

const Title = ({ children, ...rest }) => {
    return (
        <Element {...rest}>
            {children}
        </Element>
    );
}

export default Title;