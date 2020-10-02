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
    const [isLoading, updateIsLoading] = useState(true);

    const handleShowFollow = (id) => {
        Spotify.saveUserShow(id);
    };

    const handleShowUnfollow = (id) => {
        Spotify.removeUserShow(id);
    };

    useEffect(() => {
        (async () => {
            const path = location.pathname;
            const showId = extractId(path);
            try {
                const show = await Spotify.getShowDetails(showId);
                const isFollowed = await Spotify.checkUserShow(showId);
                updateDetails({
                    name: show.name,
                    showId: show.id,
                    description: show.description,
                    external: show.external_urls.spotify,
                    type: SEARCH_TYPES.show,
                    publisher: show.publisher,
                    image: show.images[1].url,
                    episodes: show.episodes,
                    inLibrary: isFollowed,
                    addToLibrary: () => handleShowFollow(showId),
                    removeFromLibrary: () => handleShowUnfollow(showId)
                });
                updateIsLoading(false);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, [location.pathname, details]);

    return (
        <Fragment>
            <Details payload={details}/>
            <EpisodesList episodes={details.episodes}/>
            <WorkspaceLoading loading={isLoading.toString()}/>
        </Fragment>
    );
}

export default withRouter(Show);