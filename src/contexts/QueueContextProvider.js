import React, { createContext, useState } from 'react';

export const QueueContext = createContext();

const QueueContextProvider = (props) => {
    const [queue, updateQueue] = useState([]);
    const [queueHead, updateQueueHead] = useState(0);
    const [currentEpisode, updateCurrentEpisode] = useState();

    const loadQueue = (currentId, episodes) => {
      const currentIndex = episodes.findIndex(episode => episode.id === currentId) || 0;
      updateQueue(episodes);
      updateQueueHead(currentIndex);
      updateCurrentEpisode(episodes[currentIndex]);
    }

    const loadQueueNext = () => {
      if (queueHead < queue.length - 1) {
        updateCurrentEpisode(queue[queueHead + 1]);
        updateQueueHead(prev => prev + 1);
      } else {
        updateCurrentEpisode(queue[0]);
        updateQueueHead(0);
      }
    }

    const loadQueuePrevious = () => {
      if (queueHead > 0) {
        updateCurrentEpisode(queue[queueHead - 1]);
        updateQueueHead(prev => prev - 1);
      } else {
        updateCurrentEpisode(queue[queue.length - 1]);
        updateQueueHead(queue.length - 1);
      }
    }

    return (
        <QueueContext.Provider value={{
            currentEpisode,
            queueHead,
            loadQueue,
            loadQueueNext,
            loadQueuePrevious
        }}>
            {props.children}
        </QueueContext.Provider>
    );
}

export default QueueContextProvider;