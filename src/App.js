import React, {Fragment} from 'react';
import GlobalStyle from './globalStyle';

import ShowList from './components/ShowList/ShowList';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <ShowList/>
    </Fragment>
  );
}

export default App;