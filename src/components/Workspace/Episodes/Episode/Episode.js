import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { SEARCH_TYPES } from '../../../../constants';
import Spotify from '../../../../models/Spotify';
import extractId from '../../../../utils/extractId';
import Details from '../../Details/Details';
import Tiles from '../../Tiles/Tiles';
import Tile from '../../Tiles/Tile/Tile';
import WorkspaceLoading from '../../WorkspaceLoading/WorkspaceLoading';

const selectCorrespondingEpisodes = (currentEpisodeId, episodes) => {
    let episodesRangeBeginningIndex = 0;
    const episodesToDisplay = 4;
    const currentEpisodeIndex = episodes
        .findIndex(episode => episode.id === currentEpisodeId);
    if (currentEpisodeIndex !== -1 && currentEpisodeIndex >= episodesToDisplay) {
        episodesRangeBeginningIndex = currentEpisodeIndex;
    }
    return episodes
        .splice(episodesRangeBeginningIndex - episodesToDisplay, episodesToDisplay)
        .reverse();
}

const Episode = ({ location }) => {
    const EPISODE_ID = extractId(location.pathname);
    const [isLoading, updateIsLoading] = useState(true);
    const [details, updateDetails] = useState({});
    const [episodes, updateEpisodes] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const episode = await Spotify.getEpisodeDetails(EPISODE_ID);
                updateDetails({
                    name: episode.name,
                    description: episode.description,
                    external: episode.external_urls.spotify,
                    type: SEARCH_TYPES.episode,
                    image: episode.images[1].url,
                    showName: episode.show.name,
                    showId: episode.show.id,
                    releaseDate: episode.release_date,
                    duration: episode.duration_ms
                });
                const show = await Spotify.getShowDetails(episode.show.id);
                const moreEpisodes = selectCorrespondingEpisodes(EPISODE_ID, show.episodes.items);
                updateEpisodes(moreEpisodes);
                updateIsLoading(false);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, [location.pathname]);

    return (
        <Fragment>
            <Details details={details} library={{}}/>
            <Tiles title="More episodes">
                { episodes ?
                    episodes.map(episode => {
                        return <Tile
                            key={episode.id}
                            id={episode.id}
                            title={episode.name}
                            description={episode.description}
                            image={episode.images[1].url}
                            type={SEARCH_TYPES.episode} />
                }) : null}
            </Tiles>
            <WorkspaceLoading loading={isLoading.toString()}/>
        </Fragment>
    );
}

export default withRouter(Episode);