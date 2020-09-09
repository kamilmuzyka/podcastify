import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Auth from './controllers/Auth';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Landing from './components/Landing/Landing';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import ModalContextProvider from './contexts/ModalContextProvider';
import MenuContextProvider from './contexts/MenuContextProvider';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Workspace from './components/Workspace/Workspace';
import Modal from './components/Modal/Modal';
 
function App(props) {
  const [isAuthenticated, updateIsAuthenticated] = useState(false);
  const [applicationLoading, updateApplicationLoading] = useState(true);

  useEffect(() => {
    if (Auth.check()) {
      updateIsAuthenticated(true);
    }
    updateApplicationLoading(false);
  }, []);

  return (
      <Fragment>
        <ThemeContextProvider>
          <LoadingScreen loading={applicationLoading.toString()}/>
          { isAuthenticated ?
            <ModalContextProvider>
              <MenuContextProvider>
                <Header/>
                <Wrapper>
                  <Navigation/>
                  <Workspace/>
                </Wrapper>
                <Modal/>
              </MenuContextProvider>
            </ModalContextProvider>
            :
            <Landing/>
          }
        </ThemeContextProvider>
      </Fragment>
  );
}

export default withRouter(App);