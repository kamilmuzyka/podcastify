import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Element = styled.button`
    padding: 0.5em;
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
            transform: scale(${({ scale }) => scale ? scale * 1.1 : 1.1});
        }
    }
`;

function PlayButton(props) {
    return (
        <Element type="button" {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                <g transform="translate(-128 -388)">
                <path id="Icon_ionic-md-play" d="M6.75,3.656V13.673l7.856-5.008Z" transform="translate(131.511 392.552)" fill="#fff"/>
                <g id="Ellipse_1" transform="translate(128 388)" fill="none" stroke="#FFF" strokeWidth="1">
                    <circle cx="13" cy="13" r="13" stroke="none"/>
                    <circle cx="13" cy="13" r="12.5" fill="none"/>
                </g>
                </g>
            </svg>
        </Element>
    );
}

PlayButton.propTypes = {
    scale: PropTypes.number
}

export default PlayButton;