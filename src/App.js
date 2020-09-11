import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Auth from './controllers/Auth';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Landing from './components/Landing/Landing';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import MenuContextProvider from './contexts/MenuContextProvider';
import ModalContextProvider from './contexts/ModalContextProvider';
import GlobalStyle from './styles/globalStyle';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Workspace from './components/Workspace/Workspace';

function App(props) {
  const [isAuthenticated, updateIsAuthenticated] = useState(false);
  const [applicationLoading, updateApplicationLoading] = useState(true);

  useEffect(() => {
    updateApplicationLoading(false);
  }, []);

  useEffect(() => {
    if (Auth.check()) {
      updateIsAuthenticated(true);
      return;
    }

    updateIsAuthenticated(false);
  });

  return (
      <Fragment>
        <ThemeContextProvider>
          <LoadingScreen loading={applicationLoading.toString()}/>
          { isAuthenticated ?
            <MenuContextProvider>
              <Header/>
              <Wrapper>
                <ModalContextProvider>
                  <Navigation/>
                </ModalContextProvider>
                <Workspace/>
              </Wrapper>
            </MenuContextProvider>
            :
            <Landing/>
          }
          <GlobalStyle/>
        </ThemeContextProvider>
      </Fragment>
  );
}

export default withRouter(App);