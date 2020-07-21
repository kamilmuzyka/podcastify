import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { SearchContext } from '../../../contexts/SearchProvider';
import Spotify from '../../../models/Spotify';
import SearchResult from './SearchResult/SearchResult';

function SearchResults(props) {
    const [shows, updateShows] = useState([]);
    const [episodes, updateEpisodes] = useState([]);
    const { query, updateQuery } = useContext(SearchContext);
    const { searching, updateSearching } = useContext(SearchContext);

    function prepareShows(shows) {
        if(shows.length === 0) {
            updateShows([]);
            return;
        }
    }

    function prepareEpisodes(episodes) {
        if (episodes.length === 0) {
            updateEpisodes([]);
            return;
        }

        const newEpisodes = episodes.map((episode, index) => {
            return <SearchResult
                key={`searchEpisode-${index}`}
                name={episode.name}
                description={episode.description}
                image={episode.images[1].url} />
        });

        updateEpisodes(newEpisodes);
    }

    useEffect(() => {
        if(!searching) {
            return;
        }
        let mounted = true;
        if(query) {
            (async () => {
                const results = await Spotify.getSearchResults(query);
                if(mounted) {
                    prepareShows(results.shows.items);
                    prepareEpisodes(results.episodes.items);
                }
            })();
        }

        return () => {
            mounted = false
        };
    }, [query]);

    useEffect(() => {
        return () => {
            updateSearching(false);
            updateQuery('');
        }
    }, [])

    return (
        (searching) ?
            <Fragment>
                {shows}
                {episodes}
            </Fragment>
            :
            <Redirect to="/shows"/>
    );
}

export default SearchResults;