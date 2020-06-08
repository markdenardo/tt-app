const movieReducer = (state = {movies: [], loading: false }, action) => {
    
    switch(action.type) {

    //check for loading
        case 'LOADING_TRUE':
            return {
                ...state,
                movies: [...state.movies],
                loading: true
            }
    //reducer needed for GET requests
        // case 'SET_MOVIES':
        //     return {
        //         ...state,
        //         movies: action.movies,
        //         loading: false
        //     }

        case 'GET_MOVIES':
            const newMoviesArr = action.movies.map(movie => {
                    const newMovie = Object.assign({}, movie)
                    return newMovie
            }) 
            return {
                ...state,
                movies: newMoviesArr,
                loading: false
            }

    //reducer needed for POST request
        // case 'ADD_MOVIES':
        //     return {
        //         ...state,
        //         movies: action.movies,
        //         loading: false
        //     }
            
        default:
            return state;
    };

};

export default movieReducer;

