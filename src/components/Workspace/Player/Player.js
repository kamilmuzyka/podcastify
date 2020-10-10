import React from 'react';
import styled from 'styled-components';
import PlayerControls from './PlayerControls/PlayerControls';

const Element = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 700;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tertiary};
    @media (min-width: 1024px) {
        z-index: 800;
    }

    // Testing
    height: 110px;
`;

const Player = (props) => {
    return (
        <Element>
            <PlayerControls/>
        </Element>
    );
}

export default Player;