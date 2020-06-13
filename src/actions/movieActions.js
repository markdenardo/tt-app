// asyncronous action creators
// import fetch from 'cross-fetch'

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
    catch(error){
        console.log(error)
    }
}

// export function addMovie(movie, dispatch){
//     return dispatch({
//         type: 'ADD_MOVIE',
//         movie: movie
//     })

// }

export const addMovie = (movie) => {
    try {
        return dispatch => {
            return fetch('https://web-brut-api.herokuapp.com/movies',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(movie)
            })
            .then(r=>r.json())
            .then(response => dispatch({type: 'ADD_MOVIE', response}))
            // .then(movie => console.log(movie))
        }    
    }
    catch(error){
        console.log(error)
    }
}



// export const addConcert = concert => async dispatch => {
//     try {
//         setLoading();
//         const res = await fetch('http://localhost:3000/concerts', {
//             method: 'POST',
//             body: JSON.stringify(concert),
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json'
//             }
//         });
//         const data = await res.json();
//         dispatch({
//             type: ADD_CONCERT,
//             payload: data
//         });