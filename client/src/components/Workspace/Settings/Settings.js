import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../../contexts/ThemeContextProvider';
import Title from '../../../UI/Title/Title';
import ToggleButton from '../../../UI/ToggleButton/ToggleButton';

const List = styled.ul`
    list-style-type: none;
    color: ${({ theme }) => theme.colors.specific};
`;

const Item = styled.li`
    display: flex;
    align-items: center;
`;

const Text = styled.p`
    margin-right: 1em;
`;

function Settings(props) {
    const { currentTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Title>Settings</Title>
            <List>
                <Item>
                    <Text>Light mode</Text>
                    <ToggleButton active={currentTheme === 'dark' ? false : true} onClick={toggleTheme}/>
                </Item>
            </List>
        </>
    );
}

export default Settings;