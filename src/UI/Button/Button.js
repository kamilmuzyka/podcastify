import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Element = styled.button`
    width: ${({ fluid }) => fluid === true ? '100%' : 'auto'};
    padding: 0.5em 2em;
    box-sizing: border-box;
    background-color: ${({ outline }) => outline ? 'transparent' : 'var(--accent)'};
    border: ${({ outline }) => outline ? '2px solid var(--accent)' : 'none'};
    border-radius: 100px;
    outline: none;
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.small};
    letter-spacing: 1px;
    color: var(--light);
    transition: background-color 0.1s ease-in-out,
                border-color 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${({ outline }) => outline ? 'auto' : 'var(--attention)'};
        border-color: ${({ outline }) => outline ? 'var(--attention)' : 'auto'};
    }
`;

function Button(props) {
    return <Element {...props}>{props.children}</Element>;
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']).isRequired,
    fluid: PropTypes.bool
}

export default Button;