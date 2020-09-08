import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { SEARCH_TYPES } from '../../../../constants';
import Spotify from '../../../../models/Spotify';
import Details from '../../Details/Details';
import ShowEpisodes from './ShowEpisodes/ShowEpisodes';

const ShowDetails = ({ location }) => {
    const [details, updateDetails] = useState({});

    useEffect(() => {
        (async () => {
            const path = location.pathname;
            const showId = path.substring(path.lastIndexOf('/') + 1);
            try {
                const {
                    name,
                    publisher,
                    external_urls,
                    description,
                    images,
                    episodes } = await Spotify.getDetails(showId, SEARCH_TYPES.show);

                updateDetails({
                    name,
                    publisher,
                    source: external_urls.spotify,
                    description,
                    image: images[1].url,
                    episodes
                });
            } catch(err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <Fragment>
            <Details {...details} type={SEARCH_TYPES.show} />
            <ShowEpisodes episodes={details.episodes}/>
        </Fragment>
    );
}

export default withRouter(ShowDetails);