const movieReducer = (state = {movies: [], loading: false}, action)=>{
    switch(action.type){
        case 'LOADING_MOVIES':
            return {
                movies:[...state.movies],
                loading: true
            }
                default:
                    return state;
    }

}

export default movieReducer;