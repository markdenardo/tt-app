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
          <Route exact path={process.env.PUBLIC_URL + '/'} component={App}/>
      <NavBar />
          <Route path={process.env.PUBLIC_URL + '/home'} component={Home} />
        {/* <Route exact path="/home" component={Home} /> */}
          <Route path={process.env.PUBLIC_URL + '/trailers'} component={Trailers} />
        {/* <Route exact path="/trailers" component={Trailers} /> */}
          <Route path={process.env.PUBLIC_URL + '/movies'} component={Movies} />
          {/* <Route exact path="/movies" component={Movies} /> */}
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
