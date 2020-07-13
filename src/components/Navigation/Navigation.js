import React from 'react';
import styled from 'styled-components';

const Element = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: var(--dark);

    @media (min-width: 1024px) {
        display: inline-block;
        position: static;
        width: auto;
        height: calc(100vh - 83px);
        background-color: var(--secondary);
    }
`;

const List = styled.ul`
    list-style-type: none;

    @media (min-width: 1024px) {
        padding: 1.5em 0;
    }
`;

const Item = styled.li`
    padding: 1.5em 0;
`;

const Link = styled.a`
    display: block;
    padding: 1em 2em;
    position: relative;
    text-decoration: none;
    color: ${props => props.active ? 'var(--accent)' : 'inherit'};

    @media (min-width: 1024px) {
        width: 100%;
        padding: 1em 4em;

        &::before {
            content: '';
            display: ${props => props.active ? 'block' : 'none'};
            width: 3px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color var(--accent);
        }
    }
`;

function Navigation(props) {
    return (
        <Element>
            <List>
                <Item>
                    <Link href="#" active>Shows</Link>
                </Item>
                <Item>
                    <Link href="#">Episodes</Link>
                </Item>
                <Item>
                    <Link href="#">Settings</Link>
                </Item>
                <Item>
                    <Link href="#">Log Out</Link>
                </Item>
            </List>
        </Element>
    );
}

export default Navigation;