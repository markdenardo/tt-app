const movieReducer = (state = {movies: [], movie: {},loading: false }, action) => {
    
    switch(action.type) {
        
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.movies,
                loading: false
            }
            
            case 'ADD_MOVIE':
                // debugger;
                const movie = {
                    id: action.movie.id,
                    name: action.movie.name,
                    url: action.movie.url,
                    dir: action.movie.dir, 
                    year: action.movie.year
                };
                return {
                    ...state,
                    movies: [...state.movies, movie],
                    loading: false
                };
    
            case 'RAND_MOVIE':
                return {
                    ...state,
                    movie: action.movie,
                }

            default:
                return state;
        };

    
};

export default movieReducer;

