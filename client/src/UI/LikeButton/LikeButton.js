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
    }

    path {
        fill: ${({ active, theme }) => active ? theme.colors.positive : 'transparent'};
    }

    &:hover {
        cursor: pointer;
    }
`;

function LikeButton(props) {
    return (
        <Element type="button" {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23.669" height="21.025" viewBox="0 0 23.669 21.025">
            <g transform="translate(-8.523 -10.269)">
                <g data-name="Group 1" transform="translate(9.023 10.769)">
                <path id="Path_1" data-name="Path 1" d="M29.233,22.1l.632-.626a6.279,6.279,0,0,0-8.88-8.88l-.626.632-.632-.632a6.277,6.277,0,0,0-8.873,8.88l.626.626,8.557,8.557a.456.456,0,0,0,.645,0L29.233,22.1" transform="translate(-9.023 -10.769)" fill="rgba(255,255,255,1)" stroke="#fff" strokeWidth="1"/>
                <path id="Path_2" data-name="Path 2" d="M29.233,22.1l.632-.626a6.279,6.279,0,0,0-8.88-8.88l-.626.632-.632-.632a6.277,6.277,0,0,0-8.873,8.88l.626.626,8.557,8.557a.456.456,0,0,0,.645,0L29.233,22.1" transform="translate(-9.023 -10.769)" fill="rgba(255,255,255,1)" stroke="#fff" strokeMiterlimit="10" strokeWidth="1"/>
                </g>
            </g>
            </svg>
        </Element>
    );
}

LikeButton.propTypes = {
    scale: PropTypes.number,
    active: PropTypes.bool
}

export default LikeButton;