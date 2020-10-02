import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Element = styled.button`
    background: none;
    border: none;
    outline: none;

    svg {
        transform: scale(${({ scale }) => scale ? scale : 1});
        transition: transform .2s ease-in-out;
    }

    &:hover {
        cursor: pointer;

        svg {
            transform: scale(1.1);
        }
    }
`;

function PauseButton(props) {
    return (
        <Element type="button" {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
            <g transform="translate(-45 -389)">
                <path id="Icon_material-pause" dataName="Icon material-pause" d="M9,17.077h2.736V7.5H9ZM14.473,7.5v9.577h2.736V7.5Z" transform="translate(45.071 389.563)" fill="#FFF"/>
                <g id="Ellipse_2" dataName="Ellipse 2" transform="translate(45 389)" fill="none" stroke="#FFF" strokeWidth="1">
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