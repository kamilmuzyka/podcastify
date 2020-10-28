import React, { useContext } from 'react';
import styled from 'styled-components';
import useKey from '../../../../hooks/useKey';
import { QueueContext } from '../../../../contexts/QueueContextProvider'
import { PlayerContext } from '../../../../contexts/PlayerContextProvider';
import PlayButton from '../../../../UI/PlayButton/PlayButton';
import PauseButton from '../../../../UI/PauseButton/PauseButton';
import SkipButton from '../../../../UI/SkipButton/SkipButton';

const Element = styled.div`
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

const Middle = styled.div`
    display: inline-block;
    margin: 0 1em;
`;

const Controls = (props) => {
    const { currentEpisode } = useContext(QueueContext);
    const {
        isPlaying,
        startPlaying,
        stopPlaying,
        playNext,
        playPrevious
    } = useContext(PlayerContext);

    const handleSpaceDown = (e) => {
        const tag = e.target.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
            e.preventDefault();
            if (isPlaying) {
                stopPlaying();
            } else {
                startPlaying();
            }
        }
    }

    useKey('Space', handleSpaceDown);

    return (
        <Element>
            <SkipButton direction="backward" scale={1.25} onClick={playPrevious}/>
            <Middle>
                { isPlaying && currentEpisode ?
                    <PauseButton scale={1.25} onClick={stopPlaying} />
                    :
                    <PlayButton scale={1.25} onClick={startPlaying} />
                }
            </Middle>
            <SkipButton direction="forward" scale={1.25} onClick={playNext}/>
        </Element>
    );
}

export default Controls;