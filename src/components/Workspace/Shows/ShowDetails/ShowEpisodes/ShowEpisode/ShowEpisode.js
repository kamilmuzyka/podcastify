import React from 'react';
import styled from 'styled-components';
import Accordion from '../../../../../../UI/Accordion/Accordion';
import { msToHours } from '../../../../../../utils/msToHours';

const Element = styled.div`
    margin-top: 1em;
    padding-top: 1em;
    border-top: 1px solid #505050;
    color: ${({ theme }) => theme.colors.specific};
`;

const Lead = styled.h3`
    font-size: inherit;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.positive};
`;

const Description = styled(Accordion)`
    margin-top: 0.5em;
`;

const Date = styled.time``;

const Duration = styled.span``;

const Block = styled.div`
    margin-top: 0.5em;
`;

const Link = styled.a`
    display: inline-block;
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const ShowEpisode = ({ name, description, releaseDate, duration, source }) => {
    return (
        <Element>
            <Lead>{name}</Lead>
            <Description>{description}</Description>
            <Block>
                <Date dateTime={releaseDate}>{releaseDate}</Date>
                <Duration> • {msToHours(duration)}</Duration>
            </Block>
            <Block>
                <Link href={source}>Listen on Spotify</Link>
            </Block>
        </Element>
    );
}

export default ShowEpisode;