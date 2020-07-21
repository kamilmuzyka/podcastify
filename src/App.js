import React, { Fragment, useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';
import { withRouter } from 'react-router-dom';
import Auth from './controllers/Auth';
import Landing from './components/Landing/Landing';
import SearchContextProvider from './contexts/SearchProvider';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Workspace from './components/Workspace/Workspace';

function App(props) {
  const [isAuthenticated, updateIsAuthenticated] = useState(false);

  useEffect(() => {
    if (Auth.check() === true) {
      updateIsAuthenticated(true);
      setInterval(() => Auth.check(), 3600000);
    }
  }, []);

  return (
      <Fragment>
        <GlobalStyle/>
        { isAuthenticated ?
        <SearchContextProvider>
          <Header/>
          <Wrapper>
            <Navigation/>
            <Workspace/>
          </Wrapper>
        </SearchContextProvider>
        :
        <Landing/>
        }
      </Fragment>
  );
}

export default withRouter(App);