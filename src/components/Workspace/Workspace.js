import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Shows from './Shows/Shows';
import SearchResults from './SearchResults/SearchResults';
import Episodes from './Episodes/Episodes';
import Settings from './Settings/Settings';
import Page404 from './Page404/Page404';


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
            <Switch>
                <Route path="/" exact component={Shows}/>
                <Route path="/search" exact component={SearchResults}/>
                <Route path="/episodes" exact component={Episodes}/>
                <Route path="/settings" exact component={Settings}/>
                <Route component={Page404}/>
            </Switch>
        </Main>
    );
}

export default Workspace;