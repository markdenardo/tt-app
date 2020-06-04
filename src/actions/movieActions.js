export const fetchMovies = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_MOVIES'})
        fetch('http://localhost:3000/movies/')
        .then(response => {return response.json()})
        
        })
    }
}