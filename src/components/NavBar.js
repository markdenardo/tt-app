import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div  className="navbar-component">
            <AppBar>
                <li><NavLink to={process.env.PUBLIC_URL + '/'}>Home</NavLink></li>
                <li><NavLink to={process.env.PUBLIC_URL + '/trailers'}>Trailers</NavLink></li>
                <li><NavLink to={process.env.PUBLIC_URL + '/movies'}>Movies</NavLink></li>
            </AppBar>
        </div>
    )
}

export default NavBar;


    
