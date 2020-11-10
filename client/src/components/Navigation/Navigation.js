import React, { useContext } from 'react';
import styled from 'styled-components';
import { ROUTES } from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '../../contexts/MenuContextProvider';
import { ModalContext } from '../../contexts/ModalContextProvider';
import Logout from '../Logout/Logout';

const Element = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 800;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isActive }) => isActive ? 'translateX(0)' : 'translateX(100%)'};
    background-color: ${({ theme }) => theme.colors.tertiary};

    @media (min-width: 1024px) {
        position: static;
        display: inline-block;
        transition: none;
        transform: none;
        width: auto;
        height: calc(100vh - 83px);
        background-color: ${({ theme }) => theme.colors.secondary};
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
    padding: 0.75em 0;
`;

const Link = styled(NavLink)`
    position: relative;
    display: block;
    padding: 1em 2em;
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease-in-out;

    &.active {
        color: ${({ theme }) => theme.colors.accent};
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
            background-color ${({ theme }) => theme.colors.accent};
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
    const { isActive, toggleMenu } = useContext(MenuContext);
    const { modalActive, openModal, closeModal } = useContext(ModalContext);

    return (
        <Element isActive={isActive}>
            <List>
                <Item>
                    <Link onClick={toggleMenu} to={ROUTES.shows} activeClassName="active" exact>Shows</Link>
                </Item>
                <Item>
                    <Link onClick={toggleMenu} to={ROUTES.episodes} activeClassName="active" exact>Episodes</Link>
                </Item>
                <Item>
                    <Link onClick={toggleMenu} to={ROUTES.settings} activeClassName="active" exact>Settings</Link>
                </Item>
                <Item>
                    <Button type="button" onClick={() => openModal()}>Log Out</Button>
                </Item>
            </List>
            <Logout active={modalActive} close={closeModal}/>
        </Element>
    );
}

export default Navigation;