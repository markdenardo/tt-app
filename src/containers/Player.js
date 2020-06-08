import React from 'react'
import ReactPlayer from 'react-player'


const Player = () => {
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
           
            <ReactPlayer url= 'https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          
        </div>
    )

}

export default Player;