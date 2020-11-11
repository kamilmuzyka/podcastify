import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { TYPES } from '../../../../constants/types';
import spotify from '../../../../interfaces/spotify';
import extractId from '../../../../utils/extractId';
import WorkspaceLoading from '../../WorkspaceLoading/WorkspaceLoading';
import Details from '../../Details/Details';
import EpisodesList from '../../Episodes/EpisodesList/EpisodesList';

const Show = ({ location }) => {
    const SHOW_ID = extractId(location.pathname);
    const [details, updateDetails] = useState({});
    const [library, updateLibrary] = useState({});
    const [inLibrary, updateInLibrary] = useState(null);
    const [refresher, updateRefresher] = useState(null);
    const [isLoading, updateIsLoading] = useState(true);

    const handleShowFollow = (id) => {
        spotify.saveUserShow(id);
        updateRefresher(Math.random());
    };

    const handleShowUnfollow = (id) => {
        spotify.removeUserShow(id);
        updateRefresher(Math.random());
    };

    useEffect(() => {
        (async () => {
            try {
                const newDetails = Object.keys(details).length === 0;
                if (newDetails) {
                    const [show, inLibrary] = await Promise.all([
                        spotify.getShowDetails(SHOW_ID),
                        spotify.checkUserShow(SHOW_ID)
                    ]);
                    updateDetails({
                        id: SHOW_ID,
                        name: show.name,
                        description: show.description,
                        external: show.external_urls.spotify,
                        type: TYPES.show,
                        publisher: show.publisher,
                        image: show.images[1].url,
                        episodes: show.episodes.items
                    });
                    updateLibrary({
                        addToLibraryText: 'Follow',
                        removeFromLibraryText: 'Unfollow',
                        addToLibrary: () => handleShowFollow(SHOW_ID),
                        removeFromLibrary: () => handleShowUnfollow(SHOW_ID)
                    });
                    updateInLibrary(inLibrary[0]);
                } else {
                    const inLibrary = await spotify.checkUserShow(SHOW_ID);
                    updateInLibrary(inLibrary[0]);
                }
                updateIsLoading(false);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, [SHOW_ID, refresher]);

    return (
        <>
            <Details details={details} library={library} inLibrary={inLibrary}/>
            <EpisodesList details={details}/>
            <WorkspaceLoading loading={isLoading.toString()}/>
        </>
    );
}

export default withRouter(Show);