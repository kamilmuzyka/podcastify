import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

function SearchContextProvider(props) {

    const [query, updateQuery] = useState(null);

    return (
        <SearchContext.Provider value={{query, updateQuery}}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;