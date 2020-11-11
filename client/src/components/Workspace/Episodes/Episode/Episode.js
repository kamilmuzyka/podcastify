import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { UserContext } from '../../../../contexts/UserContextProvider';
import { TYPES } from '../../../../constants/types';
import spotify from '../../../../interfaces/spotify';
import user from '../../../../interfaces/user';
import extractId from '../../../../utils/extractId';
import checkUserLibrary from '../../../../utils/checkUserLibrary';
import Details from '../../Details/Details';
import Tiles from '../../Tiles/Tiles';
import Tile from '../../Tiles/Tile/Tile';
import WorkspaceLoading from '../../WorkspaceLoading/WorkspaceLoading';

const Episode = ({ location }) => {
    const EPISODE_ID = extractId(location.pathname);
    const [details, updateDetails] = useState({});
    const [libraryActions, updateLibraryActions] = useState({});
    const [inLibrary, updateInLibrary] = useState(null);
    const [episodes, updateEpisodes] = useState([]);
    const [isLoading, updateIsLoading] = useState(true);
    const { userId, userLibrary, updateUserLibraryRefresher } = useContext(UserContext);

    const handleEpisodeLike = (userId, episodeId) => {
        user.saveEpisode(userId, episodeId);
        updateUserLibraryRefresher(Math.random());
    };

    const handleEpisodeRemoval = (userId, episodeId) => {
        user.removeEpisode(userId, episodeId);
        updateUserLibraryRefresher(Math.random());
    };

    const selectCorrespondingEpisodes = (currentEpisodeId, episodes) => {
        let episodesRangeBeginningIndex = 0;
        const episodesToDisplay = 4;
        const currentEpisodeIndex = episodes
            .findIndex(episode => episode.id === currentEpisodeId);

        if (currentEpisodeIndex !== -1 && currentEpisodeIndex < episodes.length - 1) {
            episodesRangeBeginningIndex = currentEpisodeIndex;
        }

        return [...episodes]
            .splice(episodesRangeBeginningIndex + 1, episodesToDisplay);
    }

    useEffect(() => {
        (async () => {
            try {
                const episode = await spotify.getEpisodeDetails(EPISODE_ID);
                const show = await spotify.getShowDetails(episode.show.id);
                const moreEpisodes = selectCorrespondingEpisodes(EPISODE_ID, show.episodes.items);
                updateDetails({
                    id: EPISODE_ID,
                    name: episode.name,
                    description: episode.description,
                    external: episode.external_urls.spotify,
                    type: TYPES.episode,
                    image: episode.images[1].url,
                    showName: episode.show.name,
                    showId: episode.show.id,
                    releaseDate: episode.release_date,
                    duration: episode.duration_ms,
                    episodes: show.episodes.items
                });
                updateEpisodes(moreEpisodes);
                updateIsLoading(false);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, [userId, EPISODE_ID]);

    useEffect(() => {
        updateLibraryActions({
            addToLibraryText: 'Like',
            removeFromLibraryText: 'Remove',
            addToLibrary: () => handleEpisodeLike(userId, EPISODE_ID),
            removeFromLibrary: () => handleEpisodeRemoval(userId, EPISODE_ID)
        });
    }, [userId, EPISODE_ID]);

    useEffect(() => {
        const inUserLibrary = checkUserLibrary(userLibrary, EPISODE_ID);
        updateInLibrary(inUserLibrary);
    }, [userLibrary, EPISODE_ID]);

    return (
        <>
            <Details details={details} libraryActions={libraryActions} inLibrary={inLibrary}/>
            <Tiles title="More episodes">
                { episodes ?
                    episodes.map(episode => {
                        return <Tile
                            key={episode.id}
                            id={episode.id}
                            title={episode.name}
                            description={episode.description}
                            image={episode.images[1].url}
                            type={TYPES.episode} />
                }) : null}
            </Tiles>
            <WorkspaceLoading loading={isLoading.toString()}/>
        </>
    );
}

export default withRouter(Episode);