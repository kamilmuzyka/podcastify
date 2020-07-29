import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Element = styled.button`
    width: ${props => props.fluid === true ? '100%' : 'auto'};
    padding: 0.5em 2em;
    box-sizing: border-box;
    background-color: ${props => props.outline ? 'transparent' : 'var(--accent)'};
    border: ${props => props.outline ? '2px solid var(--accent)' : 'none'};
    border-radius: 100px;
    outline: none;
    font-family: inherit;
    font-size: var(--small);
    letter-spacing: 1px;
    color: var(--light);
    transition: background-color 0.1s ease-in-out,
                border-color 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.outline ? 'auto' : 'var(--attention)'};
        border-color: ${props => props.outline ? 'var(--attention)' : 'auto'};
    }
`;

function Button(props) {
    return <Element {...props}>{props.children}</Element>;
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    fluid: PropTypes.bool
}

export default Button;