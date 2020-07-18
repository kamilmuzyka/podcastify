import React, { Fragment, useEffect } from 'react';
import GlobalStyle from './globalStyle';
import { Route, withRouter } from 'react-router-dom';
import Auth from './controllers/Auth';
import Landing from './components/Landing/Landing';
import SearchContextProvider from './contexts/SearchProvider';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Workspace from './components/Workspace/Workspace';
import Shows from './components/Workspace/Shows/Shows';
import SearchResults from './components/Workspace/SearchResults/SearchResults';

function App(props) {

  useEffect(() => {
    Auth.check(props.history.push);
    setInterval(() => Auth.check(props.history.push), 3600000);
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