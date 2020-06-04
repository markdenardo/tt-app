export const fetchMovies = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_MOVIES'})
        fetch('http://localhost:3000/movies/')
        .then(response => {return response.json()})
        .then(responseJSON => {
            dispatch({ type: 'ADD_MOVIES', movies: responseJSON.movies.name})
        })
    }
}