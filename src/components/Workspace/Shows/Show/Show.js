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
    const [details, updateDetails] = useState({});
    const [library, updateLibrary] = useState({});
    const [status, updateStatus] = useState(0);
    const [isLoading, updateIsLoading] = useState(true);

    const handleShowFollow = (id) => {
        Spotify.saveUserShow(id);
        updateStatus((prev) => prev + 1);
    };

    const handleShowUnfollow = (id) => {
        Spotify.removeUserShow(id);
        updateStatus((prev) => prev + 1);
    };

    useEffect(() => {
        (async () => {
            try {
                if(Object.keys(details).length === 0) {
                    const [show, inLibrary] = await Promise.all([
                        Spotify.getShowDetails(SHOW_ID),
                        Spotify.checkUserShow(SHOW_ID)
                    ]);
                    updateDetails({
                        name: show.name,
                        showId: show.id,
                        description: show.description,
                        external: show.external_urls.spotify,
                        type: SEARCH_TYPES.show,
                        publisher: show.publisher,
                        image: show.images[1].url,
                        episodes: show.episodes.items
                    });
                    updateLibrary({
                        inLibrary,
                        addToLibraryText: 'Follow',
                        removeFromLibraryText: 'Unfollow',
                        addToLibrary: () => handleShowFollow(SHOW_ID),
                        removeFromLibrary: () => handleShowUnfollow(SHOW_ID)
                    });
                } else {
                    const inLibrary = await Spotify.checkUserShow(SHOW_ID);
                    updateLibrary((prev) => {
                        return {
                            ...prev,
                            inLibrary
                        }
                    });
                }
                updateIsLoading(false);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, [SHOW_ID, status]);

    return (
        <Fragment>
            <Details details={details} library={library}/>
            <EpisodesList episodes={details.episodes}/>
            <WorkspaceLoading loading={isLoading.toString()}/>
        </Fragment>
    );
}

export default withRouter(Show);