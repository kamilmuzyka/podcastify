import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const [queue, updateQueue] = useState([]);
    const [current, updateCurrent] = useState(0);

    return (
        <PlayerContext.Provider value={{
            queue,
            current,
            updateQueue,
            updateCurrent
        }}>
            {props.children}
        </PlayerContext.Provider>
    );
}

export default PlayerContextProvider;