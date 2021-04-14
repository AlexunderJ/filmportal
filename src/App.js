import React, { Component } from 'react';

import FilmBox from './components/filmBox/FilmBox';
import SerchBar from './components/search/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SerchBar/>
        <FilmBox />
      </div>
    );
  }
}

export default App;
