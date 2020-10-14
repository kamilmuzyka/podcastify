import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PlayButton from '../../../UI/PlayButton/PlayButton';
import PauseButton from '../../../UI/PauseButton/PauseButton';
import SkipButton from '../../../UI/SkipButton/SkipButton';

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em 2em;
`;

const Bar = styled.div`
    width: 35%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.specific};
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
`;

const MiddleButton = styled.div`
    display: inline-block;
    margin: 0 1em;
`;

const Name = styled.p`
    margin-top: 0.25em;
    font-size: ${({ theme }) => theme.typography.small};
`;

const InternalLink = styled(Link)`
    display: -webkit-box;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: underline;
    }
`;

const Player = (props) => {
    const isPlaying = true;

    return (
        <Element>
            <Progress>
                <Bar/>
            </Progress>
            <Content>
                <Controls>
                    <SkipButton direction="backward" scale={1.25}/>
                    <MiddleButton>
                        { isPlaying ?
                            <PauseButton scale={1.25}/>
                            :
                            <PlayButton scale={1.25}/>
                        }
                    </MiddleButton>
                    <SkipButton direction="forward" scale={1.25}/>
                </Controls>
                <Name>
                    <InternalLink to="/episodes">
                        SPI 437: Life After Being a High-Performance CEO with Jon Oringer
                    </InternalLink>
                </Name>
            </Content>
        </Element>
    );
}

export default Player;