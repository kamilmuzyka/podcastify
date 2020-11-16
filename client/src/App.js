import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import auth from './auth/auth';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Landing from './components/Landing/Landing';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import UserContextProvider from './contexts/UserContextProvider';
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

  const checkAuthentication = () => {
    if (auth.check()) {
      updateIsAuthenticated(true);
      return;
    }
    updateIsAuthenticated(false);
  }

  useEffect(() => {
    checkAuthentication();
    const interval = setInterval(checkAuthentication, 5000);
    setTimeout(() => updateIsLoading(false), 100);
    return () => clearInterval(interval);
  }, []);

  return (
      <>
        <ThemeContextProvider>
          <LoadingScreen loading={isLoading.toString()}/>
          { isAuthenticated ?
            <UserContextProvider>
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
            </UserContextProvider>
            :
            <Landing/>
          }
          <GlobalStyle/>
        </ThemeContextProvider>
      </>
  );
}

export default withRouter(App);