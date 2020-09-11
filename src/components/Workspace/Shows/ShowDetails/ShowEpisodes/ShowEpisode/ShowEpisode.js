import React from 'react';
import styled from 'styled-components';
import Accordion from '../../../../../../UI/Accordion/Accordion';
import { msToHours } from '../../../../../../utils/msToHours';
import LikeButton from '../../../../../../UI/LikeButton/LikeButton';
import PlayButton from '../../../../../../UI/PlayButton/PlayButton';

const Element = styled.div`
    margin-top: 1em;
    padding-top: 1em;
    border-top: 1px solid #505050;
    color: ${({ theme }) => theme.colors.specific};

    @media (min-width: 1380px) {
        display: grid;
        grid-template-columns: 1fr 15fr 3fr 3fr 3fr;
        grid-template-rows: auto;
        gap: 1em;

        & > * {
            align-self: start;
        }
    }
`;

const Header = styled.header`
    @media (min-width: 1380px) {
        margin-right: 3.75em;
    }
`;

const Lead = styled.h3`
    font-size: inherit;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.positive};
`;

const Description = styled(Accordion)`
    margin-top: 0.5em;
`;

const Date = styled.time`
    display: inline-block;
    margin-top: 0.5em;
    @media (min-width: 1380px) {
        margin-top: 0;
    }
`;

const Duration = styled.div`
    display: inline-block;
    position: relative;
    margin-left: 1em;

    &::before {
        content: '•';
        color: ${({ theme }) => theme.colors.specific};
        position: absolute;
        top: 50%;
        left: -0.5em;
        transform: translate(-50%, -50%);
    }

    @media (min-width: 1380px) {
        margin-left: 0;
        &::before {
            display: none;
        }
    }
`;

const Link = styled.a`
    display: inline-block;
    margin-bottom: 0.5em;
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5em;
    @media (min-width: 1380px) {
        order: -1;
        margin: 0 2em 0 0;
    }
`;

const StyledPlayButton = styled(PlayButton)`
    margin-right: 1.5em;
`;

const ShowEpisode = ({ name, description, releaseDate, duration, source }) => {
    return (
        <Element>
            <Header>
                <Lead>{name}</Lead>
                <Description>{description}</Description>
            </Header>

            <Date dateTime={releaseDate}>
                {releaseDate}
            </Date>

            <Duration>{msToHours(duration)}</Duration>

            <div>
                <Link href={source}>Listen on Spotify</Link>
            </div>

            <Controls>
                <StyledPlayButton/>
                <LikeButton/>
            </Controls>
        </Element>
    );
}

export default ShowEpisode;