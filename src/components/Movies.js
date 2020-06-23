import React from 'react'
import MovieForm from '../containers/MovieForm'
import MovieNames from '../containers/MovieNames'

function Movies() {
        return (
            <div className="movies-component">
                <h1>
                    🎥 Add a YouTube Trailer from your Favorite Movie 🎥
                    </h1>
                <MovieForm/>
                <h1>List of Movies</h1>
                <MovieNames/>
            </div>
        );
};

export default Movies;