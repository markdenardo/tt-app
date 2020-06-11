import React from 'react'
import MovieList from '../containers/MovieList'
import MovieForm from '../containers/MovieForm'

function Movies() {
        return (
            <div>
                This is a movie list of all the Movies in the Database. Click on the URL if you want to view the movie.
                <MovieForm/>
            </div>
        );
};

export default Movies;