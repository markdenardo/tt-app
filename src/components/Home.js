import React from 'react'
import HomeText from './HomeText'
import RandomMovie from '../containers/RandomMovie'

 const Home = () => {
    return (
            <div className="home-component">   
            <HomeText />                   
            <RandomMovie />
            </div>
    )
};



export default Home;