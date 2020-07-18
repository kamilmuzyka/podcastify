import React, { Fragment, useEffect } from 'react';
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
          <Wrapper>
            <Navigation/>
            <Workspace/>
          </Wrapper>
        </SearchContextProvider>
        }
      </Fragment>
  );
}

export default withRouter(App);