import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ModalContext } from '../../contexts/ModalContextProvider';
import Logout from './Logout/Logout';

const Element = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    background-color: var(--dark);

    @media (min-width: 1024px) {
        display: inline-block;
        position: static;
        z-index: 9997;
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

    @media (max-height: 400px) {
        columns: 2;
    }
`;

const Item = styled.li`
    padding: 1.5em 0;
`;

const Link = styled(NavLink)`
    position: relative;
    display: block;
    padding: 1em 2em;
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease-in-out;

    &.active {
        color: var(--accent);
    }

    @media (min-width: 1024px) {
        width: 100%;
        padding: 1em 4em;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            visibility: hidden;
            width: 3px;
            height: 100%;
            background-color var(--accent);
            transition: opacity 0.2s ease-in-out,
                        visibility 0.2s ease-in-out
        }

        &.active::before {
            opacity: 1;
            visibility: visible;
        }
    }
`;

const Button = styled.button`
    display: block;
    padding: 1em 2em;
    width: 100%;
    border: none;
    outline: none;
    text-decoration: none;
    background-color: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
`;

function Navigation(props) {

    const { openModal, closeModal } = useContext(ModalContext);

    return (
        <Element>
            <List>
                <Item>
                    <Link to="/" exact activeClassName="active">Shows</Link>
                </Item>
                <Item>
                    <Link to="/episodes" activeClassName="active" exact >Episodes</Link>
                </Item>
                <Item>
                    <Link to="/settings" activeClassName="active" exact>Settings</Link>
                </Item>
                <Item>
                    <Button
                        type="button"
                        onClick={() => openModal(<Logout closeModal={closeModal}/>)}>
                        Log Out
                        </Button>
                </Item>
            </List>
        </Element>
    );
}

export default Navigation;