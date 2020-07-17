import React from 'react';
import GlobalStyle from './globalStyle';
import { Route } from 'react-router-dom';
import SearchContextProvider from './context/SearchProvider';
import Header from './components/Header/Header';
import Shows from './components/Shows/Shows';
import Navigation from './components/Navigation/Navigation';
import Workspace from './components/Workspace/Workspace';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
      <SearchContextProvider>
        <GlobalStyle/>
        <Header/>
        <Workspace>
          <Navigation/>
          <Route path="/shows" exact component={Shows}/>
          <Route path="/search" exact component={SearchResults}/>
        </Workspace>
      </SearchContextProvider>
  );
}

export default App;