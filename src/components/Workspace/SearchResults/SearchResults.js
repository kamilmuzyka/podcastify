import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../../../contexts/SearchProvider';
import Spotify from '../../../models/Spotify';

function SearchResults(props) {
    const { query } = useContext(SearchContext);

    useEffect(() => {
        (async () => {
            if(!query) {
                return;
            }

            const results = await Spotify.getSearchResults(query);
            if(results) {

                if(results.shows) {
                    const shows = results.shows.items.map(show => {
                        const name = show.name;
                        const image = show.images[1].url;
                        const description = show.description;
                        console.table([name, description, image]);
                    });
                }

                if(results.episodes) {

                }
            }
        })();
    });

    return (
        <div>
            {query}
        </div>
    );
}

export default SearchResults;