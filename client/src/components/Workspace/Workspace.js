import React, { useRef, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../constants/routes';
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
    max-height: calc(100vh - 150px - 7px); // calc(100vh - Header Height - Player Height)
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.subtle};
        border-radius: 5px;
    }

    @media (min-width: 500px) {
        max-height: calc(100vh - 83px - 7px);
        padding: 3em;
    }

    @media (min-width: 1380px) {
        max-height: calc(100vh - 83px - 98px);
        padding: 3em;
    }
`;


function Workspace(props) {
    const mainRef = useRef();

    useEffect(() => {
        mainRef.current.scrollTo(0, 0);
    });

    return (
        <Main ref={mainRef}>
            <Switch>
                <Route path={ROUTES.shows} exact component={Shows}/>
                <Route path={ROUTES.show} exact component={Show}/>
                <Route path={ROUTES.episodes} exact component={Episodes}/>
                <Route path={ROUTES.episode} exact component={Episode}/>
                <Route path={ROUTES.settings} exact component={Settings}/>
                <Route path={ROUTES.search} exact component={SearchResults}/>
                <Route component={Page404}/>
            </Switch>
        </Main>
    );
}

export default Workspace;