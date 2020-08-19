import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { SearchContext } from '../../../contexts/SearchContextProvider';
import Spotify from '../../../models/Spotify';
import Tiles from '../Tiles/Tiles';
import Tile from '../Tiles/Tile/Tile';

import WorkspaceLoading from '../WorkspaceLoading/WorkspaceLoading';

function SearchResults(props) {
    const [isLoading, updateIsLoading] = useState(true);

    const [shows, updateShows] = useState([]);
    const [episodes, updateEpisodes] = useState([]);
    const { query, updateQuery } = useContext(SearchContext);
    const { searching, updateSearching } = useContext(SearchContext);

    function prepareShows(shows) {
        if(shows.length === 0) {
            updateShows([]);
            return;
        }

        const updatedShows = shows.map(show => {
            return <Tile
                key={show.id}
                title={show.name}
                description={show.description}
                image={show.images[1].url} />
        });

        updateShows(updatedShows);
    }

    function prepareEpisodes(episodes) {
        if (episodes.length === 0) {
            updateEpisodes([]);
            return;
        }

        const updatedEpisodes = episodes.map(episode => {
            return <Tile
                key={episode.id}
                title={episode.name}
                description={episode.description}
                image={episode.images[1].url} />
        });

        updateEpisodes(updatedEpisodes);
    }

    useEffect(() => {
        if(!searching) {
            return;
        }

        if(query) {
            (async () => {
                const results = await Spotify.getSearchResults(query);
                prepareShows(results.shows.items);
                prepareEpisodes(results.episodes.items);
                updateIsLoading(false);
            })();
        }
    }, [query]);

    useEffect(() => {
        return () => {
            updateSearching(false);
            updateQuery('');
        }
    }, []);

    if(searching) {

        if(shows.length > 0 && episodes.length > 0) {
            return (
                <Fragment>
                    <Tiles title="Shows">
                        {shows}
                    </Tiles>
                    <Tiles title="Episodes">
                        {episodes}
                    </Tiles>
                    <WorkspaceLoading loading={isLoading.toString()}/>
                </Fragment>
            );
        }

        if(shows.length > 0 && episodes.length === 0) {
            return (
                <Fragment>
                    <Tiles title="Shows">
                        {shows}
                    </Tiles>
                    <WorkspaceLoading loading={isLoading.toString()}/>
                </Fragment>
            );
        }

        if(shows.length === 0 && episodes.length > 0) {
            return (
                <Fragment>
                    <Tiles title="Episodes">
                        {episodes}
                    </Tiles>
                    <WorkspaceLoading loading={isLoading.toString()}/>
                </Fragment>
            );
        }

        if(shows.length === 0 && episodes.length === 0) {
            return (
                <Fragment>
                    <div>Nothing found</div>
                    <WorkspaceLoading loading={isLoading.toString()}/>
                </Fragment>
            );
        }

    }

    return <Redirect to="/"/>;
}

export default SearchResults;