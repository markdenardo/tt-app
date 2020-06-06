//syncronous action creators
export const setMovies = movies => {
    return { type: "SET_MOVIES", movies: movies}
}

export const loadingTrue = () => {
    return {
        type: "LOADING_TRUE",
        loading: true
    }
}

export const loadingFalse = () => {
    return {
        type: "LOADING_FALSE",
        loading: false
    }
}

//asyncronous action creators
export const getMovies = () => {
    return (dispatch) => { 
        dispatch(loadingTrue())
        fetch('https://web-brut-api.herokuapp.com/movies')
            .then(r => r.json())
            .then(movies => dispatch(setMovies(movies)));
    };
}   