import React from 'react';
import styled from 'styled-components';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

const Element = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.loading === 'true' ? '1' : '0'};
    visibility: ${props => props.loading === 'true' ? 'visible' : 'hidden'};
    transition: opacity 1s ease-in-out,
                visibility 1s ease-in-out;
`;

const Heading = styled.h1`
    font-size: 3em;
    margin-bottom: 128px;
`;

const Wrapper = styled.div`
    position: relative;
`;

const StyledLoadingIcon = styled(LoadingIcon)`
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
`;

function LoadingScreen(props) {
    return (
        <Element loading={props.loading}>
            <Wrapper>
                <Heading>Podcastify</Heading>
                <StyledLoadingIcon/>
            </Wrapper>
        </Element>
    );
}

export default LoadingScreen;