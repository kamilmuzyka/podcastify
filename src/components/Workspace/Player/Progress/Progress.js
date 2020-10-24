import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { QueueContext } from '../../../../contexts/QueueContextProvider';

const Element = styled.div`
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

const Progress = ({ audio }) => {
    const [progressPercentage, updateProgressPercentage] = useState(0);
    const { loadQueueNext } = useContext(QueueContext);

    const refreshProgressBar = () => {
        if (audio) {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progress = Math.round(currentTime / duration * 100);
        updateProgressPercentage(progress);
    }
    }

    useEffect(() => {
        const intervalId = setInterval(refreshProgressBar, 300);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    useEffect(() => {
        if (progressPercentage === 100) {
            loadQueueNext();
        }
    }, [progressPercentage]);

    return (
        <Element>
            <Bar percentage={progressPercentage}/>
        </Element>
    );
}

export default Progress;