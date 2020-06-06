//syncronous action creators
// export const setMovies = movies => {
//     return { 
//         type: "SET_MOVIES", 
//         movies: movies
//         }
// }

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
    return dispatch => { 
        dispatch(loadingTrue())
        return fetch('http://localhost:3000/movies')
            .then(r => r.json())   
            .then(movies => dispatch({ type: 'GET_MOVIES', movies}))
            // .then(movies => dispatch(setMovies(movies)))
    };
}   