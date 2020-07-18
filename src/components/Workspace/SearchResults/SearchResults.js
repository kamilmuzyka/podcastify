import React, { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchProvider';

function SearchResults(props) {
    const { query } = useContext(SearchContext);

    return (
        <div>
            {query}
        </div>
    );
}

export default SearchResults;