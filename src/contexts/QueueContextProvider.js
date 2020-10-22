import React, { createContext, useState } from 'react';

export const QueueContext = createContext();

const QueueContextProvider = (props) => {
    const [queue, updateQueue] = useState([]);
    const [queueHead, updateQueueHead] = useState(0);
    const [currentEpisode, updateCurrentEpisode] = useState();
    const [currentShow, updateCurrentShow] = useState();

    const loadQueue = (currentEpisodeId, currentShowId, currentShowEpisodes) => {
      console.log(currentShowId);
      const currentIndex = currentShowEpisodes
        .findIndex(episode => episode.id === currentEpisodeId) || 0;
      updateQueue(currentShowEpisodes);
      updateQueueHead(currentIndex);
      updateCurrentEpisode(currentShowEpisodes[currentIndex]);
      updateCurrentShow(currentShowId);
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
            queue,
            queueHead,
            currentEpisode,
            currentShow,
            loadQueue,
            loadQueueNext,
            loadQueuePrevious
        }}>
            {props.children}
        </QueueContext.Provider>
    );
}

export default QueueContextProvider;