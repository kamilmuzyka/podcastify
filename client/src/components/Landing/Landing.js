import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import auth from '../../auth/auth';
import Button from '../../UI/Button/Button';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #000000;
    color: #AAAAAA;

    @media (min-width: 800px) {
        display: flex;
    }
`;

const Content = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px;

    @media (min-width: 1024px) {
        font-size: 20px;
        flex-basis: 50%;
    }
`;

const Decoration = styled.div`
    display none;

    @media (min-width: 1024px) {
        display: block;
        flex-basis: 50%;
    }
`;

const Heading = styled.h1`
    max-width: 550px;
    margin: 15px 0 20px 0;
    font-size: 40px;
    line-height: 1.25;
    color: #FFFFFF;

    @media (min-width: 1024px) {
        margin: 20px 0 30px;
        font-size: 64px;
    }
`;

const Description = styled.p`
    max-width: 500px;
    line-height: 1.75;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;

    @media (min-width: 500px) {
        flex-direction: row;
        align-items: center;
    }

    @media (min-width: 1024px) {
        margin-top: 40px;
    }
`;

const StyledButton = styled(Button)`
    padding: 10px 28px;
    background-color: #4BB043;
    font-size: 14px;
    font-weight: 400;

    &:hover {
        background-color: ${({ outline }) => outline ? 'auto' : '#5AD54F'};
        border-color: ${({ outline }) => outline ? '#5AD54F' : 'auto'};
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;

const ExternalLink = styled.a`
    margin-top: 15px;
    font-size: 14px;
    color: inherit;

    @media (min-width: 500px) {
        margin-top: 0;
        margin-left: 15px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
        margin-left: 20px;
    }
`;


function Landing(props) {
    return (
        <Container>
            <Content>
                <div>
                    <div>
                        Podcastify
                    </div>
                    <Heading>
                        Take a different perspective
                    </Heading>
                    <Description>
                        Browse podcasts, follow shows and save episodes that you fancy. All synchronised with your Spotify account.
                    </Description>
                    <Buttons>
                        <StyledButton onClick={auth.logIn}>
                            Continue with Spotify
                        </StyledButton>
                        <ExternalLink href="https://www.spotify.com/ie/signup/">
                            Sign up with Spotify
                        </ExternalLink>
                    </Buttons>
                </div>
            </Content>
            <Decoration>
                <Particles width="100%" height="100vh" params={{
                    particles: {
                        number: {
                            value: 80
                        }
                    }
                }}/>
            </Decoration>
        </Container>
    );
}

export default Landing;