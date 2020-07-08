import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    width: ${ props => props.fluid === true ? '100%' : 'auto'};
    padding: 0.5em 2em;
    background-color: var(--accent);
    border: none;
    border-radius: 100px;
    outline: none;
    font-family: inherit;
    font-size: var(--small);
    letter-spacing: 1px;
    color: var(--light);
    transition: background-color 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: var(--attention);
    }
`;

function Button(props) {
    return <StyledButton type={props.type} fluid={props.fluid}>{props.children}</StyledButton>;
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    fluid: PropTypes.bool
}

export default Button;