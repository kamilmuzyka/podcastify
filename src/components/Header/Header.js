import React from 'react';
import styled from 'styled-components';
import Profile from '../Profile/Profile';
import Search from '../Search/Search';


const Element = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5em 2em;
    background-color: var(--dark);

    & > * {
        margin-top: 2em;
    }

    & > *:first-child {
        margin-top: 0;
    }

    @media (min-width: 500px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        & > * {
            margin-top: 0;
        }
    }
`;

function Header(props) {
    return (
        <Element>
            <Profile name="john.doe" src="https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508_960_720.jpg"/>
            <Search/>
        </Element>
    );
}

export default Header;