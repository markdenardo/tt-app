import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="navbar">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/topten">Top Ten</NavLink></li>
            <li><NavLink to="/movies">Movies</NavLink></li>
        </div>
    )
}

export default NavBar;