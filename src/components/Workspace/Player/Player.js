import React, { useState, useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PlayerContext } from '../../../contexts/PlayerContextProvider';
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
    @media (min-width: 1380px) {
        position: absolute;
        bottom: 1.5em;
        left: 50%;
        transform: translateX(-50%);
        max-width: 700px;
        border-radius: 2.5px;
    }
`;

const Bar = styled.div`
    width: ${({ percentage }) => percentage ? percentage : 0}%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.specific};
    transition: width 0.3s linear;

    @media (min-width: 1380px) {
        border-radius: 2.5px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5em 2em;

    @media (min-width: 500px) {
        flex-direction: row;
        justify-content: flex-start;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    @media (min-width: 500px) {
        order: 2;
        flex: 1;
        justify-content: center;
    }
    @media (min-width: 1380px) {
        position: absolute;
        top: 1.25em;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const MiddleButton = styled.div`
    display: inline-block;
    margin: 0 1em;
`;

const Episode = styled.div`
    font-size: ${({ theme }) => theme.typography.small};
    color: ${({ theme }) => theme.colors.specific};
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
    const [isPlaying, updateIsPlaying] = useState(false);
    const [progressPercentage, updateProgressPercentage] = useState(0);
    const {
        queueHead,
        loadQueueNext,
        loadQueuePrevious,
        currentEpisode
    } = useContext(PlayerContext);
    const audioRef = useRef();

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentTime = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            const progress = Math.round(currentTime / duration * 100);
            updateProgressPercentage(progress);
        }, 300);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const startPlaying = () => {
        audioRef.current.play();
        updateIsPlaying(true);
    }

    const stopPlaying = () => {
        audioRef.current.pause();
        updateIsPlaying(false);
    }

    const resetPlayer = () => {
        stopPlaying();
        audioRef.current.currentTime = 0;
    }

    useEffect(() => {
        resetPlayer();
        startPlaying();
    }, [queueHead]);

    return (
        <Element>
            <Progress>
                <Bar percentage={progressPercentage}/>
            </Progress>
            <Content>
                <Controls>
                    <audio src={currentEpisode?.audio_preview_url} ref={audioRef}/>
                    <SkipButton direction="backward" scale={1.25} onClick={loadQueuePrevious}/>
                    <MiddleButton>
                        { isPlaying ?
                            <PauseButton scale={1.25} onClick={stopPlaying} />
                            :
                            <PlayButton scale={1.25} onClick={startPlaying} />
                        }
                    </MiddleButton>
                    <SkipButton direction="forward" scale={1.25} onClick={loadQueueNext}/>
                </Controls>
                <Episode>
                    <InternalLink to={`/episodes/${currentEpisode?.id}`}>
                        <Thumbnail src={currentEpisode?.images[0].url}/>
                        <Name>
                            {currentEpisode?.name}
                        </Name>
                    </InternalLink>
                </Episode>
            </Content>
        </Element>
    );
}

export default Player;