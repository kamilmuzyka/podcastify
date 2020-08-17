import React from 'react';
import styled from 'styled-components';

const Element = styled.button`
    position: absolute;
    padding: 0.5em;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
`;

const Close = (props) => {
    return (
        <Element {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 29.657 29.657">
            <g id="X" transform="translate(2.828 2.828)">
            <line id="Line_3" data-name="Line 3" x1="24" y2="24" strokeWidth="4" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <line id="Line_4" data-name="Line 4" x2="24" y2="24" strokeWidth="4" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </g>
            </svg>
        </Element>
    );
}

export default Close;