import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Shows from './Shows/Shows';
import Show from './Shows/Show/Show';
import Episodes from './Episodes/Episodes';
import Episode from './Episodes/Episode/Episode';
import Settings from './Settings/Settings';
import SearchResults from './SearchResults/SearchResults';
import Page404 from './Page404/Page404';

const Main = styled.main`
    position: relative;
    flex: 1;
    padding: 2em;
    max-height: calc(100vh - 150px - 140px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #414141;
        border-radius: 5px;
    }

    @media (min-width: 500px) {
        max-height: calc(100vh - 80px - 105px);
        padding: 3em;
    }

    @media (min-width: 1380px) {
        max-height: calc(100vh - 80px - 100px);
        padding: 3em;
    }
`;

function Workspace(props) {
    return (
        <Main>
            <Switch>
                <Route path="/" exact component={Shows}/>
                <Route path="/shows/:id" exact component={Show}/>
                <Route path="/episodes" exact component={Episodes}/>
                <Route path="/episodes/:id" exact component={Episode}/>
                <Route path="/settings" exact component={Settings}/>
                <Route path="/search" exact component={SearchResults}/>
                <Route component={Page404}/>
            </Switch>
        </Main>
    );
}

export default Workspace;