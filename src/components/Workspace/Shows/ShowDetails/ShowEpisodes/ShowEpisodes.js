import React, { Fragment } from 'react';
import ShowEpisode from './ShowEpisode/ShowEpisode';

const ShowEpisodes = ({ episodes }) => {
    return (
        <Fragment>
            { episodes ? episodes.items.map(episode => {
                return <ShowEpisode
                    key={episode.id}
                    name={episode.name}
                    description={episode.description}
                    releaseDate={episode.release_date}
                    duration={episode.duration_ms}
                    source={episode.external_urls.spotify}
                    preview={episode.audio_preview_url} />}) : null }
        </Fragment>
    );
}

export default ShowEpisodes;