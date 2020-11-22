import React, { useState, useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import { PlayerContext } from '../../../../contexts/PlayerContextProvider';

const Element = styled.div`
    width: 100%;
    height: 7px;
    background-color: ${({ theme }) => theme.colors.touch};
    @media (min-width: 1380px) {
        position: absolute;
        bottom: 1.5em;
        left: 50%;
        height: 5px;
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
    const { playNext } = useContext(PlayerContext);

    const refreshProgressBar = useCallback(() => {
        if (audio) {
            const currentTime = audio.currentTime;
            const duration = audio.duration;
            const progress = Math.round(currentTime / duration * 100);
            updateProgressPercentage(progress);
        }
    }, [audio]);

    useEffect(() => {
        const intervalId = setInterval(refreshProgressBar, 300);
        return () => {
            clearInterval(intervalId);
        }
    }, [refreshProgressBar]);

    useEffect(() => {
        if (progressPercentage === 100) {
            playNext();
        }
    }, [progressPercentage, playNext]);

    return (
        <Element>
            <Bar percentage={progressPercentage}/>
        </Element>
    );
}

export default Progress;