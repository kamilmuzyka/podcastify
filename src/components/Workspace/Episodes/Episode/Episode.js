import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { SEARCH_TYPES } from '../../../../constants';
import Spotify from '../../../../models/Spotify';
import extractId from '../../../../utils/extractId';
import Details from '../../Details/Details';
import WorkspaceLoading from '../../WorkspaceLoading/WorkspaceLoading';

const Episode = ({ location }) => {
    const [isLoading, updateIsLoading] = useState(true);
    const [details, updateDetails] = useState({});

    useEffect(() => {
        (async () => {
            const path = location.pathname;
            const episodeId = extractId(path);
            try {

                const results = await Spotify.getEpisodeDetails(episodeId);
                console.log(results);


                const {
                    name,
                    external_urls,
                    description,
                    images,
                    release_date,
                    duration_ms } = await Spotify.getEpisodeDetails(episodeId);

                updateDetails({
                    name,
                    external: external_urls.spotify,
                    description,
                    image: images[1].url,
                    releaseDate: release_date,
                    duration: duration_ms,
                    type: SEARCH_TYPES.episode
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
            <WorkspaceLoading loading={isLoading.toString()}/>
        </Fragment>
    );
}

export default withRouter(Episode);