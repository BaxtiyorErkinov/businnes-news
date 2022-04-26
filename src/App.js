import React from 'react';

import Header from './components/Header/'
import Search from './components/Search/'
import News from './components/News/'

import "./App.scss"

function App() {
  return (
    <div className="app__wrapper">
      <Header />
      <Search />
      <News />
    </div>
    );
}

export default App;
