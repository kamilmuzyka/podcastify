import React, { createContext, useState, useContext } from 'react';
import { QueueContext } from './QueueContextProvider';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const [isPlaying, updateIsPlaying] = useState(false);
    const [audio, updateAudio] = useState();
    const { currentEpisode, loadQueueNext, loadQueuePrevious } = useContext(QueueContext);

    const startPlaying = () => {
        if (audio && currentEpisode) {
            audio.play();
            updateIsPlaying(true);
        }
    }

    const stopPlaying = () => {
        if (audio && currentEpisode) {
            audio.pause();
            updateIsPlaying(false);
        }
    }

    const resetPlayer = () => {
        if (audio && currentEpisode) {
            stopPlaying(audio);
            audio.currentTime = 0;
            startPlaying(audio);
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