// syncronous action creators
export const setMovies = movies => {
        return { 
                type: "SET_MOVIES", 
                movies: movies
                }
        }

export const loadingTrue = () => {
    return {
        type: "LOADING_TRUE",
        loading: true
    }
}

export const loadingFalse = () => {
    return {
        type: "LOADING_FALSE",
        loading: false
    }
}

// asyncronous action creators
export const getMovies = () => {
    return dispatch => { 
        dispatch(loadingTrue())
        return fetch('https://web-brut-api.herokuapp.com/movies')
            .then(r => r.json())
            .then(movies => dispatch(setMovies(movies), dispatch(loadingFalse())))
    }
}   


// const movies = [{
    //     "id": 22,
    //     "name": "Shadows of Forgotten Ancestors",
    //     "url": "https://www.youtube.com/watch?v=OeIzpWNG23Y",
    //     "dir": "Sergei Parajanov",
    //     "year": 1965
    // },
    // {
        //     "id": 23,
        //     "name": "Color of Pomegranates",
        //     "url": "https://www.youtube.com/watch?v=lAurgH4G7Tg",
        //     "dir": "Sergei Parajanov",
        //     "year": 1969
        // },
        // {
            //     "id": 24,
            //     "name": "The Beales of Grey Gardens",
            //     "url": "https://www.youtube.com/watch?v=nYpM7Srz5AQ",
            //     "dir": "Albert and David Maysles",
            //     "year": 2006
            // },
            // {
                //     "id": 25,
                //     "name": "Breathless",
                //     "url": "https://www.youtube.com/watch?v=WCDEAu4R8hA",
                //     "dir": "Jean Luc Godard",
                //     "year": 1960
                // }]

