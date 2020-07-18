import React, { Fragment, useEffect } from 'react';
import GlobalStyle from './globalStyle';
import { Route, withRouter } from 'react-router-dom';
import SearchContextProvider from './contexts/SearchProvider';
import Header from './components/Header/Header';
import Shows from './components/Workspace/Shows/Shows';
import Navigation from './components/Navigation/Navigation';
import Workspace from './components/Workspace/Workspace';
import SearchResults from './components/Workspace/SearchResults/SearchResults';
import Landing from './components/Landing/Landing';

import Spotify from './models/Spotify';

function App(props) {

  useEffect(() => {
    Spotify.init(props.history.push);
    setInterval(() => Spotify.init(props.history.push), 3600 * 1000);
  }, []);

  return (
      <Fragment>
        <GlobalStyle/>
        { props.history.location.pathname === '/' ?
        <Landing/>
        :
        <SearchContextProvider>
          <Header/>
          <Workspace>
            <Navigation/>
            <Route path="/shows" exact component={Shows}/>
            <Route path="/search" exact component={SearchResults}/>
          </Workspace>
        </SearchContextProvider>
        }
      </Fragment>
  );
}

export default withRouter(App);