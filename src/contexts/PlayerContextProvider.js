import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const [queue, updateQueue] = useState([]);
    const [queueHead, updateQueueHead] = useState(0);
    const [currentEpisode, updateCurrentEpisode] = useState('https://p.scdn.co/mp3-preview/727b36bf647bf7defda34c26e03190e63178cd71');

    // Handle the queue
    // Update the currentEpisode

    return (
        <PlayerContext.Provider value={{
            currentEpisode
        }}>
            {props.children}
        </PlayerContext.Provider>
    );
}

export default PlayerContextProvider;