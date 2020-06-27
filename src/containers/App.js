import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Trailers from '../components/Trailers'
import Movies from '../components/Movies'

function App () {
  return (
    <Router>
    <div className="App">
      <header className="app-header">
      <NavBar />
          <Route  path="/" component={Home} />
          <Route  path="/trailers" component={Trailers} />
          <Route  path="/movies" component={Movies} />
      </header>
    </div>
    </Router>
  );
}

export default App;
