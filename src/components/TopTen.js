import React from 'react'
import Carousel from '../containers/Carousel'
// import Carousel from './Carousel'

const TopTen = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>
                <Carousel />
            </h1>
        </div>
        )
    }

export default TopTen