import React from 'react';
import styled from 'styled-components';
import Accordion from '../../../../../../UI/Accordion/Accordion';
import { msToHours } from '../../../../../../utils/msToHours';

const Element = styled.div`
    margin-top: 1em;
    padding-top: 1em;
    border-top: 1px solid #505050;
`;

const Lead = styled.h3`
    font-size: inherit;
    font-weight: 400;
`;

const Description = styled(Accordion)`
    margin-top: 0.5em;
    max-width: 100%;
    color: ${({ theme }) => theme.colors.specific};
`;

const Date = styled.time`
    color: ${({ theme }) => theme.colors.specific};
`;

const Duration = styled.span`
    color: ${({ theme }) => theme.colors.specific};
`;

const Block = styled.div`
    margin-top: 0.5em;
`;

const Link = styled.a`
    display: inline-block;
    color: ${({ theme }) => theme.colors.positive};
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