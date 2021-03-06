import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Element = styled.button`
    padding: 0.5em 2em;
    width: ${({ fluid }) => fluid === true ? '100%' : 'auto'};
    border: ${({ outline, theme }) => outline ? '2px solid' + theme.colors.accent : 'none'};
    background-color: ${({ outline, theme }) => outline ? 'transparent' : theme.colors.accent};
    font-size: ${({ theme }) => theme.typography.small};
    color: ${({ outline, theme }) => outline ? theme.colors.positive : '#FFFFFF'};
    font-family: inherit;
    letter-spacing: 1px;
    box-sizing: border-box;
    border-radius: 100px;
    outline: none;
    transition: background-color 0.1s ease-in-out,
                border-color 0.1s ease-in-out;
    cursor: pointer;

    @media (min-width: 500px) {
        min-width: 130px;
    }

    &:hover {
        background-color: ${({ outline, theme }) => outline ? 'auto' : theme.colors.attention};
        border-color: ${({ outline, theme }) => outline ? theme.colors.attention : 'auto'};
    }
`;

function Button({ children, ...restProps}) {
    return (
        <Element {...restProps}>
            {children}
        </Element>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']).isRequired,
    fluid: PropTypes.bool
}

export default Button;