import React, {Fragment} from 'react';
import GlobalStyle from './globalStyle';

import Header from './components/Header/Header';
import ShowList from './components/ShowList/ShowList';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Header/>
      <ShowList/>
    </Fragment>
  );
}

export default App;