import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div  className="navbar-component">
            <AppBar>
            <a><NavLink to="/tt-app">Home</NavLink></a>
            <a><NavLink to="/trailers">Trailers</NavLink></a>
            <a><NavLink to="/movies">Movies</NavLink></a>
            </AppBar>
        </div>
    )
}

export default NavBar;


    
