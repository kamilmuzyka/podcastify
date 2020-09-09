import React, { useState, useContext, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { SEARCH_TYPES } from '../../../constants';
import Spotify from '../../../models/Spotify';
import WorkspaceLoading from '../WorkspaceLoading/WorkspaceLoading';
import Tiles from '../Tiles/Tiles';
import Tile from '../Tiles/Tile/Tile';

function SearchResults({ history }) {
    const [isLoading, updateIsLoading] = useState(true);
    const [query, updateQuery] = useState('');
    const [shows, updateShows] = useState([]);
    const [episodes, updateEpisodes] = useState([]);

    useEffect(() => {
        const newQuery = new URLSearchParams(history.location.search).get('query');
        if(newQuery !== query) {
            updateQuery(newQuery);
        }
    });

    useEffect(() => {
        if(query) {
            (async () => {
                try {
                    const { shows, episodes } = await Spotify.getSearchResults(query);
                    updateShows(shows.items);
                    updateEpisodes(episodes.items);
                    updateIsLoading(false);
                } catch(err) {
                    console.error(err);
                }
            })();
        }
    }, [query]);

    return (
        <Fragment>
            { (shows.length > 0) ?
                <Tiles title="Shows">
                    { shows.map(show => {
                        return <Tile
                            key={show.id}
                            id={show.id}
                            title={show.name}
                            description={show.description}
                            image={show.images[1].url}
                            type={SEARCH_TYPES.show} />
                    })}
                </Tiles>
            : null }

            { (episodes.length) > 0 ?
                <Tiles title="Episodes">
                    { episodes.map(episode => {
                        return <Tile
                            key={episode.id}
                            id={episode.id}
                            title={episode.name}
                            description={episode.description}
                            image={episode.images[1].url}
                            type={SEARCH_TYPES.episode} />
                    })}
                </Tiles>
            : null }
            <WorkspaceLoading loading={isLoading.toString()}/>
        </Fragment>
    );
}

export default withRouter(SearchResults);