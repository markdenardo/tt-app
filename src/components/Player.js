import React from 'react'
import ReactPlayer from 'react-player'


const Player = () => {
    return(
        <div>
            <header className="app-header">
            <ReactPlayer url= 'https://www.youtube.com/watch?v=ysz5S6PUM-U' playing/>
            </header>
        </div>
    )

}

export default Player;