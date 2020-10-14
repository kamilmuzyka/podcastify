import React from 'react';
import styled from 'styled-components';
import PlayButton from '../../../UI/PlayButton/PlayButton';
import PauseButton from '../../../UI/PauseButton/PauseButton';

const Element = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 700;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tertiary};
    @media (min-width: 1024px) {
        z-index: 1000;
    }
`;

const Progress = styled.div`
    width: 100%;
    height: 5px;
    background-color: #414141;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
`;

const Bar = styled.div`
    // width: *dynamic*
    height: 100%;
    background-color: ${({ theme }) => theme.colors.specific};


    width: 20%
`;

const Controls = styled.div`
    margin-top: 1em;
`;

const Player = (props) => {
    const isPlaying = false;

    return (
        <Element>
            <Progress>
                <Bar/>
            </Progress>
            <Content>
                <Controls>
                    {/* <SkipButton direction="backward"/> */}
                    { isPlaying ?
                        <PauseButton scale={1.25}/>
                        :
                        <PlayButton scale={1.25}/>
                    }
                    {/* <SkipButton direction="forward"/> */}
                </Controls>
            </Content>
        </Element>
    );
}

export default Player;