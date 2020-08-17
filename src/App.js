import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Auth from './controllers/Auth';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Landing from './components/Landing/Landing';
import SearchContextProvider from './contexts/SearchContextProvider';
import ModalContextProvider from './contexts/ModalContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';
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
          { isAuthenticated ? (
          <SearchContextProvider>
            <ModalContextProvider>
                <Header/>
                <Wrapper>
                  <Navigation/>
                  <Workspace/>
                </Wrapper>
                <Modal/>
            </ModalContextProvider>
          </SearchContextProvider>
          ) : (
            <Landing/> )
          }
        </ThemeContextProvider>
      </Fragment>
  );
}

export default withRouter(App);