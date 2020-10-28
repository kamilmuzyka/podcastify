import React, { useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { QueueContext } from '../../../contexts/QueueContextProvider';
import { PlayerContext } from '../../../contexts/PlayerContextProvider';
import Controls from './Controls/Controls';
import Progress from './Progress/Progress';

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
        background-color: transparent;
    }
`;

const Placeholder = styled.div`
    width: 50px;
    height: 50px;
    background-size: cover;
`;

const Name = styled.p`
    max-height: 3em;
    line-height: 1.5;
    overflow: hidden;
    overflow-wrap: anywhere;
    text-overflow: ellipsis;
`;

const Player = (props) => {
    const { currentEpisode } = useContext(QueueContext);
    const { updateAudio, resetPlayer } = useContext(PlayerContext);
    const audioRef = useRef();

    useEffect(() => {
        updateAudio(audioRef.current);
    }, []);

    useEffect(() => {
        resetPlayer();
    }, [currentEpisode]);

    return (
        <Element>
            <audio src={currentEpisode?.audio_preview_url} ref={audioRef}/>
            <Progress audio={audioRef.current}/>
            <Content>
                <Controls/>
                <Episode>
                    { currentEpisode ?
                        <InternalLink to={`/episodes/${currentEpisode.id}`}>
                            <Thumbnail src={currentEpisode.images[0].url}/>
                            <Name>
                                {currentEpisode.name}
                            </Name>
                        </InternalLink>
                        :
                        <Placeholder/>
                    }
                </Episode>
            </Content>
        </Element>
    );
}

export default Player;