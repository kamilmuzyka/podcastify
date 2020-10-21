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
    return [...episodes]
        .splice(episodesRangeBeginningIndex - episodesToDisplay, episodesToDisplay)
        .reverse();
}

const Episode = ({ location }) => {
    const EPISODE_ID = extractId(location.pathname);
    const [details, updateDetails] = useState({});
    const [library, updateLibrary] = useState({});
    const [episodes, updateEpisodes] = useState([]);
    const [isLoading, updateIsLoading] = useState(true);

    const handleEpisodeLike = (id) => {
        console.log(`Episode added to the library [${id}]`);
    };

    const handleEpisodeRemoval = (id) => {
        console.log(`Episode removed from the library [${id}]`);
    };

    useEffect(() => {
        (async () => {
            try {
                const episode = await Spotify.getEpisodeDetails(EPISODE_ID);
                const show = await Spotify.getShowDetails(episode.show.id);
                const moreEpisodes = selectCorrespondingEpisodes(EPISODE_ID, show.episodes.items);
                updateDetails({
                    id: EPISODE_ID,
                    name: episode.name,
                    description: episode.description,
                    external: episode.external_urls.spotify,
                    type: SEARCH_TYPES.episode,
                    image: episode.images[1].url,
                    showName: episode.show.name,
                    showId: episode.show.id,
                    releaseDate: episode.release_date,
                    duration: episode.duration_ms,
                    episodes: show.episodes.items
                });
                updateLibrary({
                    inLibrary: false,
                    addToLibraryText: 'Like',
                    removeFromLibraryText: 'Remove',
                    addToLibrary: () => handleEpisodeLike(EPISODE_ID),
                    removeFromLibrary: () => handleEpisodeRemoval(EPISODE_ID)
                });
                updateEpisodes(moreEpisodes);
                updateIsLoading(false);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, [EPISODE_ID]);

    return (
        <Fragment>
            <Details details={details} library={library}/>
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