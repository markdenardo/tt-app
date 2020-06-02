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
      <Route exact path="/" component={Home}/>
      <Route exact path="/" component={TopTen} />
      <Route exact path="/" component={Movies} />
    </div>
    </Router>
  );
}

export default App;
