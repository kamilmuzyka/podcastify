import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Element = styled.button`
    padding: 0.5em;
    background: none;
    border: none;
    outline: none;

    svg {
        transform: scale(${({ scale }) => scale ? scale : 1})
                   rotate(${({ direction }) => direction === 'backward' ? 0 : 180}deg);
        transition: transform .2s ease-in-out;
    }

    &:hover {
        cursor: pointer;
    }
`;

function SkipButton(props) {
    return (
        <Element type="button" {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10.215" height="11.492" viewBox="0 0 10.215 11.492">
            <g id="Group_41" data-name="Group 41" transform="translate(-1023 -1784)">
                <path id="Path_2" data-name="Path 2" d="M12.8,4.5V15.992L4.5,10.246Z" transform="translate(1020.416 1779.5)" fill="#fff"/>
                <path id="Path_3" data-name="Path 3" d="M28.915,4.5H27V15.992h1.915Z" transform="translate(996 1779.5)" fill="#FFF"/>
            </g>
            </svg>
        </Element>
    );
}

SkipButton.propTypes = {
    scale: PropTypes.number,
    direction: PropTypes.oneOf(['backward', 'forward']).isRequired
}

export default SkipButton;