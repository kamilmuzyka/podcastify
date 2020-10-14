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

    @media (min-width: 500px) {
        flex-direction: row;
        justify-content: flex-start;
    }
`;

const Bar = styled.div`
    width: 35%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.specific};
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    @media (min-width: 500px) {
        order: 2;
        flex: 1;
        justify-content: center;
    }
`;

const MiddleButton = styled.div`
    display: inline-block;
    margin: 0 1em;
`;

const Episode = styled.div`
    font-size: ${({ theme }) => theme.typography.small};
    &:hover {
        text-decoration: underline;
    }
    @media (min-width: 500px) {
        order: 1;
    }
`;

const InternalLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    @media (min-width: 500px) {
        max-width: 250px;
        display: flex;
        align-items: center;
    }
`;

const Thumbnail = styled.img`
    display: none;
    @media (min-width: 500px) {
        display: block;
        width: 50px;
        height: 50px;
        margin-right: 1em;
        object-fit: cover;
    }
`;

const Name = styled.p`
    max-height: 3em;
    line-height: 1.5;
    overflow: hidden;
    overflow-wrap: anywhere;
    text-overflow: ellipsis;
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
                <Episode>
                    <InternalLink to="/episodes">
                        <Thumbnail src="https://images.pexels.com/photos/5155746/pexels-photo-5155746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                        <Name>
                            SPI 437: Life After Being a High-Performance CEO with Jon Oringer
                        </Name>
                    </InternalLink>
                </Episode>
            </Content>
        </Element>
    );
}

export default Player;