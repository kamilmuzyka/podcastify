import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { QueueContext } from '../../../contexts/QueueContextProvider';
import { PlayerContext } from '../../../contexts/PlayerContextProvider';
import { TYPES } from '../../../constants/types';
import capitalizeString from '../../../utils/capitalizeString';
import convertTime from '../../../utils/convertTime';
import Accordion from '../../../UI/Accordion/Accordion';
import Button from '../../../UI/Button/Button';

const Image = styled.img`
    display: block;
    max-width: 250px;
    object-fit: contain;
    object-position: top;
`;

const Header = styled.header``;

const Lead = styled.h2`
    position: relative;
    font-size: 2em;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.positive};

    @media (min-width: 500px) {
        max-width: calc(0.5em * 50);
    }
`;

const Label = styled.p`
    font-size: ${({ theme }) => theme.typography.small};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.specific};
`;

const Type = styled(Label)`
    margin: 0.75em 0 0.25em 0;

    @media (min-width: 1024px) {
        margin: 0 0 0.25em 0;
    }
`;

const Publisher = styled(Label)`
    margin: 0.25em 0 0.75em 0;
`;

const Show = styled(Label)`
    margin: 0.25em 0 0.75em 0;
`;

const InternalLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: underline;
    }
`;

const Description = styled(Accordion)`
    color: ${({ theme }) => theme.colors.specific};
`;

const Controls = styled.div`
    margin-top: 0.75em;
`;

const ControlButton = styled(Button)`
    margin-right: 0.75em;
`;

const Links = styled.div`
    margin-top: 0.75em;
    @media (min-width: 500px) {
        display: inline-block;
        margin-top: 0;
        margin-left: 0.75em;
    }
`;

const ExternalLink = styled.a`
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.specific};

    &:hover {
        text-decoration: underline;
    }
`;

const Split = styled.div`
    @media (min-width: 1024px) {
        display: flex;
    }
`;

const Content = styled.div`
    @media (min-width: 1024px) {
        margin-left: 3em;
    }
`;

const Time = styled.div`
    margin-top: 0.75em;
    color: ${({ theme }) => theme.colors.specific};
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
`;

const Details = ({ details, library }) => {
    const { loadQueue, currentEpisode, currentShow } = useContext(QueueContext);
    const { isPlaying, startPlaying, stopPlaying } = useContext(PlayerContext);

    const loadEpisodes = () => {
        if (details.type === TYPES.show) {
            loadQueue(details.episodes[0].id, details.id, details.episodes);
        } else {
            loadQueue(details.id, details.showId, details.episodes);
        }
    }

    return (
        <>
            <Split>
                <Image src={details.image} alt=""/>
                <Content type={details.type}>
                    <Header>
                        <Type>
                            {details.type ? capitalizeString(details.type) : null}
                        </Type>
                        <Lead>
                            {details.name}
                        </Lead>
                        {details.type === TYPES.show ?
                            <Publisher>
                                By {details.publisher}
                            </Publisher>
                            :
                            <Show>
                                <InternalLink to={`/shows/${details.showId}`}>
                                    {details.showName}
                                </InternalLink>
                            </Show>
                        }
                    </Header>
                    <Description>
                        {details.description}
                    </Description>
                    <Controls>
                        { details.type === TYPES.show ?
                            !isPlaying && details.id === currentShow ?
                            <ControlButton type="button" onClick={startPlaying}>
                                Play
                            </ControlButton>
                            :
                            isPlaying && details.id === currentShow ?
                                <ControlButton type="button" onClick={stopPlaying}>
                                    Pause
                                </ControlButton>
                                :
                                <ControlButton type="button" onClick={loadEpisodes}>
                                    Play
                                </ControlButton>
                            :
                            !isPlaying && currentEpisode?.id === details.id ?
                                <ControlButton type="button" onClick={startPlaying}>
                                    Play
                                </ControlButton>
                                :
                                isPlaying && currentEpisode?.id === details.id ?
                                    <ControlButton type="button" onClick={stopPlaying}>
                                        Pause
                                    </ControlButton>
                                    :
                                    <ControlButton type="button" onClick={loadEpisodes}>
                                        Play
                                    </ControlButton>
                        }
                        <Button onClick={library.inLibrary ? library.removeFromLibrary : library.addToLibrary} type="button" outline>
                            {library.inLibrary ? library.removeFromLibraryText : library.addToLibraryText}
                        </Button>
                        <Links>
                            <ExternalLink href={details.external}>
                                Listen on Spotify
                            </ExternalLink>
                        </Links>
                    </Controls>
                    {details.type === TYPES.episode ?
                        <Time>
                            <Date dateTime={details.releaseDate}>
                                {details.releaseDate}
                            </Date>
                            <Duration>{convertTime(details.duration)}</Duration>
                        </Time>
                        :
                        null
                    }
                </Content>
            </Split>
        </>
    );
}

Details.propTypes = {
    type: PropTypes.oneOf([TYPES.show, TYPES.episode])
}

export default Details;