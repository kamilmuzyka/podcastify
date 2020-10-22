import React, { Fragment } from 'react';
import EpisodeItem from './EpisodeItem/EpisodeItem';
import styled from 'styled-components';

const Labels = styled.div`
    display: none;

    @media (min-width: 1380px) {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr 15fr 3fr 3fr 3fr;
        gap: 1em;
        margin-top: 3em;
    }
`;

const Label = styled.div`
    color: ${({ theme }) => theme.colors.specific};
`;

const List = styled.ul`
    list-style-type: none;
`;

const EpisodesList = ({ details }) => {
    return (
        <Fragment>
            <Labels>
                <Label style={{marginRight: '1em'}}>Preview</Label>
                <Label>Title</Label>
                <Label>Release Date</Label>
                <Label>Duration</Label>
                <Label>Full Episode</Label>
            </Labels>
            <List>
                { details.episodes ? details.episodes.map(episode => {
                    return <EpisodeItem
                        key={episode.id}
                        id={episode.id}
                        show={details.id}
                        name={episode.name}
                        description={episode.description}
                        releaseDate={episode.release_date}
                        duration={episode.duration_ms}
                        external={episode.external_urls.spotify}
                        preview={episode.audio_preview_url}
                        episodes={details.episodes} />}) : null }
            </List>
        </Fragment>
    );
}

export default EpisodesList;