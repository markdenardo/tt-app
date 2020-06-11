import React from 'react'
import ReactPlayer from 'react-player'


const Player = () => {
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
           
            <ReactPlayer />
          
        </div>
    )

}

export default Player;