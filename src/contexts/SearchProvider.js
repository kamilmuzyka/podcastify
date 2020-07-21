import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

function SearchContextProvider(props) {

    const [searching, updateSearching] = useState(false);
    const [query, updateQuery] = useState('');

    return (
        <SearchContext.Provider value={{searching, updateSearching, query, updateQuery}}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;