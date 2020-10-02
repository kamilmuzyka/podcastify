import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { SEARCH_TYPES } from '../../../../constants';
import Spotify from '../../../../models/Spotify';
import extractId from '../../../../utils/extractId';
import WorkspaceLoading from '../../WorkspaceLoading/WorkspaceLoading';
import Details from '../../Details/Details';
import EpisodesList from '../../Episodes/EpisodesList/EpisodesList';

const Show = ({ location }) => {
    const [details, updateDetails] = useState({});
    const [library, updateLibrary] = useState({});
    const [isFollowed, updateIsFollowed] = useState(null);
    const [isLoading, updateIsLoading] = useState(true);

    const handleShowFollow = (id) => {
        Spotify.saveUserShow(id);
        updateIsFollowed(true);
    };

    const handleShowUnfollow = (id) => {
        Spotify.removeUserShow(id);
        updateIsFollowed(false);
    };

    useEffect(() => {
        (async () => {
            const path = location.pathname;
            const showId = extractId(path);
            try {
                const inLibrary = await Spotify.checkUserShow(showId);
                updateLibrary({
                    inLibrary,
                    addToLibrary: () => handleShowFollow(showId),
                    removeFromLibrary: () => handleShowUnfollow(showId)
                });
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, [location.pathname, isFollowed]);

    useEffect(() => {
        (async () => {
            const path = location.pathname;
            const showId = extractId(path);
            try {
                const show = await Spotify.getShowDetails(showId);
                updateDetails({
                    name: show.name,
                    showId: show.id,
                    description: show.description,
                    external: show.external_urls.spotify,
                    type: SEARCH_TYPES.show,
                    publisher: show.publisher,
                    image: show.images[1].url,
                    episodes: show.episodes,
                });
                updateIsLoading(false);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, [location.pathname]);

    return (
        <Fragment>
            <Details details={details} library={library}/>
            <EpisodesList episodes={details.episodes}/>
            <WorkspaceLoading loading={isLoading.toString()}/>
        </Fragment>
    );
}

export default withRouter(Show);