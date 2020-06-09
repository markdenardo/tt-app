const movieReducer = (state = {movies: [], loading: false }, action) => {
    
    switch(action.type) {
        
        // case 'SET_MOVIES':
        //     return action.movies
        //     return{
        //      movies: action.movies,
        //     loading: false
        // }
            
            

        //check for loading
        // case 'LOADING_TRUE':
        //     return {
        //         ...state,
        //         movies: [...state.movies],
        //         loading: true
        //     }
        
        // case 'LOADING_FALSE':
        //     return {
        //         ...state,
        //         movies: [...state.movies],
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

            // reducer needed for GET requests
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

