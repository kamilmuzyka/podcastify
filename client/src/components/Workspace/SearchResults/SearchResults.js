import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { TYPES } from '../../../constants/types';
import spotify from '../../../interfaces/spotify';
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
        if (newQuery !== query) {
            updateQuery(newQuery);
        }
    }, [history.location.search, query]);

    useEffect(() => {
        if (query) {
            (async () => {
                try {
                    const { shows, episodes } = await spotify.getSearchResults(query);
                    updateShows(shows.items);
                    updateEpisodes(episodes.items);
                    updateIsLoading(false);
                } catch(err) {
                    throw new Error(err);
                }
            })();
        }
    }, [query]);

    return (
        <>
            { (shows.length > 0) ?
                <Tiles title="Shows">
                    { shows.map(show => {
                        return <Tile
                            key={show.id}
                            id={show.id}
                            title={show.name}
                            description={show.description}
                            image={show.images[1].url}
                            type={TYPES.show} />
                    })}
                </Tiles>
                :
                null
            }

            { (episodes.length) > 0 ?
                <Tiles title="Episodes">
                    { episodes.map(episode => {
                        return <Tile
                            key={episode.id}
                            id={episode.id}
                            title={episode.name}
                            description={episode.description}
                            image={episode.images[1].url}
                            type={TYPES.episode} />
                    })}
                </Tiles>
                :
                null
            }

            { (shows.length === 0 && episodes.length === 0) ?
                'No results for ' + query
                :
                null
            }

            <WorkspaceLoading loading={isLoading.toString()}/>
        </>
    );
}

export default withRouter(SearchResults);