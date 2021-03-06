import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Element = styled.button`
    padding: 0.5em;
    background: none;
    border: none;
    outline: none;

    #pause-svg {
        transform: scale(${({ scale }) => scale ? scale : 1});
        transition: transform .2s ease-in-out;
    }

    #pause-path {
        fill: ${({ theme }) => theme.colors.positive};
    }

    #pause-g {
        stroke: ${({ theme }) => theme.colors.positive};
    }

    &:hover {
        cursor: pointer;

        #pause-svg {
            transform: scale(${({ scale }) => scale ? scale * 1.1 : 1.1});
        }
    }
`;

function PauseButton(props) {
    return (
        <Element type="button" {...props}>
            <svg id="pause-svg" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
            <g transform="translate(-45 -389)">
                <path id="pause-path" d="M9,17.077h2.736V7.5H9ZM14.473,7.5v9.577h2.736V7.5Z" transform="translate(45.071 389.563)"/>
                <g id="pause-g" transform="translate(45 389)" fill="none" strokeWidth="1">
                    <circle cx="13" cy="13" r="13" stroke="none"/>
                    <circle cx="13" cy="13" r="12.5" fill="none"/>
                </g>
            </g>
            </svg>
        </Element>
    );
}

PauseButton.propTypes = {
    scale: PropTypes.number
}

export default PauseButton;