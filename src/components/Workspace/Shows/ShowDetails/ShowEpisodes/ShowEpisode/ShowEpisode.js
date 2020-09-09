import React from 'react';
import styled from 'styled-components';
import Accordion from '../../../../../../UI/Accordion/Accordion';
import { msToHours } from '../../../../../../utils/msToHours';
import LikeIcon from '../../../../../../UI/LikeIcon/LikeIcon';
import PlayIcon from '../../../../../../UI/PlayIcon/PlayIcon';

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

const Block = styled.div``;

const Link = styled.a`
    display: inline-block;
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
`;

const StyledPlayIcon = styled(PlayIcon)`
    margin-right: 0.75em;
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
            <Controls>
                <StyledPlayIcon/>
                <LikeIcon/>
            </Controls>
        </Element>
    );
}

export default ShowEpisode;