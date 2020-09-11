import React, { Fragment } from 'react';
import ShowEpisode from './ShowEpisode/ShowEpisode';
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

const ShowEpisodes = ({ episodes }) => {
    return (
        <Fragment>
            <Labels>
                <Label style={{marginRight: '1em'}}>Preview</Label>
                <Label>Title</Label>
                <Label>Release Date</Label>
                <Label>Duration</Label>
                <Label>Full Episode</Label>
            </Labels>
            { episodes ? episodes.items.map(episode => {
                return <ShowEpisode
                    key={episode.id}
                    id={episode.id}
                    name={episode.name}
                    description={episode.description}
                    releaseDate={episode.release_date}
                    duration={episode.duration_ms}
                    external={episode.external_urls.spotify}
                    preview={episode.audio_preview_url} />}) : null }
        </Fragment>
    );
}

export default ShowEpisodes;