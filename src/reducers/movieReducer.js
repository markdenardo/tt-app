const movieReducer = (state = {movies: [], loading: false }, action) => {
    
    switch(action.type) {

        case 'LOADING_MOVIES':
            return {
                ...state,
                movies:[...state.movies],
                loading: true
            }
            
        case 'SET_MOVIES':
            return {
                ...state,
                movies: [...state.movies],
                loading: false
            }

        case 'ADD_MOVIES':
            return {
                ...state,
                movies: action.movies,
                loading: false
            }
            
                default:
                    console.log(state)
                    return state;
    };

};

export default movieReducer;

