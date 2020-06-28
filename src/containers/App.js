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
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/trailers'} component={Trailers} />
          <Route exact path={process.env.PUBLIC_URL + '/movies'} component={Movies} />
      </header>
    </div>
    </Router>
  );
}

export default App;
