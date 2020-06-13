import React from 'react'
import MovieForm from '../containers/MovieForm'
import MovieNames from '../containers/MovieNames'

function Movies() {
        return (
            <div>
                This is a movie form where you can add a movie to the database.
                <MovieForm/>
                This is a movie list of all the Movies in the Database.
                <MovieNames/>
            </div>
        );
};

export default Movies;