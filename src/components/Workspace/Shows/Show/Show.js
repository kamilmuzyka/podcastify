import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { SEARCH_TYPES } from '../../../../constants';
import Spotify from '../../../../models/Spotify';
import extractId from '../../../../utils/extractId';
import WorkspaceLoading from '../../WorkspaceLoading/WorkspaceLoading';
import Details from '../../Details/Details';
import EpisodesList from '../../Episodes/EpisodesList/EpisodesList';

const ShowDetails = ({ location }) => {
    const [isLoading, updateIsLoading] = useState(true);
    const [details, updateDetails] = useState({});

    useEffect(() => {
        (async () => {
            const path = location.pathname;
            const showId = extractId(path);
            try {
                const {
                    name,
                    publisher,
                    external_urls,
                    description,
                    images,
                    episodes } = await Spotify.getShowDetails(showId);

                updateDetails({
                    name,
                    publisher,
                    external: external_urls.spotify,
                    description,
                    image: images[1].url,
                    episodes,
                    type: SEARCH_TYPES.show
                });

                updateIsLoading(false);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, []);

    return (
        <Fragment>
            <Details {...details}/>
            <EpisodesList episodes={details.episodes}/>
            <WorkspaceLoading loading={isLoading.toString()}/>
        </Fragment>
    );
}

export default withRouter(ShowDetails);