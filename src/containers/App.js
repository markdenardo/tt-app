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

function App (){
  return (
    <BrowserRouter>
    <div className="App">
      <header className="app-header">
          <Route exact path="/" component={App}/>
      <NavBar />
          <Route  path="/home" component={Home} />
        {/* <Route exact path="/home" component={Home} /> */}
          <Route  path="/trailers" component={Trailers} />
        {/* <Route exact path="/trailers" component={Trailers} /> */}
          <Route  path="/movies" component={Movies} />
          {/* <Route exact path="/movies" component={Movies} /> */}
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
