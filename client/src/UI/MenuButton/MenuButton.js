import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../../contexts/MenuContextProvider';

const Element = styled.button`
    position: absolute;
    z-index: 900;
    padding: 0.5em;
    background-color: transparent;
    border: none;

    #menu-rect-1,
    #menu-rect-2,
    #menu-rect-3 {
        fill: ${({ theme }) => theme.colors.positive};
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;

const MenuButton= (props) => {
    const { toggleMenu } = useContext(MenuContext);

    return (
        <Element onClick={toggleMenu} {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="14" viewBox="0 0 26 14">
            <g transform="translate(29 23) rotate(180)">
                <rect id="menu-rect-1" width="22" height="2" transform="translate(3 15)"/>
                <rect id="menu-rect-2" width="26" height="2" transform="translate(3 21)"/>
                <rect id="menu-rect-3" width="26" height="2" transform="translate(3 9)"/>
            </g>
            </svg>
        </Element>
    );
}

export default MenuButton;