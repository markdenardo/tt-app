const movieReducer = (state = {movies: [], movie: {},loading: false }, action) => {
    
    switch(action.type) {
        
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.movies,
                loading: false
            }
            
  

        default:
            return state;
    };

    
};

export default movieReducer;

