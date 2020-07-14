import React, { Fragment } from 'react';
import GlobalStyle from './globalStyle';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Shows from './components/Shows/Shows';
import Navigation from './components/Navigation/Navigation';
import Workspace from './components/Workspace/Workspace';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Header/>
      <Workspace>
        <Navigation/>
        <Route path="/shows" exact component={Shows}/>
      </Workspace>
    </Fragment>
  );
}

export default App;