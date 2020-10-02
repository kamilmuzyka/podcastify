import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { SEARCH_TYPES } from '../../../../constants';
import Spotify from '../../../../models/Spotify';
import extractId from '../../../../utils/extractId';
import WorkspaceLoading from '../../WorkspaceLoading/WorkspaceLoading';
import Details from '../../Details/Details';
import EpisodesList from '../../Episodes/EpisodesList/EpisodesList';

const Show = ({ location }) => {
    const SHOW_ID = extractId(location.pathname);
    const [status, updateStatus] = useState(null);
    const [details, updateDetails] = useState({});
    const [isLoading, updateIsLoading] = useState(true);

    const handleShowFollow = (id) => {
        Spotify.saveUserShow(id);
        updateStatus(true);
    };

    const handleShowUnfollow = (id) => {
        Spotify.removeUserShow(id);
        updateStatus(false);
    };

    useEffect(() => {
        (async () => {
            try {
                const show = await Spotify.getShowDetails(SHOW_ID);
                const inLibrary = await Spotify.checkUserShow(SHOW_ID);
                updateDetails({
                    name: show.name,
                    showId: show.id,
                    description: show.description,
                    external: show.external_urls.spotify,
                    type: SEARCH_TYPES.show,
                    publisher: show.publisher,
                    image: show.images[1].url,
                    episodes: show.episodes,
                    inLibrary,
                    addToLibrary: () => handleShowFollow(SHOW_ID),
                    removeFromLibrary: () => handleShowUnfollow(SHOW_ID)
                });
                updateIsLoading(false);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, [SHOW_ID, status]);

    return (
        <Fragment>
            <Details details={details}/>
            <EpisodesList episodes={details.episodes}/>
            <WorkspaceLoading loading={isLoading.toString()}/>
        </Fragment>
    );
}

export default withRouter(Show);