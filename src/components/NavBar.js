import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div  className="navbar-component">
            <AppBar>
            <a><NavLink to="/">Home</NavLink></a>
            <a><NavLink to="/topten">Top Ten</NavLink></a>
            <a><NavLink to="/movies">Movies</NavLink></a>
            </AppBar>
        </div>
    )
}

export default NavBar;


    
