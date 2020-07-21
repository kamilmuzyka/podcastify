import React, { Fragment, useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';
import { withRouter } from 'react-router-dom';
import Auth from './controllers/Auth';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Landing from './components/Landing/Landing';
import SearchContextProvider from './contexts/SearchProvider';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Workspace from './components/Workspace/Workspace';

function App(props) {
  const [isAuthenticated, updateIsAuthenticated] = useState(false);
  const [applicationLoading, updateApplicationLoading] = useState(true);

  useEffect(() => {
    if (Auth.check()) {
      updateIsAuthenticated(true);
      updateApplicationLoading(false);
      // setInterval(() => Auth.check(), 3600000);
    }
  }, []);

  return (
      <Fragment>
        <GlobalStyle/>
        {/* <LoadingScreen loading={applicationLoading.toString()}/> */}
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