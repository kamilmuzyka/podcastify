import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SEARCH_TYPES } from '../../../constants';
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

const PlayButton = styled(Button)`
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

const Details = ({ details }) => {
    return (
        <Fragment>
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
                        {details.type === SEARCH_TYPES.show ?
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
                        <PlayButton type="button">
                            Play
                        </PlayButton>
                        <Button onClick={details.inLibrary ? details.removeFromLibrary : details.addToLibrary} type="button" outline>
                            {details.inLibrary ?
                                details.type === SEARCH_TYPES.show ?
                                    'Unfollow'
                                    :
                                    'Remove'
                                :
                                details.type === SEARCH_TYPES.show ?
                                    'Follow'
                                    :
                                    'Like'
                            }
                        </Button>
                        <Links>
                            <ExternalLink href={details.external}>
                                Listen on Spotify
                            </ExternalLink>
                        </Links>
                    </Controls>
                    {details.type === SEARCH_TYPES.episode ?
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
        </Fragment>
    );
}

Details.propTypes = {
    type: PropTypes.oneOf([SEARCH_TYPES.show, SEARCH_TYPES.episode])
}

export default Details;