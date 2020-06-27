import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div  className="navbar-component">
            <AppBar>
            <a><NavLink to="/tt-app/home">Home</NavLink></a>
            <a><NavLink to="/tt-app/trailers">Trailers</NavLink></a>
            <a><NavLink to="/tt-app/movies">Movies</NavLink></a>
            </AppBar>
        </div>
    )
}

export default NavBar;


    
