import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Accordion from '../../../../../UI/Accordion/Accordion';
import convertTime from '../../../../../utils/convertTime';
import LikeButton from '../../../../../UI/LikeButton/LikeButton';
import PlayButton from '../../../../../UI/PlayButton/PlayButton';

const Element = styled.li`
    margin-top: 0.75em;
    padding-top: 0.75em;
    border-top: 1px solid #505050;
    color: ${({ theme }) => theme.colors.specific};

    & > * {
        margin-top: 0.25em;
    }

    @media (min-width: 1380px) {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr 15fr 3fr 3fr 3fr;
        gap: 1em;

        & > * {
            margin-top: 0;
            align-self: start;
        }
    }
`;

const Header = styled.header`
    @media (min-width: 1380px) {
        margin-right: 3.75em;
    }
`;

const Lead = styled.h3``;

const InternalLink = styled(Link)`
    display: block;
    font-size: ${({ theme }) => theme.typography.default};
    font-weight: 400;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.positive};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Description = styled(Accordion)`
    margin-top: 0.25em;
`;

const Date = styled.time`
    display: inline-block;
`;

const Duration = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 1em;

    &::before {
        content: '•';
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

const ExternalLink = styled.a`
    display: inline-block;
    margin-bottom: 0.25em;
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media (min-width: 1380px) {
        margin-bottom: 0;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    @media (min-width: 1380px) {
        margin-right: 1em;
        order: -1;
    }
`;

const StyledPlayButton = styled(PlayButton)`
    margin-right: 1.5em;
`;

const EpisodeItem = ({ id, name, description, releaseDate, duration, external }) => {
    return (
        <Element>
            <Header>
                <Lead>
                    <InternalLink to={`/episodes/${id}`}>{name}</InternalLink>
                </Lead>
                <Description>{description}</Description>
            </Header>

            <Date dateTime={releaseDate}>
                {releaseDate}
            </Date>

            <Duration>{convertTime(duration)}</Duration>

            <div>
                <ExternalLink href={external}>Listen on Spotify</ExternalLink>
            </div>

            <Controls>
                <StyledPlayButton/>
                <LikeButton/>
            </Controls>
        </Element>
    );
}

export default EpisodeItem;