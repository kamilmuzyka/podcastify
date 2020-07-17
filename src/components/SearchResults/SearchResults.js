import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchProvider';

function SearchResults(props) {
    const { query } = useContext(SearchContext);

    return (
        <div>
            {query}
        </div>
    );
}

export default SearchResults;