import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Auth from './controllers/Auth';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Landing from './components/Landing/Landing';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import MenuContextProvider from './contexts/MenuContextProvider';
import QueueContextProvider from './contexts/QueueContextProvider';
import PlayerContextProvider from './contexts/PlayerContextProvider';
import ModalContextProvider from './contexts/ModalContextProvider';
import GlobalStyle from './styles/globalStyle';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Workspace from './components/Workspace/Workspace';
import Player from './components/Workspace/Player/Player';

function App(props) {
  const [isAuthenticated, updateIsAuthenticated] = useState(false);
  const [isLoading, updateIsLoading] = useState(true);

  useEffect(() => {
    updateIsLoading(false);
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
          <LoadingScreen loading={isLoading.toString()}/>
          { isAuthenticated ?
            <MenuContextProvider>
              <QueueContextProvider>
                <PlayerContextProvider>
                    <Header/>
                    <Wrapper>
                      <ModalContextProvider>
                        <Navigation/>
                      </ModalContextProvider>
                      <Workspace/>
                    </Wrapper>
                    <Player/>
                </PlayerContextProvider>
              </QueueContextProvider>
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