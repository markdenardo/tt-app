
export const addRandomMovie = movie => {
    return {
        type: 'RAND_MOVIE',
        movie
    }
}

export const getMovies = () => {
    try {
        return dispatch => {
            // dispatch(loadingTrue())
            return fetch('https://web-brut-api.herokuapp.com/movies')
                .then(r => r.json())
                // .then(movies => dispatch(setMovies(movies), dispatch(loadingFalse())))
                .then(movies => dispatch({type: 'GET_MOVIES', movies: movies}))
        }
    }
     catch(error) {
            console.log(error)
    }
}

export const addMovie = (movie) => {
 
    return dispatch => {
        return fetch('https://web-brut-api.herokuapp.com/movies', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(movie)
        })
            .then(r => r.json())
            .then(movie => {
          
                dispatch({ type: 'ADD_MOVIE', movie })})
        // .then(movie => console.log(movie))
    }
 
};



