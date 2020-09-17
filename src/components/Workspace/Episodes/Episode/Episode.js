import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { SEARCH_TYPES } from '../../../../constants';
import Spotify from '../../../../models/Spotify';
import extractId from '../../../../utils/extractId';
import Details from '../../Details/Details';
import Tiles from '../../Tiles/Tiles';
import Tile from '../../Tiles/Tile/Tile';
import WorkspaceLoading from '../../WorkspaceLoading/WorkspaceLoading';

const Episode = ({ location }) => {
    const [isLoading, updateIsLoading] = useState(true);
    const [details, updateDetails] = useState({});
    const [episodes, updateEpisodes] = useState([]);

    useEffect(() => {
        (async () => {
            const path = location.pathname;
            const episodeId = extractId(path);
            try {
                const episode = await Spotify.getEpisodeDetails(episodeId);
                updateDetails({
                    name: episode.name,
                    description: episode.description,
                    external: episode.external_urls.spotify,
                    type: SEARCH_TYPES.episode,
                    showName: episode.show.name,
                    showId: episode.show.id,
                    releaseDate: episode.release_date,
                    duration: episode.duration_ms
                });
                const show = await Spotify.getShowDetails(episode.show.id);
                const totalEpisodes = show.episodes.items.length - 1;
                const episodesToDisplay = 4;
                const randomRangeOrigin = Math.floor(Math.random() * (totalEpisodes - episodesToDisplay - 1 + 1)) + 1;
                const moreEpisodes = show.episodes.items
                    .filter(episode => episode.id !== episodeId)
                    .splice(randomRangeOrigin, episodesToDisplay)
                    .reverse();
                updateEpisodes(moreEpisodes);
                updateIsLoading(false);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, [location.pathname]);

    return (
        <Fragment>
            <Details payload={details}/>
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