import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from '../components/NavBar'
import Home from '../components/Home'
import TopTen from '../components/TopTen'
import Movies from '../components/Movies'


const App = (props) => {
  return (
    <Router>
    <div className="App">
      <header className="app-header">
      <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/topten" component={TopTen} />
        <Route exact path="/movies" component={Movies} />
      </header>
    </div>
    </Router>
  );
}

export default App;
