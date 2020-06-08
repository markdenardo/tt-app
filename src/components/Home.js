import React from 'react'
import HomeText from './HomeText'
import Player from '../containers/Player'

const Home = () => {
    return (
        <div className="home-div">
            <HomeText />
            <Player />
        </div>
        );
    };

export default Home;