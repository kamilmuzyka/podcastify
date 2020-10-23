import React, { createContext, useState, useContext } from 'react';
import { QueueContext } from './QueueContextProvider';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const [isPlaying, updateIsPlaying] = useState(false);
    const [audio, updateAudio] = useState();
    const { currentEpisode, loadQueueNext, loadQueuePrevious } = useContext(QueueContext);

    const startPlaying = async () => {
        if (audio && currentEpisode) {
            updateIsPlaying(true);
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                await playPromise;
            }
        }
    }

    const stopPlaying = async () => {
        if (audio && currentEpisode) {
            updateIsPlaying(false);
            const pausePromise = audio.pause();
            if (pausePromise !== undefined) {
                await pausePromise;
            }
        }
    }

    const resetPlayer = () => {
        if (audio && currentEpisode) {
            stopPlaying();
            audio.currentTime = 0;
            startPlaying();
        }
    }

    const playNext = () => {
        loadQueueNext();
    }

    const playPrevious = () => {
        loadQueuePrevious();
    }

    return (
        <PlayerContext.Provider value={{
            isPlaying,
            updateAudio,
            startPlaying,
            stopPlaying,
            playNext,
            playPrevious,
            resetPlayer
        }}>
            {props.children}
        </PlayerContext.Provider>
    );
}

export default PlayerContextProvider;