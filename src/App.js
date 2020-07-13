import React, {Fragment} from 'react';
import GlobalStyle from './globalStyle';

import Header from './components/Header/Header';
import ShowList from './components/ShowList/ShowList';
import Navigation from './components/Navigation/Navigation';
import Workspace from './components/Workspace/Workspace';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Header/>
      <Workspace>
        <Navigation/>
        <ShowList/>
      </Workspace>
    </Fragment>
  );
}

export default App;