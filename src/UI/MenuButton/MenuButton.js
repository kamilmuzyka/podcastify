import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../../contexts/MenuContextProvider';

const Element = styled.button`
    position: absolute;
    z-index: 900;
    padding: 0.5em;
    background-color: transparent;
    border: none;

    @media (min-width: 1024px) {
        display: none;
    }
`;

const MenuButton= (props) => {

    const { toggleMenu } = useContext(MenuContext);

    return (
        <Element onClick={toggleMenu} {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="14" viewBox="0 0 26 14">
            <g id="Fill" transform="translate(29 23) rotate(180)">
                <rect id="Rectangle_1" data-name="Rectangle 1" width="22" height="2" transform="translate(3 15)" fill="#fff"/>
                <rect id="Rectangle_2" data-name="Rectangle 2" width="26" height="2" transform="translate(3 21)" fill="#fff"/>
                <rect id="Rectangle_3" data-name="Rectangle 3" width="26" height="2" transform="translate(3 9)" fill="#fff"/>
            </g>
            </svg>
        </Element>
    );
}

export default MenuButton;