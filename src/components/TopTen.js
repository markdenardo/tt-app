import React from 'react'
import MovieList from '../containers/MovieList'
// import Carousel from './Carousel'

const TopTen = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>
                <MovieList />
            </h1>
        </div>
        )
    }

export default TopTen