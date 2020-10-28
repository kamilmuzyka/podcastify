import React from 'react';
import styled from 'styled-components';
import BouncingIcon from '../../UI/BouncingIcon/BouncingIcon';

const Element = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.negative};
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ loading }) => loading === 'true' ? '1' : '0'};
    visibility: ${({ loading }) => loading === 'true' ? 'visible' : 'hidden'};
    transition: opacity 1s 0.3s ease-in-out,
                visibility 1s 0.3s ease-in-out;
`;

const Heading = styled.h1`
    margin-bottom: 0.5em;
    font-size: 3em;
`;

const Container = styled.div`
    position: relative;
`;

function LoadingScreen({ loading }) {
    return (
        <Element loading={loading}>
            <Container>
                <Heading>Podcastify</Heading>
                <BouncingIcon/>
            </Container>
        </Element>
    );
}

export default LoadingScreen;