// asyncronous action creators

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

// export const addMovie = () => {
   
//     try {
//         return dispatch => {
//             return fetch('https://web-brut-api.herokuapp.com/movies',{
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 body: JSON.stringify({
//                     "name": `${user.target.name}`,
//                     "url": `${user.target.url}`,
//                     "dir": `${user.target.dir}`,
//                     "year": `${user.target.dir}`
//                 })
//             })
//             .then(movies => dispatch({type: 'POST_MOVIE', movies:movies}))
//         }    
//         }
//     catch(error){
//         console.log(error)
//     }
// }
