import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Shows from './Shows/Shows';
import SearchResults from './SearchResults/SearchResults';

const Main = styled.main`
    flex: 1;

    padding: 2em;
    max-height: calc(100vh - 83px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 10px;
        background: var(--secondary);
    }

    ::-webkit-scrollbar-thumb {
        background-color: #414141;
        border-radius: 5px;
    }

    @media (min-width: 500px) {
        padding: 3em;
    }
`;

function Workspace(props) {
    return (
        <Main>
            <Route path="/shows" exact component={Shows}/>
            <Route path="/search" exact component={SearchResults}/>
        </Main>
    );
}

export default Workspace;